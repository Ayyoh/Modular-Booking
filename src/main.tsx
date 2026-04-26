import React from "react";
import "./global.css";

import ReactDOM from "react-dom/client";

import { RouterProvider } from "@tanstack/react-router";

import { router } from "./app/router/router";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./shared/query/query-client";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
);
