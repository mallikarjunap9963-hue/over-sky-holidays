import fs from 'fs';
import path from 'path';
import { StoredBooking } from '../types/opensky.types.js';

class BookingStore {
  private filePath: string;
  private bookings: Map<string, StoredBooking> = new Map();

  constructor() {
    const dataDir = path.resolve(process.cwd(), '.data');
    if (!fs.existsSync(dataDir)) {
      try {
        fs.mkdirSync(dataDir, { recursive: true });
      } catch {
        // ignore in serverless environments
      }
    }
    this.filePath = path.join(dataDir, 'bookings.json');
    this.loadFromDisk();
  }

  private loadFromDisk() {
    try {
      if (fs.existsSync(this.filePath)) {
        const raw = fs.readFileSync(this.filePath, 'utf-8');
        const list: StoredBooking[] = JSON.parse(raw);
        list.forEach((item) => {
          this.bookings.set(item.id, item);
        });
      }
    } catch (e) {
      console.warn('[BookingStore] Could not read local bookings storage, using memory store.');
    }
  }

  private persist() {
    try {
      const dataDir = path.dirname(this.filePath);
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const list = Array.from(this.bookings.values());
      fs.writeFileSync(this.filePath, JSON.stringify(list, null, 2), 'utf-8');
    } catch {
      // ignore persistence errors in read-only / serverless envs
    }
  }

  generateReference(): string {
    const prefix = 'OSH';
    const timestamp = Date.now().toString(36).toUpperCase().slice(-4);
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    return `${prefix}-${timestamp}-${random}`;
  }

  save(booking: StoredBooking): StoredBooking {
    this.bookings.set(booking.id, booking);
    this.persist();
    return booking;
  }

  getById(id: string): StoredBooking | undefined {
    return this.bookings.get(id);
  }

  getByReference(ref: string): StoredBooking | undefined {
    return Array.from(this.bookings.values()).find(
      (b) => b.bookingReference.toLowerCase() === ref.toLowerCase() || b.id === ref
    );
  }

  updateStatus(
    idOrRef: string,
    status: StoredBooking['status'],
    reason?: string
  ): StoredBooking | null {
    const booking = this.getById(idOrRef) || this.getByReference(idOrRef);
    if (!booking) return null;

    booking.status = status;
    booking.updatedAt = new Date().toISOString();
    if (status === 'CANCELLED') {
      booking.cancellationReason = reason || 'Cancelled by user';
      booking.cancelledAt = new Date().toISOString();
    }
    this.save(booking);
    return booking;
  }

  list(): StoredBooking[] {
    return Array.from(this.bookings.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }
}

export const bookingStore = new BookingStore();
