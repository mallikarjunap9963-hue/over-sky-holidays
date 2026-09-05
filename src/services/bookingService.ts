import { apiClient, type ApiResponse } from './apiClient';

export interface TourBookingPayload {
  tour_id: number | string;
  tourName?: string;
  name: string;
  phone: string;
  email: string;
  travel_date: string;
  travelers: number | string;
}

export interface GeneralEnquiryPayload {
  name: string;
  email: string;
  phone: string;
  travel_date: string;
  destination: string;
  travelers: number | string;
  tour_type: string;
  message?: string;
}

export const bookingService = {
  // Submit tour booking inquiry
  async submitTourBooking(payload: TourBookingPayload): Promise<ApiResponse> {
    const cleanPayload = {
      tour_id: Number(payload.tour_id),
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      travel_date: payload.travel_date,
      travelers: Number(payload.travelers) || 1,
    };
    return apiClient.post('/tour-inquiries', cleanPayload);
  },

  // Submit general travel inquiry
  async submitGeneralEnquiry(payload: GeneralEnquiryPayload): Promise<ApiResponse> {
    return apiClient.post('/enquiries', payload);
  },
};
