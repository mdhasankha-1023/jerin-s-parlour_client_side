import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import DashBoardLayout from "../Layouts/DashBoardLayout/DashBoardLayout";
import Main from "../Pages/Main/Main";
import Products from "../Pages/NormalUserPages/Products";
import ProductDetails from "../Pages/NormalUserPages/ProductDetails";
import AddProducts from "../Pages/DashBoardPages/AddProducts";
import AllProducts from "../Pages/DashBoardPages/AllProducts";
import UpdateProducts from "../Pages/DashBoardPages/UpdateProducts";

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
          path: '/products',
          element: <Products/>
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
      element:  <DashBoardLayout></DashBoardLayout>,
      children: [
        {
          path: '/user-dashBoard/add-product',
          element: <AddProducts/>
        },
        {
          path: '/user-dashBoard/all-products',
          element: <AllProducts/>
        },
        {
          path: '/user-dashBoard/pro-update',
          element: <UpdateProducts/>
        },

      ]
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

