import type { AppModule } from "./module";
import { bookingModule } from "../../modules/booking";
import { mapModule } from "../../modules/map";

export const modules: AppModule[] = [
  bookingModule,
  mapModule,
];
