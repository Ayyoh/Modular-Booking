import { Navigate } from "@tanstack/react-router";

import { useAuthStore } from "../../shared/stores/auth.store";

export function DashboardPage() {
  const role = useAuthStore(
    (s) => s.user?.role
  );

  if (role === "driver") {
    return (
      <Navigate to="/booking" />
    );
  }

  return (
    <Navigate to="/map" />
  );
}