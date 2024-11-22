import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loadable from "../Layout/Loadable/loadable";
import FullLayout from "../Layout/Navbar/FullLayout";

/* Pages */
const Dashboard = Loadable(lazy(() => import("../pages/Dashboard/Dashboard")));
const Demo = Loadable(lazy(() => import("../pages/Dashboard/demo")));
const Stopwatch = Loadable(lazy(() => import("../pages/Dashboard/Stopwatch")));

/* Layout */
const Sidebar = Loadable(lazy(() => import("../Layout/Navbar/sidebar/Sidebar")));



const router = createBrowserRouter([
    {
        path: "/",
        element: <FullLayout />,
        children: [
            { path: "/dashboard", element: <Dashboard /> },
            { path: "/demo", element: <Demo /> },
            { path: "/stopwatch", element: <Stopwatch /> },
        ],
    }
],
    {
        future: {
            v7_relativeSplatPath: true,
            v7_fetcherPersist: true,
            v7_normalizeFormMethod: true,
            v7_partialHydration: true,
            v7_skipActionErrorRevalidation: true,
        },
    });

export default router;
