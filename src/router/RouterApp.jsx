import React from "react";
import { createHashRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RootLayout from "../Layout/RootLayout";

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
