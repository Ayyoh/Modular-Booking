import { createRoute } from "@tanstack/react-router";
import { authRoute } from "../../app/router/auth-route";
import { MapPage } from "./presentation/MapPage";

export const mapRoute = createRoute({
  getParentRoute: () => authRoute,
  path: "map",
  component: MapPage,
});
