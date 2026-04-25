import type { AnyRoute } from "@tanstack/react-router";

export type AppModule = {
  key: string;
  routes: AnyRoute[];
  nav: {
    label: string;
    path: string;
  };
};
