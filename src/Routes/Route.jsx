import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import DashBoardLayout from "../Layouts/DashBoardLayout/DashBoardLayout";
import Main from "../Pages/Main/Main";
import AllProducts from "../Pages/NormalUserPages/AllProducts";
import ProductDetails from "../Pages/NormalUserPages/ProductDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
          path: '/',
          element: <Main/>
        },
        {
          path: '/all-products',
          element: <AllProducts/>
        },
        {
          path: '/product-details',
          element: <ProductDetails/>
        },

      ]
    },

    // dashboard
    {
      path: "/user-dashBoard",
      element:  <DashBoardLayout></DashBoardLayout>
    },

    // sign-up page
    {
      path: '/signUp',
      element: <SignUp/>
    },

    // sign-in page
    {
      path: '/signIn',
      element: <SignIn/>
    }
  ]);

