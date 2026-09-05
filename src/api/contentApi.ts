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
  ApiTopHeader,
  ApiContactSection,
  ApiOfferBanner,
  ApiOurStory,
  ApiAboutWhyChooseUs,
  ApiAboutCoreValue,
} from './types';
import {
  mapHeroFromApi,
  mapTestimonialFromApi,
} from './mappers';

export const contentApi = {
  // Top Header Bar (active)
  async getTopHeaderActive(): Promise<{ header: ApiTopHeader | null; isLive: boolean }> {
    const res = await apiClient.get<ApiTopHeader>('/top-header/active');
    const data = (res.data as any)?.data || res.data;
    if (res.success && data && (data.email || data.id)) {
      return { header: data, isLive: true };
    }
    return { header: null, isLive: false };
  },

  // Contact Section (active - phone, email, address, map)
  async getContactSectionActive(): Promise<{ contact: ApiContactSection | null; isLive: boolean }> {
    const res = await apiClient.get<ApiContactSection>('/contact-section/active');
    const data = (res.data as any)?.data || res.data;
    if (res.success && data && (data.phone || data.email)) {
      return { contact: data, isLive: true };
    }
    return { contact: null, isLive: false };
  },

  // Offer Banners (Phenomenal Deals)
  async getOfferBanners(): Promise<{ banners: ApiOfferBanner[]; isLive: boolean }> {
    const res = await apiClient.get<ApiOfferBanner[]>('/offer-banners');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      const active = data.filter((b: ApiOfferBanner) => b.status !== false);
      return { banners: active.length > 0 ? active : data, isLive: true };
    }
    return { banners: [], isLive: false };
  },

  // Homepage hero slides
  async getHeroes(): Promise<{ heroes: ReturnType<typeof mapHeroFromApi>[]; raw: ApiHero[]; isLive: boolean }> {
    const res = await apiClient.get<ApiHero[]>('/heroes');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      const active = data.filter((h: ApiHero) => h.status !== false);
      const items = active.length > 0 ? active : data;
      return { heroes: items.map(mapHeroFromApi), raw: data, isLive: true };
    }
    return { heroes: [], raw: [], isLive: false };
  },

  // Active testimonials
  async getTestimonials(): Promise<{ testimonials: ReturnType<typeof mapTestimonialFromApi>[]; raw: ApiTestimonial[]; isLive: boolean }> {
    const res = await apiClient.get<any>('/testimonials');
    let items: any[] = [];
    if (Array.isArray(res.data)) {
      items = res.data;
    } else if (res.data && Array.isArray(res.data.data)) {
      items = res.data.data;
    } else if (Array.isArray((res as any)?.data?.data)) {
      items = (res as any).data.data;
    }

    if (res.success && items.length > 0) {
      const active = items.filter((t: any) => t.status !== false);
      const list = active.length > 0 ? active : items;
      return { testimonials: list.map(mapTestimonialFromApi), raw: items, isLive: true };
    }
    return { testimonials: [], raw: [], isLive: false };
  },

  // Active About Us section details
  async getAboutSectionActive(): Promise<{ about: ApiAboutSection | null; isLive: boolean }> {
    const res = await apiClient.get<ApiAboutSection>('/about-section/active');
    const data = (res.data as any)?.data || res.data;
    if (res.success && data) {
      return { about: data, isLive: true };
    }
    return { about: null, isLive: false };
  },

  // Our Stories (About Us Story)
  async getOurStories(): Promise<{ story: ApiOurStory | null; stories: ApiOurStory[]; isLive: boolean }> {
    const res = await apiClient.get<ApiOurStory[]>('/our-stories');
    const list = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && list.length > 0) {
      const activeStory = list.find((s: any) => s.status === true || s.status === 1 || s.status === 'active') || list[0];
      return { story: activeStory, stories: list, isLive: !!activeStory };
    }
    return { story: null, stories: [], isLive: false };
  },

  // Active Why Choose Us items
  async getWhyChooseSectionsActive(): Promise<{ items: ApiWhyChooseSection[]; isLive: boolean }> {
    const res = await apiClient.get<ApiWhyChooseSection[]>('/why-choose-sections/active');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { items: data, isLive: true };
    }
    return { items: [], isLive: false };
  },

  // About Why Choose Us section (active)
  async getAboutWhyChooseUsActive(): Promise<{ whyUs: ApiAboutWhyChooseUs | null; isLive: boolean }> {
    const res = await apiClient.get<ApiAboutWhyChooseUs>('/about-why-choose-us/active');
    const data = (res.data as any)?.data || res.data;
    if (res.success && data && data.title) {
      return { whyUs: data, isLive: true };
    }
    return { whyUs: null, isLive: false };
  },

  // About Our Core Values
  async getAboutOurCoreValues(): Promise<{ values: ApiAboutCoreValue[]; isLive: boolean }> {
    const res = await apiClient.get<ApiAboutCoreValue[]>('/about-our-core-values');
    const list = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && list.length > 0) {
      return { values: list, isLive: true };
    }
    return { values: [], isLive: false };
  },

  // Active Our Processes
  async getOurProcessesActive(): Promise<{ items: ApiOurProcess[]; isLive: boolean }> {
    const res = await apiClient.get<ApiOurProcess[]>('/our-processes/active');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { items: data, isLive: true };
    }
    return { items: [], isLive: false };
  },

  // Active travel support sections
  async getTravelSupportActive(): Promise<{ items: ApiTravelSupport[]; isLive: boolean }> {
    const res = await apiClient.get<ApiTravelSupport[]>('/travel-support/active');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { items: data, isLive: true };
    }
    return { items: [], isLive: false };
  },

  // Active adventures
  async getAdventures(): Promise<{ adventures: ApiAdventure[]; isLive: boolean }> {
    const res = await apiClient.get<ApiAdventure[]>('/adventures');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { adventures: data, isLive: true };
    }
    return { adventures: [], isLive: false };
  },

  // Adventures by category slug
  async getAdventuresByCategory(slug: string): Promise<{ adventures: ApiAdventure[]; isLive: boolean }> {
    const res = await apiClient.get<ApiAdventure[]>(`/adventures/category/${encodeURIComponent(slug)}`);
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { adventures: data, isLive: true };
    }
    return { adventures: [], isLive: false };
  },

  // Adventure categories
  async getAdventureCategories(): Promise<{ categories: ApiAdventureCategory[]; isLive: boolean }> {
    const res = await apiClient.get<ApiAdventureCategory[]>('/adventure-categories');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { categories: data, isLive: true };
    }
    return { categories: [], isLive: false };
  },

  // Counters / stats (active)
  async getCountersActive(): Promise<{ counters: ApiCounter[]; isLive: boolean }> {
    const res = await apiClient.get<ApiCounter[]>('/counters/active');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { counters: data, isLive: true };
    }
    // Fallback to /counters
    return this.getCounters();
  },

  async getCounters(): Promise<{ counters: ApiCounter[]; isLive: boolean }> {
    const res = await apiClient.get<ApiCounter[]>('/counters');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { counters: data, isLive: true };
    }
    return { counters: [], isLive: false };
  },

  // What We Offer items
  async getWhatWeOffers(): Promise<{ items: ApiWhatWeOffer[]; isLive: boolean }> {
    const res = await apiClient.get<ApiWhatWeOffer[]>('/what-we-offers');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { items: data, isLive: true };
    }
    return { items: [], isLive: false };
  },

  // Page Banners (list all or single page)
  async getPageBanners(): Promise<{ banners: ApiPageBanner[]; isLive: boolean }> {
    const res = await apiClient.get<ApiPageBanner[]>('/page-banners');
    const data = Array.isArray(res.data)
      ? res.data
      : (Array.isArray((res.data as any)?.data) ? (res.data as any).data : []);
    if (res.success && data.length > 0) {
      return { banners: data, isLive: true };
    }
    return { banners: [], isLive: false };
  },

  async getPageBanner(page: string): Promise<{ banner: ApiPageBanner | null; isLive: boolean }> {
    // Try dedicated page route first
    const res = await apiClient.get<ApiPageBanner>(`/page-banners/page/${encodeURIComponent(page)}`);
    const data = (res.data as any)?.data || res.data;
    if (res.success && data && (data.title || data.image || data.page)) {
      return { banner: data, isLive: true };
    }

    // Fallback: search through all banners
    const listRes = await this.getPageBanners();
    if (listRes.isLive && listRes.banners.length > 0) {
      const norm = page.toLowerCase().trim();
      const found = listRes.banners.find((b) => b.page?.toLowerCase() === norm || b.page?.toLowerCase().includes(norm));
      if (found) {
        return { banner: found, isLive: true };
      }
    }

    return { banner: null, isLive: false };
  },
};
