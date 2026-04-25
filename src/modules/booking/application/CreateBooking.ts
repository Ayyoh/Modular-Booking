import { Booking } from "../domain/booking";
import type { BookingRepository } from "./ports/BookingRepository";

export class CreateBooking {
  private repository: BookingRepository;

  constructor(repository: BookingRepository) {
    this.repository = repository;
  }

  async execute(location: string) {
    const booking = new Booking(Date.now(), location, "active");

    await this.repository.save(booking);

    return booking;
  }
}
