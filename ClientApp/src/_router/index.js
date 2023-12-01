import React from "react";
import { createBrowserRouter } from "react-router-dom";
// PAGES
import Home from "../_container/system/home";
import ProcessPlanner from "../_container/system/processPlanner";
// UTILITY
import ErrorBoundary from "../_container/utility/errorBoundary";
import Error404 from "../_container/utility/error404";

const router = createBrowserRouter([
    // NOT AUTORIZED & 404
    {
        path: "*",
        element: <Error404 />,
    },
    {
        path: "/Error404",
        element: <Error404 />,
    },
    // PAGES
    {
        path: "/",
        element: <ErrorBoundary><Home /></ErrorBoundary>,
    },
    {
        path: "/Dashboard",
        element: <ErrorBoundary><ProcessPlanner /></ErrorBoundary>,
    },
]);

export default router;
