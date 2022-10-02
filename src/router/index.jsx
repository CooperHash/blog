import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"

import Button from "@/components/button/Button";
import NavList from "@/components/layout/nav/NavList";
import Article from "../views/article/Article";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: 'article', element: <Article /> },
            { path: 'navlist', element: <NavList /> }
        ]
    }

]);

export default router