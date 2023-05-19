import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Blog from "../Pages/Blog/Blog";
import AllToys from "../Pages/Home/AllToys/AllToys";
import AddAToy from "../Pages/Add A Toy/AddAToy";
import ToysDetails from "../Pages/Home/ToysDetails/ToysDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
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
            loader:() => fetch('http://localhost:5000/toys')
        },
        {
            path:"addAToy",
            element:<AddAToy/>
        },
        {
            path:"/toysDetails/:id",
            element:<ToysDetails/>,
        }
      ]
    },
  ]);
  