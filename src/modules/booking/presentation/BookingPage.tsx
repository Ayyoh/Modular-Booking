import { cancelBookingUseCase } from "../application/use-cases";

import { useLoaderData, useRouter } from "@tanstack/react-router";

import { CreateBookingForm } from "./CreateBookingForm";
import { bookingRoute } from "../routes";

export function BookingPage() {
  const router = useRouter();

  const bookings = useLoaderData({
    from: bookingRoute.id
  });

  async function handleCancel(id: number) {
    await cancelBookingUseCase.execute(id);

    await router.invalidate();
  }

  return (
    <div>
      <h1>Bookings</h1>

      <CreateBookingForm />

      {bookings?.map((booking: any) => (
        <div key={booking.id}>
          <p>{booking.location}</p>

          <p>{booking.status}</p>

          <button onClick={() => handleCancel(booking.id)}>Cancel</button>
        </div>
      ))}
    </div>
  );
}
