import { useAuthStore } from "../../../shared/stores/auth.store";
import { Booking } from "../domain/booking";
import type { BookingRepository } from "./ports/BookingRepository";

export class CreateBooking {
  private repository: BookingRepository;

  constructor(repository: BookingRepository) {
    this.repository = repository;
  }

  async execute(location: string, name: string) {
    const userRole = useAuthStore.getState().user?.role;
    if (!userRole) {
      throw new Error("Unauthorized");
    }

    const booking = new Booking(Date.now(), location, name, "driver", "active");

    booking.ifFieldsAreValid();

    await this.repository.save(booking);

    return booking;
  }
}
