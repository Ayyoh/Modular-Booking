import { Outlet, createRootRoute } from "@tanstack/react-router";
// import { Sidebar } from "../../shared/components/Sidebar";

export function RootLayout() {
  return (
    <div className="flex">
      {/* <Sidebar /> */}
      <main className="p-5">
        <Outlet />
      </main>
    </div>
  );
}

export const rootRoute = createRootRoute({
  component: RootLayout,
});
