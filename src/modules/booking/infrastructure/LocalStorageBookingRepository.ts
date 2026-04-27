import type { BookingRepository } from "../application/ports/BookingRepository";
import type { Booking } from "../domain/booking";

export class LocalStorageBookingRepository implements BookingRepository {
  private key = "bookings";

  async getAll() {
    const raw = localStorage.getItem(this.key);

    if (!raw) {
      return [];
    }

    return JSON.parse(raw);
  }

  async save(booking: Booking) {
    const bookings = await this.getAll();

    bookings.push(booking);

    localStorage.setItem(this.key, JSON.stringify(bookings));
  }

  async findById(id: number) {
    const bookings = await this.getAll();

    return bookings.find((b: Booking) => b.id === id);
  }
}
