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
  }): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; raw: ApiTour[]; isLive: boolean }> {
    const res = await apiClient.get<ApiTour[]>('/tours', params);
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      const mapped = res.data.map(mapTourFromApi);
      return { tours: mapped, raw: res.data, isLive: true };
    }
    return { tours: [], raw: [], isLive: false };
  },

  // Get Domestic Tours (tour_type_id = 2 or slug = 'domestic-tours')
  async getDomesticTours(): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; isLive: boolean }> {
    const res = await apiClient.get<ApiTour[]>('/tours', { tour_type_id: 2, per_page: 100 });
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      const filtered = res.data.filter((t) => {
        return (
          t.tour_type_id === 2 ||
          t.tour_type?.slug === 'domestic-tours' ||
          t.tour_type?.name?.toLowerCase().includes('domestic')
        );
      });
      // If backend query param already returned items or filtered items exist:
      const items = filtered.length > 0 ? filtered : res.data;
      return { tours: items.map(mapTourFromApi), isLive: true };
    }
    return { tours: [], isLive: false };
  },

  // Get International Tours (tour_type_id = 3 or slug = 'international-tours')
  async getInternationalTours(): Promise<{ tours: ReturnType<typeof mapTourFromApi>[]; isLive: boolean }> {
    const res = await apiClient.get<ApiTour[]>('/tours', { tour_type_id: 3, per_page: 100 });
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      const filtered = res.data.filter((t) => {
        return (
          t.tour_type_id === 3 ||
          t.tour_type?.slug === 'international-tours' ||
          t.tour_type?.name?.toLowerCase().includes('international')
        );
      });
      const items = filtered.length > 0 ? filtered : res.data;
      return { tours: items.map(mapTourFromApi), isLive: true };
    }
    return { tours: [], isLive: false };
  },

  // Get single tour details by ID
  async getTourById(id: string | number): Promise<{ tour: ReturnType<typeof mapTourFromApi> | null; isLive: boolean }> {
    const res = await apiClient.get<ApiTour>(`/tours/${id}`);
    if (res.success && res.data) {
      return { tour: mapTourFromApi(res.data), isLive: true };
    }
    return { tour: null, isLive: false };
  },

  // Get tour categories / types
  async getTourTypes(): Promise<{ tourTypes: ApiTourType[]; isLive: boolean }> {
    const res = await apiClient.get<ApiTourType[]>('/tour-types');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { tourTypes: res.data, isLive: true };
    }
    return { tourTypes: [], isLive: false };
  },

  // Submit specific tour booking inquiry
  async submitTourInquiry(payload: ApiTourInquiryPayload): Promise<ApiResponse> {
    return apiClient.post('/tour-inquiries', payload);
  },
};
