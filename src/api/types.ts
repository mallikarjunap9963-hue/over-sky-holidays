// Central API Types matching actual Swagger backend schemas (https://api.openskyholidays.com/api/docs)

export interface ApiResponse<T = any> {
  success?: boolean;
  status?: boolean;
  message?: string;
  data?: T;
  blog?: T;
  links?: {
    first: string | null;
    last: string | null;
    prev: string | null;
    next: string | null;
  };
  meta?: {
    current_page: number;
    from: number | null;
    last_page: number;
    per_page: number;
    to: number | null;
    total: number;
  };
  errors?: Record<string, string[]>;
}

export interface ApiTourType {
  id: number;
  name: string;
  slug: string;
  created_at?: string;
  updated_at?: string;
}

export interface ApiTourFeature {
  id: number;
  tour_id: number;
  type: 'package_inclusion' | 'tour_highlight' | 'place_covered' | string;
  type_label?: string;
  title: string;
  description?: string;
  image?: string | null;
  image_url?: string | null;
  sort_order?: number;
  status?: string | boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ApiTourDetail {
  id?: number;
  tour_id?: number;
  heading?: string;
  description?: string;
  about?: string;
  inclusions?: string[];
  packageInclusions?: Array<{ id: string | number; title: string; description: string; icon?: any }>;
  exclusions?: string[];
  gallery?: string[];
  gallery_count?: number;
  status?: boolean | string;
  created_at?: string;
  updated_at?: string;
}

export interface ApiTour {
  id: number;
  tour_type_id?: number;
  tour_type?: ApiTourType;
  title: string;
  slug: string;
  country?: string;
  duration?: string;
  thumbnail?: string;
  thumbnail_url?: string;
  status?: boolean;
  detail?: ApiTourDetail;
  gallery?: (string | { url?: string; image?: string })[];
  features?: ApiTourFeature[] | string[];
  tour_features?: ApiTourFeature[];
  package_inclusions?: ApiTourFeature[];
  places_covered?: ApiTourFeature[];
  highlights?: string[] | ApiTourFeature[];
  created_at?: string;
  updated_at?: string;
}

export interface ApiBlogCategory {
  id: number;
  name: string;
  slug: string;
}

export interface ApiBlogAuthor {
  id: number;
  name: string;
  image?: string | null;
  description?: string | null;
  twitter_url?: string | null;
  facebook_url?: string | null;
  linkedin_url?: string | null;
}

export interface ApiTableOfContentItem {
  number: string;
  title: string;
}

export interface ApiBlog {
  id: number;
  title: string;
  slug: string;
  category?: ApiBlogCategory | string;
  author?: ApiBlogAuthor | string;
  author_name?: string;
  short_description?: string;
  content?: string;
  featured_image?: string;
  image?: string;
  image_url?: string;
  read_time?: number;
  read_time_text?: string;
  published_at?: string;
  published_date?: string;
  table_of_contents?: ApiTableOfContentItem[];
  created_at?: string;
  updated_at?: string;
}

export interface ApiBlogDetailResponse {
  success: boolean;
  message?: string;
  blog: ApiBlog;
  recent_blogs?: ApiBlog[];
  related_blogs?: ApiBlog[];
  previous_blog?: ApiBlog | null;
  next_blog?: ApiBlog | null;
}

export interface ApiServiceFeature {
  title: string;
  description: string;
}

export interface ApiServiceProcessStep {
  icon?: string;
  title: string;
  description: string;
}

export interface ApiService {
  id: number;
  title: string;
  slug: string;
  about_title?: string;
  about_description?: string;
  about_image?: string;
  about_image_url?: string;
  features?: ApiServiceFeature[];
  service_items?: string[];
  process_steps?: ApiServiceProcessStep[];
  documents?: string[];
  why_choose_items?: string[];
  cta_title?: string;
  cta_description?: string;
  cta_background_image?: string;
  cta_background_image_url?: string;
  stats?: Array<{ number: string; label: string }>;
  status?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ApiHero {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  image_url?: string;
  btn_text?: string;
  btn_link?: string;
  button_text?: string;
  button_link?: string;
  status?: boolean;
  sort_order?: number;
}

export interface ApiTestimonial {
  id: number;
  platform?: string;
  customer_name: string;
  customer_image?: string;
  customer_image_url?: string;
  location?: string;
  rating: number;
  review: string;
  reviewed_at?: string;
  review_date?: string;
  review_time?: string;
  status?: boolean;
}

export interface ApiAdventureCategory {
  id: number;
  name: string;
  slug: string;
  status?: string;
}

export interface ApiAdventure {
  id: number;
  category?: ApiAdventureCategory;
  title: string;
  description?: string;
  features?: string[];
  video_link?: string;
  image_one?: string | null;
  image_one_url?: string | null;
  image_two?: string | null;
  image_two_url?: string | null;
  status?: string;
}

export interface ApiPageBanner {
  id: number;
  page: string;
  label?: string;
  title: string;
  subtitle?: string;
  description?: string;
  breadcrumb_title?: string;
  image?: string;
  image_url?: string;
  banner_image?: string;
  status?: boolean;
}

export interface ApiAboutSection {
  id: number;
  main_heading: string;
  mission_title?: string;
  mission_icon?: string;
  focus_title?: string;
  focus_icon?: string;
  description?: string;
  customer_count?: number;
  destinations_subtitle?: string;
  status?: boolean;
  globe_locations?: Array<{ id: number; location_name: string }>;
  customer_avatars?: Array<{ id?: number; image_url?: string; url?: string } | string>;
}

export interface ApiWhyChooseSection {
  id: number;
  title: string;
  description: string;
  icon?: string | null;
  image_url?: string | null;
  background_color?: string | null;
  text_color?: string | null;
  sort_order?: number;
  status?: boolean;
}

export interface ApiOurProcess {
  id: number;
  small_heading?: string;
  heading: string;
  description?: string;
  promises?: Array<{ text: string }>;
  status?: string;
}

export interface ApiTravelSupport {
  id: number;
  small_heading?: string;
  heading: string;
  description?: string;
  image?: string;
  image_url?: string;
  features?: string[];
  status?: boolean;
}

export interface ApiCounter {
  id: number;
  value: string;
  name: string;
  count_number?: string;
  count_title?: string;
  icon?: string | null;
  status?: boolean;
}

export interface ApiWhatWeOffer {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  image_url?: string;
  status?: string;
}

export interface ApiEnquiryPayload {
  name: string;
  email: string;
  phone: string;
  travel_date: string; // YYYY-MM-DD
  destination: string;
  travelers: number;
  tour_type: string;
  message?: string;
}

export interface ApiTourInquiryPayload {
  tour_id: number;
  name: string;
  phone: string;
  email: string;
  travel_date: string; // YYYY-MM-DD
  travelers: number;
}

export interface ApiSocialLink {
  name?: string;
  platform?: string;
  url?: string;
  link?: string;
  icon?: string;
}

export interface ApiTopHeader {
  id: number;
  email: string;
  tagline?: string;
  button_text?: string;
  button_url?: string;
  social_links?: ApiSocialLink[];
  status?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ApiContactSection {
  id: number;
  phone: string;
  email: string;
  address: string;
  map_link?: string;
  whatsapp_number?: string;
  map_embed_url?: string;
  status?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ApiOfferBanner {
  id: number;
  title: string;
  discount_text?: string;
  subtitle?: string;
  image?: string;
  image_url?: string;
  status?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ApiOurStory {
  id: number;
  heading: string;
  description: string;
  images?: Array<{ id?: number; image?: string; image_url?: string; url?: string }>;
  features?: Array<{ title?: string; text?: string; description?: string }>;
  status?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface ApiAboutWhyChooseUs {
  id: number;
  title: string;
  subtitle?: string;
  description: string;
  image?: string;
  image_url?: string;
  features?: Array<{
    title: string;
    icon?: string;
    description: string;
  }>;
  badge_title?: string;
  badge_subtitle?: string;
  status?: string | boolean;
}

export interface ApiAboutCoreValue {
  id: number;
  title: string;
  icon?: string;
  description: string;
  status?: boolean | string;
}

