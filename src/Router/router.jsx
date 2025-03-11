import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      errorElement: <h2>Route Not Found</h2>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router