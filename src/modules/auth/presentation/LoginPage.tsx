import { useNavigate } from "@tanstack/react-router";

import { useAuthStore } from "../../../shared/stores/auth.store";
import { Button } from "../../../components/ui/button";

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
    <div className="flex flex-col items-center w-full h-full">
      <h1 className="text-2xl">Login</h1>

      <div className="flex gap-4 mt-5">
        <Button
          variant="default"
          onClick={() => handleLogin("driver")}
        >
          Driver
        </Button>
        <Button
          variant="default"
          onClick={() => handleLogin("host")}
        >
          Host
        </Button>
      </div>
    </div>
  );
}