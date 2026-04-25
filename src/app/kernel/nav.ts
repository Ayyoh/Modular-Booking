import { featureFlags } from "./feature-flags";
import { modules } from "./register-modules";

export const enabledModules = modules.filter(
  (m) => featureFlags[m.key as keyof typeof featureFlags],
);

export const navItems = enabledModules.map((m) => m.nav);
