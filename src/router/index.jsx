import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"

import Button from "@/components/button/Button";
import NavList from "@/components/layout/nav/NavList";
import Article from "../views/article/Article";

const router = createBrowserRouter([
    { path: "/", element: <div>Hello world!</div>, },
    { path: '/button', element: <Button /> },
    { path: '/navlist', element: <NavList/>},
    { path: '/artilce', element: <Article/>}
]);

export default router