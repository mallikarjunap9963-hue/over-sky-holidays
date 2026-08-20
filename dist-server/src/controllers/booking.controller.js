import { openSkyService } from '../services/opensky.service.js';
import { bookingStore } from '../storage/booking.store.js';
export class BookingController {
    // Tour booking inquiry
    async createTourInquiry(req, res, next) {
        try {
            const { tour_id, name, phone, email, travel_date, travelers, tourName } = req.body;
            // 1. Submit inquiry to OpenSky Holidays provider API
            const providerRes = await openSkyService.submitTourInquiry({
                tour_id: Number(tour_id) || tour_id,
                name,
                phone,
                email,
                travel_date,
                travelers,
            });
            // 2. Persist booking audit record locally
            const bookingRef = bookingStore.generateReference();
            const bookingId = `book_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
            const stored = {
                id: bookingId,
                bookingReference: bookingRef,
                providerBookingId: providerRes?.data?.id || undefined,
                type: 'tour_inquiry',
                tourId: tour_id,
                tourName: tourName || `Tour #${tour_id}`,
                guestDetails: {
                    name,
                    email,
                    phone,
                },
                travelDate: travel_date,
                travelers: Number(travelers) || 1,
                status: 'CONFIRMED',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                rawProviderResponse: providerRes,
            };
            bookingStore.save(stored);
            return res.status(201).json({
                success: true,
                message: 'Tour booking inquiry submitted successfully.',
                bookingReference: bookingRef,
                bookingId: bookingId,
                data: {
                    id: bookingId,
                    bookingReference: bookingRef,
                    tourId: tour_id,
                    tourName: stored.tourName,
                    name,
                    email,
                    phone,
                    travelDate: travel_date,
                    travelers,
                    status: stored.status,
                    createdAt: stored.createdAt,
                },
            });
        }
        catch (error) {
            next(error);
        }
    }
    // General travel customer enquiry
    async createGeneralEnquiry(req, res, next) {
        try {
            const { name, email, phone, travel_date, destination, travelers, tour_type, message } = req.body;
            // 1. Submit general enquiry to OpenSky Holidays provider API
            const providerRes = await openSkyService.submitEnquiry({
                name,
                email,
                phone,
                travel_date,
                destination,
                travelers,
                tour_type,
                message,
            });
            // 2. Persist enquiry audit record locally
            const bookingRef = bookingStore.generateReference();
            const bookingId = `enq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
            const stored = {
                id: bookingId,
                bookingReference: bookingRef,
                providerBookingId: providerRes?.data?.id || undefined,
                type: 'general_enquiry',
                guestDetails: {
                    name,
                    email,
                    phone,
                },
                destination,
                tourType: tour_type,
                travelDate: travel_date,
                travelers: Number(travelers) || 1,
                status: 'INQUIRY_SENT',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                rawProviderResponse: providerRes,
            };
            bookingStore.save(stored);
            return res.status(201).json({
                success: true,
                message: 'Travel enquiry submitted successfully. Our executive will reach out to you shortly.',
                bookingReference: bookingRef,
                bookingId: bookingId,
                data: {
                    id: bookingId,
                    bookingReference: bookingRef,
                    name,
                    email,
                    phone,
                    destination,
                    travelDate: travel_date,
                    travelers,
                    status: stored.status,
                    createdAt: stored.createdAt,
                },
            });
        }
        catch (error) {
            next(error);
        }
    }
    // Retrieve booking by ID or reference code
    async getBooking(req, res, next) {
        try {
            const id = String(req.params.id);
            const booking = bookingStore.getById(id) || bookingStore.getByReference(id);
            if (!booking) {
                return res.status(404).json({
                    success: false,
                    message: `Booking with ID/reference "${id}" was not found.`,
                });
            }
            return res.json({
                success: true,
                data: booking,
            });
        }
        catch (error) {
            next(error);
        }
    }
    // Cancel booking
    async cancelBooking(req, res, next) {
        try {
            const id = String(req.params.id);
            const { reason } = req.body;
            const booking = bookingStore.getById(id) || bookingStore.getByReference(id);
            if (!booking) {
                return res.status(404).json({
                    success: false,
                    message: `Booking with ID/reference "${id}" was not found.`,
                });
            }
            if (booking.status === 'CANCELLED') {
                return res.status(400).json({
                    success: false,
                    message: 'This booking has already been cancelled.',
                    data: booking,
                });
            }
            const updated = bookingStore.updateStatus(id, 'CANCELLED', reason || 'Cancelled upon customer request');
            return res.json({
                success: true,
                message: 'Booking cancelled successfully.',
                data: updated,
            });
        }
        catch (error) {
            next(error);
        }
    }
    // List all stored bookings
    async listBookings(req, res, next) {
        try {
            const list = bookingStore.list();
            return res.json({
                success: true,
                total: list.length,
                data: list,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
export const bookingController = new BookingController();
