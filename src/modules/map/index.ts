import type { AppModule } from "../../app/kernel/module";
import { mapNav } from "./nav";
import { mapRoute } from "./routes";

export const mapModule: AppModule = {
  key: "map",
  routes: [mapRoute],
  nav: mapNav,
};
