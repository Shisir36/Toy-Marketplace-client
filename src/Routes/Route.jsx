import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/Home/AllToys/AllToys";
import AddAToy from "../Pages/Add A Toy/AddAToy";
import ToysDetails from "../Pages/Home/ToysDetails/ToysDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoute from "../privateRoutes/PrivateRoutes";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import ShopByCategory from "../Pages/Home/ShopByCategory/ShopByCategory";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      errorElement:<ErrorPage/>,
      children:
      [
        {
          path:"/",
          element:<Home/>
        },
        {
            path:"/login",
            element:<Login/>
        },
        {
            path:"signup",
            element:<SignUp/>
        },
        {
            path:"blog",
            element:<Blog/>
        },
        {
            path:"alltoys",
            element:<AllToys/>,
            loader:() => fetch('https://toy-marketplace-server-eight-jade.vercel.app/toys')
        },
        {
            path:"addAToy",
            element:<PrivateRoute><AddAToy/></PrivateRoute>
        },
        {
            path:"/toysDetails/:id",
            element:<PrivateRoute><ToysDetails/></PrivateRoute>,
        },
        {
          path:"/myToys",
          element: <PrivateRoute> <MyToys/></PrivateRoute>
        },
        {
          path:"/updateToy/:id",
          element:<UpdateToy/>,         
        },
        {
          path:"shopBycategory",
          element:<ShopByCategory/>
        }
        
      ]
    },
  ]);
  