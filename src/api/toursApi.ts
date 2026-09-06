import { apiClient } from './apiClient';
import type { ApiTour, ApiTourType, ApiTourInquiryPayload, ApiResponse } from './types';
import { mapTourFromApi } from './mappers';

const toursApiBase = {
  // Fetch single page of tours
  async getTours(params?: {
    tour_type_id?: number;
    search?: string;
    page?: number;
    per_page?: number;
  }): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; raw: ApiTour[]; isLive: boolean; error?: string; meta?: any }> {
    const res = await apiClient.get<ApiTour[]>('/tours', params);
    const dataList = Array.isArray(res.data) ? res.data : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && dataList.length >= 0) {
      const mapped = dataList.map(mapTourFromApi);
      return { tours: mapped, raw: dataList, isLive: true, meta: (res as any).meta };
    }
    return { tours: [], raw: [], isLive: false, error: res.message || 'Failed to fetch tours' };
  },
};

// In-memory cache and promise deduplicator
let cachedAllTours: { tours: ReturnType<typeof mapTourFromApi>[]; raw: ApiTour[]; isLive: boolean; error?: string } | null = null;
let inFlightAllToursPromise: Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; raw: ApiTour[]; isLive: boolean; error?: string }> | null = null;
let lastAllToursFetchTime = 0;
const TOURS_CACHE_TTL_MS = 60000; // 60 seconds

export const toursApi = {
  ...toursApiBase,

  // Fetch ALL tours across all pages with deduplication and caching
  async getAllTours(forceRefresh = false): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; raw: ApiTour[]; isLive: boolean; error?: string }> {
    const now = Date.now();
    if (!forceRefresh && cachedAllTours && (now - lastAllToursFetchTime < TOURS_CACHE_TTL_MS)) {
      return cachedAllTours;
    }

    if (!forceRefresh && inFlightAllToursPromise) {
      return inFlightAllToursPromise;
    }

    inFlightAllToursPromise = (async () => {
      try {
        const firstRes = await toursApiBase.getTours({ page: 1 });
        if (!firstRes.isLive) {
          return { tours: [], raw: [], isLive: false, error: firstRes.error };
        }

        let allRaw = [...firstRes.raw];
        const lastPage = firstRes.meta?.last_page || 1;

        if (lastPage > 1) {
          const pagePromises = [];
          for (let p = 2; p <= lastPage; p++) {
            pagePromises.push(toursApiBase.getTours({ page: p }));
          }
          const restResults = await Promise.all(pagePromises);
          restResults.forEach((r) => {
            if (r.isLive && r.raw.length > 0) {
              allRaw.push(...r.raw);
            }
          });
        }

        const mapped = allRaw.map(mapTourFromApi);
        const result = { tours: mapped, raw: allRaw, isLive: true };
        cachedAllTours = result;
        lastAllToursFetchTime = Date.now();
        return result;
      } catch (err: any) {
        return { tours: [], raw: [], isLive: false, error: err.message || 'Failed to load all tours' };
      } finally {
        inFlightAllToursPromise = null;
      }
    })();

    return inFlightAllToursPromise;
  },

  // Get Domestic Tours (type_id: 5 or slug 'domestic')
  async getDomesticTours(): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; isLive: boolean; error?: string }> {
    const res = await this.getAllTours();
    if (res.isLive) {
      const filtered = res.raw.filter((t: any) => {
        const typeId = t.tour_type_id ?? t.tour_type?.id;
        const typeSlug = t.tour_type?.slug?.toLowerCase() || '';
        const typeName = t.tour_type?.name?.toLowerCase() || '';
        return typeId === 5 || typeSlug.includes('domestic') || typeName.includes('domestic');
      });
      return { tours: filtered.map(mapTourFromApi), isLive: true };
    }
    return { tours: [], isLive: false, error: res.error || 'Failed to fetch domestic tours' };
  },

  // Get International Tours (type_id: 6 or slug 'international')
  async getInternationalTours(): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; isLive: boolean; error?: string }> {
    const res = await this.getAllTours();
    if (res.isLive) {
      const filtered = res.raw.filter((t: any) => {
        const typeId = t.tour_type_id ?? t.tour_type?.id;
        const typeSlug = t.tour_type?.slug?.toLowerCase() || '';
        const typeName = t.tour_type?.name?.toLowerCase() || '';
        return typeId === 6 || typeSlug.includes('international') || typeName.includes('international');
      });
      return { tours: filtered.map(mapTourFromApi), isLive: true };
    }
    return { tours: [], isLive: false, error: res.error || 'Failed to fetch international tours' };
  },

  // Get single tour details by ID or slug
  async getTourById(idOrSlug: string | number): Promise<{ tour: ReturnType<typeof mapTourFromApi> | null; isLive: boolean; error?: string }> {
    // 1. If numeric ID, try direct endpoint first
    if (!isNaN(Number(idOrSlug))) {
      const res = await apiClient.get<ApiTour>(`/tours/${idOrSlug}`);
      const rawData = (res.data as any)?.data || res.data;
      if (res.success && rawData && (rawData.title || rawData.id)) {
        return { tour: mapTourFromApi(rawData), isLive: true };
      }
    }

    // 2. Fetch full tours list and match by slug or ID
    const listRes = await this.getAllTours();
    if (listRes.isLive && listRes.raw.length > 0) {
      const normQuery = String(idOrSlug).toLowerCase().trim();
      const found = listRes.raw.find((t) => {
        return (
          String(t.id) === normQuery ||
          (t.slug && t.slug.toLowerCase() === normQuery) ||
          t.title.toLowerCase().replace(/[^a-z0-9]/g, '-') === normQuery ||
          t.title.toLowerCase().includes(normQuery)
        );
      });
      if (found) {
        return { tour: mapTourFromApi(found), isLive: true };
      }
    }

    return { tour: null, isLive: true };
  },

  // Get tour categories / types
  async getTourTypes(): Promise<{ tourTypes: ApiTourType[]; isLive: boolean }> {
    const res = await apiClient.get<ApiTourType[]>('/tour-types');
    const dataList = Array.isArray(res.data) ? res.data : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && dataList.length > 0) {
      return { tourTypes: dataList, isLive: true };
    }
    return { tourTypes: [], isLive: false };
  },

  // Submit specific tour booking inquiry
  async submitTourInquiry(payload: ApiTourInquiryPayload): Promise<ApiResponse> {
    return apiClient.post('/tour-inquiries', {
      tour_id: Number(payload.tour_id),
      name: payload.name.trim(),
      phone: payload.phone.trim(),
      email: payload.email.trim(),
      travel_date: payload.travel_date.trim(),
      travelers: Number(payload.travelers) || 1,
    });
  },
};

