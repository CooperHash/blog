import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom"

import Button from "@/components/button/Button";

const router = createBrowserRouter([
    { path: "/", element: <div>Hello world!</div>, },
    { path: '/button', element: <Button /> }
]);

export default router