// import { Root } from "postcss";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Home/ServiceDetails";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import Blog from "../Pages/Blog/Blog";
import Career from "../Pages/Career/Career";
// import Root from "../layouts/Root";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <PrivateRoute><Blog></Blog></PrivateRoute>
            },
            {
                path: '/career',
                element: <PrivateRoute><Career></Career></PrivateRoute>
            }
        ]
    }
])
export default router;