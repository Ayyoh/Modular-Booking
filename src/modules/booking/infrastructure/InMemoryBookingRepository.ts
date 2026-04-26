import type { BookingRepository } from "../application/ports/BookingRepository";
import type { Booking } from "../domain/booking";

export class InMemoryBookingRepository implements BookingRepository {
  private bookings: Booking[] = [];

  async getAll(): Promise<Booking[]> {
    return this.bookings;
  }

  async save(booking: Booking): Promise<void> {
    this.bookings.push(booking);
  }

  async findById(id: number) {
    return this.bookings.find((b) => b.id === id);
  }
}
