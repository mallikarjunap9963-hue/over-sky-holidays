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
    return apiClient.post('/bookings', payload);
  },

  // Submit general travel inquiry
  async submitGeneralEnquiry(payload: GeneralEnquiryPayload): Promise<ApiResponse> {
    return apiClient.post('/enquiries', payload);
  },

  // Retrieve booking details
  async getBooking(idOrReference: string): Promise<ApiResponse> {
    return apiClient.get(`/bookings/${encodeURIComponent(idOrReference)}`);
  },

  // Cancel booking
  async cancelBooking(idOrReference: string, reason?: string): Promise<ApiResponse> {
    return apiClient.post(`/bookings/${encodeURIComponent(idOrReference)}/cancel`, { reason });
  },
};
