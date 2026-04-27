import { Outlet, createRoute, redirect } from "@tanstack/react-router";
import { navItems } from "../kernel/nav";
import { useAuthStore } from "../../shared/stores/auth.store";
import { rootRoute } from "./root-route";
import { LoginPage } from "../../modules/auth/presentation/LoginPage";

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "authenticated",
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

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    const firstPath = navItems[0]?.path;

    if (user && firstPath) {
      throw redirect({
        to: firstPath,
      });
    }
  },
  component: LoginPage,
});
