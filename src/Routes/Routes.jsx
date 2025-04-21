import {
  createBrowserRouter,
  
} from "react-router";
import Errorpage from "../Pages/Errorpage/Errorpage";
import Roots from "../Pages/Roots/Roots";
import Home from "../Pages/Home/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Errorpage></Errorpage>,
    Component:Roots,
    children:[
      {index:true,
        path:'/',
        Component:Home,
      }
    ]
  },
]);