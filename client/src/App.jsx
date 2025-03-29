import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Library } from "./pages/Library/Library";
import { Details } from "./pages/Details/Details";
import { NavigationProvider } from "./context/NavigationContext";
import { Header } from "./layouts/Header/Header";
import { SideNavigation } from "./layouts/SideNavigation/SideNavigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Query Initialization
const queryClient = new QueryClient();

const App = () => {
  // All routes
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route
          element={
            <>
              <Header />
              <SideNavigation />
              <Outlet />
            </>
          }
        >
          <Route index element={<Home />} />
          <Route path="/:media" element={<Library />} />
          <Route path="/:id" element={<Details />} />
        </Route>
      </Route>
    )
  );

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationProvider>
        <RouterProvider router={router} />
      </NavigationProvider>
    </QueryClientProvider>
  );
};

export default App;
