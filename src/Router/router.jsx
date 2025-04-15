import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";
import AppliedJob from "../Pages/JobApplied/AppliedJob";
import MyApplication from "../Pages/MyApplications/MyApplication";
import Addjob from "../Pages/AddJob/Addjob";


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
          path: '/jobs/:id',
          element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: '/appliedJob/:id',
          element: <PrivateRoute><AppliedJob></AppliedJob></PrivateRoute>
        },
        {
          path: '/myApplications',
          element:<PrivateRoute><MyApplication></MyApplication></PrivateRoute>
        },
        {
          path:'/addjob',
          element:<PrivateRoute><Addjob></Addjob></PrivateRoute>
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