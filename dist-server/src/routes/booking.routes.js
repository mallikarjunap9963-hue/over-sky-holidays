import { Router } from 'express';
import { bookingController } from '../controllers/booking.controller.js';
import { validateTourInquiry, validateGeneralEnquiry } from '../middlewares/validator.js';
const router = Router();
// POST /api/bookings (or /api/tour-inquiries) - Submit tour booking inquiry
router.post('/', validateTourInquiry, bookingController.createTourInquiry.bind(bookingController));
router.post('/tour-inquiry', validateTourInquiry, bookingController.createTourInquiry.bind(bookingController));
// POST /api/inquiries (or /api/enquiries) - Submit general travel enquiry
router.post('/enquiry', validateGeneralEnquiry, bookingController.createGeneralEnquiry.bind(bookingController));
// GET /api/bookings - List all bookings
router.get('/', bookingController.listBookings.bind(bookingController));
// GET /api/bookings/:id - Retrieve booking details by ID or reference code
router.get('/:id', bookingController.getBooking.bind(bookingController));
// POST /api/bookings/:id/cancel - Cancel booking
router.post('/:id/cancel', bookingController.cancelBooking.bind(bookingController));
export default router;
