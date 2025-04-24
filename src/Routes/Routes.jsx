import {
  createBrowserRouter,
  
} from "react-router";

import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Blogs from "../Pages/Blogs/Blogs";
import Errors from "../Pages/Errors/Errors";
import Loader from "../Pages/Loader/Loader";
export const router = createBrowserRouter([
  {
    path: "/",
   errorElement:<Errors></Errors>,
    Component:Roots,
    children:[
      {index:true,
        path:'/',
        loader: ()=>fetch("/doctorsdata.json"),
        Component:Home,
        hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'doctordetails/:id',
        loader: ()=>fetch("/doctorsdata.json"),
        Component:DoctorDetails,
        hydrateFallbackElement:<Loader></Loader>
      },
      {
        path:'/mybookings',
        loader: ()=>fetch("/doctorsdata.json"),
        Component:MyBookings,
        hydrateFallbackElement:<Loader></Loader>
        
      },
      {
        path:'/blogs',
        loader: ()=>fetch("/blogs.json"),
        Component:Blogs,
        hydrateFallbackElement:<Loader></Loader>
      },
      // {
      //   path:'/contact',
      //   Component:Errors
      // }
     
    ]
  },
  {
    
      path:'/contact',
      Component:Errors,
      hydrateFallbackElement:<Loader></Loader>
  
  }
  

]);