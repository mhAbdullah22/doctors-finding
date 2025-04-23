import {
  createBrowserRouter,
  
} from "react-router";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";
import DoctorDetails from "../Pages/DoctorDetails/DoctorDetails";
import MyBookings from "../Pages/MyBookings/MyBookings";
import Blogs from "../Pages/Blogs/Blogs";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Errorpage></Errorpage>,
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
        Component:Blogs,
      }
    ]
  },
]);