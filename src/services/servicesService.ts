import { apiClient } from './apiClient';
import { servicesData } from '../data/servicesData';

export const servicesService = {
  async getServices() {
    const res = await apiClient.get('/services');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { services: res.data, isLive: true };
    }
    return { services: Object.values(servicesData), isLive: false };
  },

  async getServiceById(id: string) {
    const res = await apiClient.get(`/services/${id}`);
    if (res.success && res.data) {
      return { service: res.data, isLive: true };
    }
    return { service: servicesData[id] || null, isLive: false };
  },
};
