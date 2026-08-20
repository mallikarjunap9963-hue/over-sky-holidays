import { Request, Response, NextFunction } from 'express';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{3,6}$/;

export function validateTourInquiry(req: Request, res: Response, next: NextFunction) {
  const { tour_id, tourId, name, phone, email, travel_date, travelDate, travelers } = req.body;

  const resolvedTourId = tour_id || tourId;
  const resolvedDate = travel_date || travelDate;
  const numTravelers = parseInt(String(travelers || '1'), 10);

  const errors: string[] = [];

  if (!resolvedTourId) {
    errors.push('Tour ID is required.');
  }

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Full name must be at least 2 characters.');
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
    errors.push('A valid contact phone number is required.');
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.push('A valid email address is required.');
  }

  if (!resolvedDate) {
    errors.push('Travel date is required.');
  } else {
    const parsedDate = new Date(resolvedDate);
    if (isNaN(parsedDate.getTime())) {
      errors.push('Invalid travel date format.');
    }
  }

  if (isNaN(numTravelers) || numTravelers < 1) {
    errors.push('Number of travelers must be at least 1.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors,
    });
  }

  // Normalize body for downstream consumption
  req.body.tour_id = Number(resolvedTourId) || resolvedTourId;
  req.body.name = name.trim();
  req.body.phone = phone.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.travel_date = resolvedDate;
  req.body.travelers = numTravelers;

  next();
}

export function validateGeneralEnquiry(req: Request, res: Response, next: NextFunction) {
  const {
    name,
    email,
    phone,
    travel_date,
    travelDate,
    destination,
    travelers,
    tour_type,
    tourType,
    message,
  } = req.body;

  const resolvedDate = travel_date || travelDate;
  const resolvedTourType = tour_type || tourType || 'Tour';
  const numTravelers = parseInt(String(travelers || '1'), 10);

  const errors: string[] = [];

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.push('Full name must be at least 2 characters.');
  }

  if (!email || !EMAIL_REGEX.test(email)) {
    errors.push('A valid email address is required.');
  }

  if (!phone || typeof phone !== 'string' || phone.trim().length < 7) {
    errors.push('A valid contact phone number is required.');
  }

  if (!destination || typeof destination !== 'string' || destination.trim().length < 2) {
    errors.push('Destination is required.');
  }

  if (!resolvedDate) {
    errors.push('Travel date is required.');
  }

  if (isNaN(numTravelers) || numTravelers < 1) {
    errors.push('Number of travelers must be at least 1.');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: errors[0],
      errors,
    });
  }

  // Normalize
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.phone = phone.trim();
  req.body.travel_date = resolvedDate;
  req.body.destination = destination.trim();
  req.body.travelers = numTravelers;
  req.body.tour_type = resolvedTourType;
  req.body.message = message ? String(message).trim() : '';

  next();
}

export function validateDateRange(checkIn?: string, checkOut?: string): { valid: boolean; message?: string } {
  if (checkIn && checkOut) {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return { valid: false, message: 'Invalid check-in or check-out date format.' };
    }
    if (end <= start) {
      return { valid: false, message: 'Check-out date must be strictly after check-in date.' };
    }
  }
  return { valid: true };
}
