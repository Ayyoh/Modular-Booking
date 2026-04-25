import { createRoute, redirect, useNavigate } from "@tanstack/react-router";
import { navItems } from "../kernel/nav";
import { useAuthStore } from "../../shared/stores/auth.store";
import { rootRoute } from "./root-route";

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
});

function LoginPage() {
  const login = useAuthStore((state) => state.login);
  const navigate = useNavigate();

  const handleLogin = async (role: "driver" | "host") => {
    login(role);

    await navigate({
      to: navItems[0]?.path ?? "/",
    });
  };

  return (
    <section className="space-y-4">
      <div>
        <h1 className="text-2xl font-semibold">Login</h1>
        <p className="text-sm text-slate-600">Choose a role to enter the app.</p>
      </div>

      <div className="flex gap-3">
        <button
          className="rounded bg-slate-900 px-4 py-2 text-white"
          onClick={() => handleLogin("driver")}
          type="button"
        >
          Login as driver
        </button>

        <button
          className="rounded border border-slate-300 px-4 py-2"
          onClick={() => handleLogin("host")}
          type="button"
        >
          Login as host
        </button>
      </div>
    </section>
  );
}

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
