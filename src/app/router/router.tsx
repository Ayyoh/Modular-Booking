import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from "@tanstack/react-router";

import { RootLayout } from "./root-route";

import { LoginPage } from "../../modules/auth/presentation/LoginPage";
import { DashboardPage } from "../../modules/appshell/dashboard";

import { enabledModules } from "../kernel/nav";

import { useAuthStore } from "../../shared/stores/auth.store";


// ROOT ROUTE
export const rootRoute = createRootRoute({
  component: RootLayout,
});


// LOGIN ROUTE
export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,

  path: "/login",

  component: LoginPage,
});


// AUTH LAYOUT
export const authRoute = createRoute({
  getParentRoute: () => rootRoute,

  id: "auth",

  beforeLoad: () => {
    const user = useAuthStore.getState().user;

    if (!user) {
      throw redirect({
        to: "/login",
      });
    }
  },

  component: Outlet,
});


// DASHBOARD
export const dashboardRoute = createRoute({
  getParentRoute: () => authRoute,

  path: "/dashboard",

  component: DashboardPage,
});

const moduleRoutes = enabledModules.flatMap(
  (module) => module.routes
);

const routeTree = rootRoute.addChildren([
  loginRoute,

  authRoute.addChildren([
    dashboardRoute,

    ...moduleRoutes,
  ]),
]);

export const router = createRouter({
  routeTree,
});