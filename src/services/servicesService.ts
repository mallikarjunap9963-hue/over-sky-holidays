import { servicesApi } from '../api/servicesApi';

export const servicesService = {
  async getServices() {
    const res = await servicesApi.getServices();
    return { services: res.services, isLive: res.isLive };
  },

  async getServiceById(id: string) {
    const res = await servicesApi.getServiceById(id);
    return { service: res.service, isLive: res.isLive };
  },
};

