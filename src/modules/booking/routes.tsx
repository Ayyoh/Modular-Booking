import { createRoute } from "@tanstack/react-router";
import { rootRoute } from "../../app/router/root-route";
import BookingPage from "./presentation/BookingPage";

export const bookingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/booking",

  loader: async () => {
    return [
      {
        id: 1,
        location: "New York",
      },
    ];
  },

  component: BookingPage,
});
