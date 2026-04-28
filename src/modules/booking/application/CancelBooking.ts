import type { BookingRepository } from "./ports/BookingRepository";

export class CancelBooking {
  private repository: BookingRepository;

  constructor(repository: BookingRepository) {
    this.repository = repository;
  }

  async execute(id: number) {
    const booking = await this.repository.findById(id);

    if (!booking) {
      throw new Error("Booking not found");
    }

    booking.cancel();

    await this.repository.save(booking);
  }
}
