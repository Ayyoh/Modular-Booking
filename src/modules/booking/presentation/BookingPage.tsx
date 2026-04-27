import { cancelBookingUseCase } from "../application/use-cases";
import type { Booking } from "../domain/booking";

import { CreateBookingForm } from "./CreateBookingForm";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { bookingsQueryKey, getBookings } from "../services/booking-queries";

export function BookingPage() {
  const queryClient = useQueryClient();

  const { data: bookings = [] } = useQuery({
    queryKey: bookingsQueryKey,
    queryFn: getBookings,
  });

  const cancelMutation = useMutation({
    mutationFn: async (id: number) => {
      return await cancelBookingUseCase.execute(id);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookingsQueryKey,
      });
    },
  });

  async function handleCancel(id: number) {
    await cancelMutation.mutateAsync(id);
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-2xl pb-5">Bookings</h1>

      <CreateBookingForm />

      {bookings.map((booking: Booking) => (
        <div
          className="flex flex-col gap-2 border rounded-md p-4 w-full mt-5 bg-accent"
          key={booking.id}
        >
          <p>Name: {booking.name}</p>
          <p>Location: {booking.location}</p>

          <div className="w-20 items-center justify-center flex">
            <h1
              className={` rounded-md px-2 py-1 ${booking.status === "active" ? "bg-green-500" : "bg-red-500"}`}
            >
              {booking.status}
            </h1>
          </div>

          <button onClick={() => handleCancel(booking.id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}
