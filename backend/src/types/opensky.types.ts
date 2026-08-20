export interface TourType {
  id: number;
  name: string;
  slug: string;
  tours_count?: number;
  created_at?: string;
  updated_at?: string;
}

export interface TourFeature {
  id: number;
  tour_id: number;
  type: string;
  type_label?: string;
  title: string;
  description: string;
  image?: string | null;
  image_url?: string | null;
  icon?: string | null;
  sort_order?: number;
  status?: string | boolean;
  created_at?: string;
  updated_at?: string;
}

export interface TourDetail {
  id?: number;
  tour_id?: number;
  heading?: string;
  description?: string;
  overview?: string;
  itinerary?: Array<{ day: number; title: string; description: string }> | string;
  inclusions?: string[] | string;
  exclusions?: string[] | string;
  gallery?: string[];
  status?: boolean | string;
}

export interface Tour {
  id: number;
  tour_type_id: number;
  tour_type?: TourType;
  title: string;
  slug: string;
  country?: string;
  duration?: string;
  price?: string | number;
  description?: string;
  thumbnail?: string;
  thumbnail_url?: string;
  image?: string;
  status: boolean | string;
  detail?: TourDetail;
  gallery?: Array<{ id: number; image: string; image_url?: string }>;
  features?: TourFeature[];
  locations?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface TourInquiryInput {
  tour_id: number | string;
  name: string;
  phone: string;
  email: string;
  travel_date: string;
  travelers: number | string;
}

export interface EnquiryInput {
  name: string;
  email: string;
  phone: string;
  travel_date: string;
  destination: string;
  travelers: number | string;
  tour_type: string;
  message?: string;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  image?: string;
  image_url?: string;
  status?: boolean | string;
  created_at?: string;
  updated_at?: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  content?: string;
  short_description?: string;
  image?: string;
  image_url?: string;
  category_id?: number;
  category_name?: string;
  author_id?: number;
  author_name?: string;
  created_at?: string;
  updated_at?: string;
  status?: boolean | string;
}

export interface Testimonial {
  id: number;
  platform?: string;
  customer_name: string;
  customer_image?: string;
  customer_image_url?: string;
  location?: string;
  rating?: number;
  review: string;
  reviewed_at?: string;
  status?: boolean | string;
}

export interface Hero {
  id: number;
  title: string;
  subtitle?: string;
  image?: string;
  image_url?: string;
  btn_text?: string;
  btn_link?: string;
  status?: boolean | string;
}

export interface OfferBanner {
  id: number;
  title: string;
  discount_text?: string;
  subtitle?: string;
  image?: string;
  image_url?: string;
  status?: boolean | string;
}

export interface StoredBooking {
  id: string;
  bookingReference: string;
  providerBookingId?: string | number;
  type: 'tour_inquiry' | 'general_enquiry' | 'hotel_booking';
  tourId?: number | string;
  tourName?: string;
  hotelId?: string;
  hotelName?: string;
  guestDetails: {
    name: string;
    email: string;
    phone: string;
    nationality?: string;
  };
  travelDate: string;
  checkIn?: string;
  checkOut?: string;
  travelers: number;
  destination?: string;
  tourType?: string;
  totalAmount?: number | string;
  currency?: string;
  status: 'CONFIRMED' | 'PENDING' | 'CANCELLED' | 'INQUIRY_SENT';
  createdAt: string;
  updatedAt: string;
  cancellationReason?: string;
  cancelledAt?: string;
  rawProviderResponse?: any;
}
