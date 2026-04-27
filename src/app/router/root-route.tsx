import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { Sidebar } from "../../shared/components/Sidebar";

export function RootLayout() {
  return (
    <div className="p-5 flex w-full h-full">
      {/* <Sidebar /> */}
      <Outlet />
    </div>
  );
}

export const rootRoute = createRootRoute({
  component: RootLayout,
});
