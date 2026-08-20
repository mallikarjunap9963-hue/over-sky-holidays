import { apiClient } from './apiClient';
import { attractionPackages, experienceItems } from '../data';

export interface ApiTourItem {
  id: number | string;
  title: string;
  slug?: string;
  country?: string;
  duration?: string;
  price?: string | number;
  image?: string;
  thumbnail_url?: string;
  tour_type?: { id: number; name: string; slug: string };
  locations?: string[];
  features?: Array<{
    id: number;
    title: string;
    description: string;
    type: string;
    type_label?: string;
  }>;
  detail?: {
    heading?: string;
    description?: string;
    about?: string;
    inclusions?: string[];
    exclusions?: string[];
    gallery?: string[];
  };
}

export const tourService = {
  async getTours(params?: {
    page?: number;
    per_page?: number;
    search?: string;
    type?: 'domestic' | 'international' | string;
    destination?: string;
  }): Promise<{ tours: ApiTourItem[]; isLive: boolean }> {
    const res = await apiClient.get<ApiTourItem[]>('/tours', params);
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      // Normalize image URLs
      const mapped = res.data.map((t) => ({
        ...t,
        image: t.thumbnail_url || t.image || '',
        locations:
          t.locations ||
          (t.features
            ? t.features.filter((f) => f.type === 'place_covered').map((f) => f.title)
            : [t.country || t.title]),
      }));
      return { tours: mapped, isLive: true };
    }

    // Graceful fallback to existing curated tour data if needed
    const type = params?.type?.toLowerCase();
    let fallback = type === 'international'
      ? attractionPackages.International
      : type === 'domestic'
      ? attractionPackages.Domestic
      : [...attractionPackages.Domestic, ...attractionPackages.International];

    if (params?.destination && params.destination !== 'Select Destination') {
      const destLower = params.destination.toLowerCase();
      fallback = fallback.filter((f) => f.title.toLowerCase().includes(destLower) || f.country.toLowerCase().includes(destLower));
    }

    return { tours: fallback as any[], isLive: false };
  },

  async getTourById(id: string | number, typeHint?: string): Promise<{ tour: any; isLive: boolean }> {
    const res = await apiClient.get<any>(`/tours/${id}`);
    if (res.success && res.data) {
      const t = res.data;
      return {
        tour: {
          ...t,
          image: t.thumbnail_url || t.image || '',
          locations:
            t.locations ||
            (t.features
              ? t.features.filter((f: any) => f.type === 'place_covered').map((f: any) => f.title)
              : [t.country || t.title]),
        },
        isLive: true,
      };
    }

    // Fallback from static data
    const idNum = Number(id);
    let fallbackTour = null;
    if (typeHint === 'packages') {
      fallbackTour = experienceItems['Tour Packages']?.find((item: any) => item.id === idNum);
    } else {
      const key = typeHint?.toLowerCase() === 'domestic' ? 'Domestic' : 'International';
      fallbackTour = attractionPackages[key]?.find((item: any) => item.id === idNum);
      if (!fallbackTour) {
        fallbackTour = [...attractionPackages.Domestic, ...attractionPackages.International].find(
          (item: any) => item.id === idNum
        );
      }
    }

    return { tour: fallbackTour, isLive: false };
  },

  async getTourTypes(): Promise<string[]> {
    const res = await apiClient.get<{ id: number; name: string }[]>('/tours/types');
    if (res.success && Array.isArray(res.data) && res.data.length > 0) {
      return res.data.map((item) => item.name);
    }
    return ['Domestic Tours', 'International Tours', 'Family Tour', 'Couple Tour', 'Group Tour'];
  },

  async getDestinations(): Promise<string[]> {
    const res = await apiClient.get<{ destinations: string[] }>('/destinations');
    if (res.success && res.data?.destinations && res.data.destinations.length > 0) {
      return res.data.destinations;
    }
    return [
      'Goa',
      'Kullu & Manali',
      'Kerala',
      'Dubai',
      'Maldives',
      'Singapore & Malaysia',
      'Thailand',
      'Vietnam',
      'Bali',
    ];
  },
};
