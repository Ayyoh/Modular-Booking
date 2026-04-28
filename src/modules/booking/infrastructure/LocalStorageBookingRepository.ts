import type { BookingRepository } from "../application/ports/BookingRepository";
import { Booking } from "../domain/booking";

export class LocalStorageBookingRepository implements BookingRepository {
  private key = "bookings";

  private hydrateBooking(booking: Booking) {
    return new Booking(
      booking.id,
      booking.location,
      booking.name,
      booking.ownerRole,
      booking.status,
    );
  }

  async getAll(): Promise<Booking[]> {
    const raw = localStorage.getItem(this.key);

    if (!raw) {
      return [];
    }

    const bookings = JSON.parse(raw) as Booking[];

    return bookings.map((booking) => this.hydrateBooking(booking));
  }

  async save(booking: Booking): Promise<void> {
    const bookings = await this.getAll();
    const index = bookings.findIndex((existing) => existing.id === booking.id);

    if (index >= 0) {
      bookings[index] = booking;
    } else {
      bookings.push(booking);
    }

    localStorage.setItem(this.key, JSON.stringify(bookings));
  }

  async findById(id: number): Promise<Booking | undefined> {
    const bookings = await this.getAll();

    return bookings.find((b) => b.id === id);
  }
}
