import {
  createBrowserRouter,
  
} from "react-router";

import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Blogs from "../Pages/Blogs/Blogs";
import Errors from "../Pages/Errors/Errors";
export const router = createBrowserRouter([
  {
    path: "/",
   errorElement:<Errors></Errors>,
    Component:Roots,
    children:[
      {index:true,
        path:'/',
        Component:Home,
      },
      {
        path:'doctordetails/:id',
        loader: ()=>fetch("/doctorsdata.json"),
        Component:DoctorDetails,
      },
      {
        path:'/mybookings',
        loader: ()=>fetch("/doctorsdata.json"),
        Component:MyBookings,
        
      },
      {
        path:'/blogs',
        loader: ()=>fetch("/blogs.json"),
        Component:Blogs,
      },
      // {
      //   path:'/contact',
      //   Component:Errors
      // }
     
    ]
  },
  {
    
      path:'/contact',
      Component:Errors
  
  }
  

]);