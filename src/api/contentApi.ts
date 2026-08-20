import { apiClient } from './apiClient';
import type {
  ApiHero,
  ApiTestimonial,
  ApiAboutSection,
  ApiWhyChooseSection,
  ApiOurProcess,
  ApiTravelSupport,
  ApiAdventure,
  ApiAdventureCategory,
  ApiCounter,
  ApiWhatWeOffer,
  ApiPageBanner,
} from './types';
import {
  mapHeroFromApi,
  mapTestimonialFromApi,
} from './mappers';

export const contentApi = {
  // Get homepage hero slides
  async getHeroes(): Promise<{ heroes: ReturnType<typeof mapHeroFromApi>[]; raw: ApiHero[]; isLive: boolean }> {
    const res = await apiClient.get<ApiHero[]>('/heroes');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      const active = res.data.filter((h) => h.status !== false);
      const items = active.length > 0 ? active : res.data;
      return { heroes: items.map(mapHeroFromApi), raw: res.data, isLive: true };
    }
    return { heroes: [], raw: [], isLive: false };
  },

  // Get active testimonials
  async getTestimonials(): Promise<{ testimonials: ReturnType<typeof mapTestimonialFromApi>[]; raw: ApiTestimonial[]; isLive: boolean }> {
    const res = await apiClient.get<ApiTestimonial[]>('/testimonials');
    const items = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);

    if (res.success && items.length > 0) {
      const active = items.filter((t: any) => t.status !== false);
      const list = active.length > 0 ? active : items;
      return { testimonials: list.map(mapTestimonialFromApi), raw: items, isLive: true };
    }
    return { testimonials: [], raw: [], isLive: false };
  },

  // Get active About Us section details
  async getAboutSectionActive(): Promise<{ about: ApiAboutSection | null; isLive: boolean }> {
    const res = await apiClient.get<ApiAboutSection>('/about-section/active');
    if (res.success && res.data) {
      return { about: res.data, isLive: true };
    }
    return { about: null, isLive: false };
  },

  // Get active Why Choose Us items
  async getWhyChooseSectionsActive(): Promise<{ items: ApiWhyChooseSection[]; isLive: boolean }> {
    const res = await apiClient.get<ApiWhyChooseSection[]>('/why-choose-sections/active');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { items: res.data, isLive: true };
    }
    return { items: [], isLive: false };
  },

  // Get active Our Processes
  async getOurProcessesActive(): Promise<{ items: ApiOurProcess[]; isLive: boolean }> {
    const res = await apiClient.get<ApiOurProcess[]>('/our-processes/active');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { items: res.data, isLive: true };
    }
    return { items: [], isLive: false };
  },

  // Get active travel support sections
  async getTravelSupportActive(): Promise<{ items: ApiTravelSupport[]; isLive: boolean }> {
    const res = await apiClient.get<ApiTravelSupport[]>('/travel-support/active');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { items: res.data, isLive: true };
    }
    return { items: [], isLive: false };
  },

  // Get active adventures
  async getAdventures(): Promise<{ adventures: ApiAdventure[]; isLive: boolean }> {
    const res = await apiClient.get<ApiAdventure[]>('/adventures');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { adventures: res.data, isLive: true };
    }
    return { adventures: [], isLive: false };
  },

  // Get adventure categories
  async getAdventureCategories(): Promise<{ categories: ApiAdventureCategory[]; isLive: boolean }> {
    const res = await apiClient.get<ApiAdventureCategory[]>('/adventure-categories');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { categories: res.data, isLive: true };
    }
    return { categories: [], isLive: false };
  },

  // Get counters / stats
  async getCounters(): Promise<{ counters: ApiCounter[]; isLive: boolean }> {
    const res = await apiClient.get<ApiCounter[]>('/counters');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { counters: res.data, isLive: true };
    }
    return { counters: [], isLive: false };
  },

  // Get What We Offer items
  async getWhatWeOffers(): Promise<{ items: ApiWhatWeOffer[]; isLive: boolean }> {
    const res = await apiClient.get<ApiWhatWeOffer[]>('/what-we-offers');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { items: res.data, isLive: true };
    }
    return { items: [], isLive: false };
  },

  // Get Page Banners
  async getPageBanners(): Promise<{ banners: ApiPageBanner[]; isLive: boolean }> {
    const res = await apiClient.get<ApiPageBanner[]>('/page-banners');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return { banners: res.data, isLive: true };
    }
    return { banners: [], isLive: false };
  },
};
