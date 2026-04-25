import type { AppModule } from "../../app/kernel/module";
import { bookingNav } from "./nav";
import { bookingRoute } from "./routes";

export const bookingModule: AppModule = {
  key: "booking",

  routes: [bookingRoute],

  nav: bookingNav,
};
