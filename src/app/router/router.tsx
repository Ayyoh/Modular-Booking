import { createRoute, createRouter, redirect } from "@tanstack/react-router";
import { enabledModules, navItems } from "../kernel/nav";
import { useAuthStore } from "../../shared/stores/auth.store";
import { authRoute, loginRoute } from "./auth-route";
import { rootRoute } from "./root-route";

const moduleRoutes = enabledModules.flatMap((module) => module.routes);

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  beforeLoad: () => {
    const user = useAuthStore.getState().user;
    const firstPath = navItems[0]?.path;

    if (!firstPath) {
      return;
    }

    if (user) {
      throw redirect({ to: firstPath });
    }

    throw redirect({ to: "/login" });
  },
  component: () => <div>No modules are enabled.</div>,
});

const protectedRoutes = authRoute.addChildren(moduleRoutes);
const routeTree = rootRoute.addChildren([indexRoute, loginRoute, protectedRoutes]);

export const router = createRouter({
  routeTree,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
