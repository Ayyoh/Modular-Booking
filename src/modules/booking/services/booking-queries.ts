import { useAuthStore } from "../../../shared/stores/auth.store";
import { bookingRepository } from "../infrastructure/repository-instance";

export const bookingsQueryKey = ["bookings"] as const;

export async function getBookings() {
  const role = useAuthStore.getState().user?.role;

  const bookings = await bookingRepository.getAll();

  return bookings.filter((booking: any) => booking.ownerRole === role);
}
