import { bookingRepository } from "../infrastructure/repository-instance";

export async function loadBookings() {
  return bookingRepository.getAll();
}
