import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { getRouter } from "./router";

const router = getRouter();

// Initialize Vercel Speed Insights
injectSpeedInsights();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
