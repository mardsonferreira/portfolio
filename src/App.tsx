import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/Home";
import { Repos } from "./pages/Repos";

import "./styles/global.css";

export function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/repos",
            element: <Repos />,
        },
    ]);

    return <RouterProvider router={router} />;
}
