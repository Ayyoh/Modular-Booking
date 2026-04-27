import {
  type AnyRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

import { DashboardPage } from "../../modules/appshell/dashboard";
import { enabledModules } from "../kernel/nav";
import { authRoute, loginRoute } from "./auth-route";
import { rootRoute } from "./root-route";


// DASHBOARD
export const dashboardRoute = createRoute({
  getParentRoute: () => authRoute,

  path: "dashboard",

  component: DashboardPage,
});

const moduleRoutes = enabledModules.flatMap(
  (module) => module.routes
) as AnyRoute[];

const protectedRoutes = authRoute.addChildren([
  dashboardRoute,
  ...moduleRoutes,
] as AnyRoute[]);

const routeTree = rootRoute.addChildren([
  loginRoute,
  protectedRoutes,
] as AnyRoute[]);

export const router = createRouter({
  routeTree,
});
