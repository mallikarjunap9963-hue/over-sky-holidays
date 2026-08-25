import { apiClient } from './apiClient';
import type { ApiTour, ApiTourType, ApiTourInquiryPayload, ApiResponse } from './types';
import { mapTourFromApi } from './mappers';

export const toursApi = {
  // Get all tours with optional filters
  async getTours(params?: {
    tour_type_id?: number;
    search?: string;
    page?: number;
    per_page?: number;
  }): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; raw: ApiTour[]; isLive: boolean; error?: string }> {
    const res = await apiClient.get<ApiTour[]>('/tours', params);
    const dataList = Array.isArray(res.data) ? res.data : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && dataList.length >= 0) {
      const mapped = dataList.map(mapTourFromApi);
      return { tours: mapped, raw: dataList, isLive: true };
    }
    return { tours: [], raw: [], isLive: false, error: res.message || 'Failed to fetch tours' };
  },

  // Get Domestic Tours strictly by tour_type
  async getDomesticTours(): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; isLive: boolean; error?: string }> {
    const res = await apiClient.get<ApiTour[]>('/tours', { per_page: 100 });
    const dataList = Array.isArray(res.data) ? res.data : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success) {
      const filtered = dataList.filter((t: any) => {
        const typeId = t.tour_type_id ?? t.tour_type?.id;
        const typeSlug = t.tour_type?.slug?.toLowerCase() || '';
        const typeName = t.tour_type?.name?.toLowerCase() || '';
        return typeId === 2 || typeSlug === 'domestic-tours' || typeName.includes('domestic');
      });
      return { tours: filtered.map(mapTourFromApi), isLive: true };
    }
    return { tours: [], isLive: false, error: res.message || 'Failed to fetch domestic tours' };
  },

  // Get International Tours strictly by tour_type
  async getInternationalTours(): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; isLive: boolean; error?: string }> {
    const res = await apiClient.get<ApiTour[]>('/tours', { per_page: 100 });
    const dataList = Array.isArray(res.data) ? res.data : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success) {
      const filtered = dataList.filter((t: any) => {
        const typeId = t.tour_type_id ?? t.tour_type?.id;
        const typeSlug = t.tour_type?.slug?.toLowerCase() || '';
        const typeName = t.tour_type?.name?.toLowerCase() || '';
        return typeId === 3 || typeSlug === 'international-tours' || typeName.includes('international');
      });
      return { tours: filtered.map(mapTourFromApi), isLive: true };
    }
    return { tours: [], isLive: false, error: res.message || 'Failed to fetch international tours' };
  },

  // Get single tour details by ID or slug
  async getTourById(idOrSlug: string | number): Promise<{ tour: ReturnType<typeof mapTourFromApi> | null; isLive: boolean; error?: string }> {
    // 1. If numeric ID, try direct endpoint first
    if (!isNaN(Number(idOrSlug))) {
      const res = await apiClient.get<ApiTour>(`/tours/${idOrSlug}`);
      const rawData = (res.data as any)?.data || res.data;
      if (res.success && rawData && rawData.title) {
        return { tour: mapTourFromApi(rawData), isLive: true };
      }
    }

    // 2. Fetch full tours list and match by slug or ID
    const listRes = await this.getTours({ per_page: 100 });
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
    return apiClient.post('/tour-inquiries', payload);
  },
};

