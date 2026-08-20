import { apiClient } from './apiClient';
import type { ApiEnquiryPayload, ApiResponse } from './types';

export const enquiriesApi = {
  // Submit customer travel enquiry (POST /api/enquiries)
  async submitEnquiry(payload: ApiEnquiryPayload): Promise<ApiResponse> {
    // Ensure travelers is an integer and travel_date is formatted
    const cleanPayload: ApiEnquiryPayload = {
      name: payload.name.trim(),
      email: payload.email.trim(),
      phone: payload.phone.trim(),
      travel_date: payload.travel_date.trim(),
      destination: payload.destination.trim() || 'General Enquiry',
      travelers: Number(payload.travelers) || 1,
      tour_type: payload.tour_type.trim() || 'Domestic Tour',
      message: payload.message?.trim() || undefined,
    };

    return apiClient.post('/enquiries', cleanPayload);
  },
};
