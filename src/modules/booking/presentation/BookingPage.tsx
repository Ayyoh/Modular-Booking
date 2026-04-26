import { cancelBookingUseCase } from "../application/use-cases";

import { useLoaderData, useRouter } from "@tanstack/react-router";

import { CreateBookingForm } from "./CreateBookingForm";
import { bookingRoute } from "../routes";

export function BookingPage() {
  const router = useRouter();

  const bookings = useLoaderData({
    from: bookingRoute.id,
  });

  async function handleCancel(id: number) {
    await cancelBookingUseCase.execute(id);

    await router.invalidate();
  }

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-2xl pb-5">Bookings</h1>

      <CreateBookingForm />

      {bookings?.map((booking: any) => (
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
