import { useAuthStore } from "../../../shared/stores/auth.store";
import type { Booking } from "../domain/booking";
import { bookingRepository } from "../infrastructure/repository-instance";

export const bookingsQueryKey = ["bookings"] as const;

export async function getBookings() {
  const role = useAuthStore.getState().user?.role;

  const bookings = await bookingRepository.getAll() as Booking[];

  if (role === "host") {
    return bookings;
  }

  return bookings.filter((booking) => booking.ownerRole === role);
}
