import { useLoaderData } from "@tanstack/react-router";

export function BookingPage() {
  const bookings = useLoaderData({
    from: "/booking",
  });

  return (
    <div>
      <h1>Bookings</h1>

      {bookings.map((booking: any) => (
        <div key={booking.id}>
          {booking.location}
        </div>
      ))}
    </div>
  );
}