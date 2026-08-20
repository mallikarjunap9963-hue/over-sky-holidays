import { apiClient } from './apiClient';
import type { ApiService } from './types';
import { mapServiceFromApi } from './mappers';

export const servicesApi = {
  // List active travel services
  async getServices(): Promise<{ services: ReturnType<typeof mapServiceFromApi>[]; raw: ApiService[]; isLive: boolean }> {
    const res = await apiClient.get<ApiService[]>('/services');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      const mapped = res.data.map(mapServiceFromApi);
      return { services: mapped, raw: res.data, isLive: true };
    }
    return { services: [], raw: [], isLive: false };
  },

  // Get service details by ID or slug
  async getServiceById(idOrSlug: string | number): Promise<{ service: ReturnType<typeof mapServiceFromApi> | null; isLive: boolean }> {
    // First try fetching the full services list (which contains complete details for each service)
    const listRes = await this.getServices();
    if (listRes.isLive && listRes.services.length > 0) {
      const normalizedQuery = String(idOrSlug).toLowerCase().trim();
      const found = listRes.services.find((s) => {
        const sSlug = String(s.id).toLowerCase();
        const sTitle = s.title.toLowerCase();
        return (
          sSlug === normalizedQuery ||
          String(s.serviceId) === normalizedQuery ||
          (normalizedQuery === 'passport' && (sSlug.includes('passport') || sTitle.includes('passport'))) ||
          (normalizedQuery === 'passport-services' && (sSlug.includes('passport') || sTitle.includes('passport'))) ||
          (normalizedQuery === 'flight-tickets' && (sSlug.includes('flight') || sTitle.includes('flight'))) ||
          (normalizedQuery === 'visa' && (sSlug.includes('visa') || sTitle.includes('visa')))
        );
      });

      if (found) {
        return { service: found, isLive: true };
      }
    }

    // Try direct endpoint if numeric
    if (!isNaN(Number(idOrSlug))) {
      const res = await apiClient.get<ApiService>(`/services/${idOrSlug}`);
      if (res.success && res.data && res.data.title) {
        return { service: mapServiceFromApi(res.data), isLive: true };
      }
    }

    return { service: null, isLive: false };
  },
};
