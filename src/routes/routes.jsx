import { createBrowserRouter } from "react-router-dom";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AllToys/AllToys";
import MyToys from "../pages/MyToys/MyToys";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/blogs",
            element: <Blogs></Blogs>,
        },
        {
          path: "/alltoys",
          element: <AllToys></AllToys>,
        },
        {
          path: "/mytoys",
          element: <MyToys></MyToys>,
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
      ],
    },
]);

export default router;