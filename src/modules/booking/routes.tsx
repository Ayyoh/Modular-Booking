import { createRoute } from "@tanstack/react-router";
import { authRoute } from "../../app/router/auth-route";
import { BookingPage } from "./presentation/BookingPage";
import { bookingsQueryKey, getBookings } from "./services/booking-queries";
import { queryClient } from "../../shared/query/query-client";

export const bookingRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "booking",

  loader: async () => {
    await queryClient.prefetchQuery({
      queryKey: bookingsQueryKey,
      queryFn: getBookings,
    });
  },

  component: BookingPage,
});
