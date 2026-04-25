import { createRoute } from "@tanstack/react-router";
import { authRoute } from "../../app/router/auth-route";
import { BookingPage } from "./presentation/BookingPage";
import { loadBookings } from "./services/load-booking";

export const bookingRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "/booking",

  loader: async () => {
    return loadBookings();
  },

  component: BookingPage,
});
