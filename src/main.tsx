import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./components/ErrorPage";
import StorePage from "./pages/StorePage/StorePage";
import "./index.css";
import AddStore from "./pages/AddStorePage/AddStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/store/:id",
    element: <StorePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/search/:searchInput",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/addStore",
    element: <AddStore />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
