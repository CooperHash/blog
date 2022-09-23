import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"

import Button from "@/components/button/Button";
import Test from "@/views/test";

const router = createBrowserRouter([
    { path: "/", element: <div>Hello world!</div>, },
    { path: '/button', element: <Button /> },
    { path: '/test', element: <Test /> }
]);

export default router