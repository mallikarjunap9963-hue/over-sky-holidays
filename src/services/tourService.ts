import { toursApi } from '../api/toursApi';

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
  }): Promise<{ tours: any[]; isLive: boolean }> {
    const type = params?.type?.toLowerCase();
    let res;
    if (type === 'domestic') {
      res = await toursApi.getDomesticTours();
    } else if (type === 'international') {
      res = await toursApi.getInternationalTours();
    } else {
      res = await toursApi.getTours(params);
    }

    let toursList = res.tours || [];

    if (params?.destination && params.destination !== 'Select Destination') {
      const destLower = params.destination.toLowerCase();
      toursList = toursList.filter((f) =>
        f.title.toLowerCase().includes(destLower) ||
        (f.country && f.country.toLowerCase().includes(destLower))
      );
    }

    return { tours: toursList, isLive: res.isLive };
  },

  async getTourById(id: string | number): Promise<{ tour: any; isLive: boolean }> {
    const res = await toursApi.getTourById(id);
    return { tour: res.tour, isLive: res.isLive };
  },

  async getTourTypes(): Promise<string[]> {
    const res = await toursApi.getTourTypes();
    if (res.isLive && res.tourTypes.length > 0) {
      return res.tourTypes.map((item) => item.name);
    }
    return ['Domestic Tours', 'International Tours'];
  },

  async getDestinations(): Promise<string[]> {
    const res = await toursApi.getTours({ per_page: 100 });
    if (res.isLive && res.tours.length > 0) {
      const set = new Set<string>();
      res.tours.forEach((t) => {
        if (t.country) set.add(t.country);
        if (t.locations) t.locations.forEach((loc) => set.add(loc));
      });
      return Array.from(set);
    }
    return [];
  },
};

