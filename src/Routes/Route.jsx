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
import PrivetRoute from "./PrivetRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: '/products',
        element: <Products />
      },
      {
        path: '/product-details',
        element: <ProductDetails />
      },

    ]
  },

  // dashboard
  {
    path: "/user-dashBoard",
    element: <PrivetRoute>
      <DashBoardLayout></DashBoardLayout>
    </PrivetRoute>,
    children: [
      {
        path: '/user-dashBoard/add-product',
        element: <PrivetRoute>
          <AddProducts />
        </PrivetRoute>
      },
      {
        path: '/user-dashBoard/all-products',
        element: <PrivetRoute>
          <AllProducts />
        </PrivetRoute>
      },
      {
        path: '/user-dashBoard/pro-update',
        element: <PrivetRoute>
          <UpdateProducts />
        </PrivetRoute>
      },

    ]
  },

  // sign-up page
  {
    path: '/signUp',
    element: <SignUp />
  },

  // sign-in page
  {
    path: '/signIn',
    element: <SignIn />
  }
]);

