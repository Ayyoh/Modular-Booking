import { bookingRepository } from "../infrastructure/repository-instance";

export const bookingsQueryKey = ["bookings"] as const;

export async function getBookings() {
  return bookingRepository.getAll();
}
