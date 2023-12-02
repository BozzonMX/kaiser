import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";
// PAGES
import Home from "../_container/system/home";
import ProcessPlanner from "../_container/system/processPlanner";
// UTILITY
import ErrorBoundary from "../_container/utility/errorBoundary";
import Error404 from "../_container/utility/error404";
import CustomLayout from "../_container/utility/layout";

const router = createBrowserRouter([
    // NOT AUTORIZED & 404
    {
        path: "*",
        element: <Error404 />,
    },
    // PAGES
    {
        element: <ErrorBoundary><CustomLayout><Outlet /></CustomLayout></ErrorBoundary>,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "ProcessPlanner",
                element: <ProcessPlanner />,
            },
        ]
    },
]);

export default router;
