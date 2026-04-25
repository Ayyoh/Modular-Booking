import { useNavigate } from "@tanstack/react-router";

import { useAuthStore } from "../../../shared/stores/auth.store";

export function LoginPage() {
  const login = useAuthStore((s) => s.login);

  const navigate = useNavigate();

  function handleLogin(
    role: "driver" | "host"
  ) {
    login(role);

    navigate({
      to: "/dashboard",
    });
  }

  return (
    <div className="flex flex-col">
      <h1>Login</h1>

      <button
        onClick={() => handleLogin("driver")}
      >
        Driver
      </button>

      <button
        onClick={() => handleLogin("host")}
      >
        Host
      </button>
    </div>
  );
}