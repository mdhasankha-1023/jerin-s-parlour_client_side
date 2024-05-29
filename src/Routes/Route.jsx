import {
  createBrowserRouter
} from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import DashBoardLayout from "../Layouts/DashBoardLayout/DashBoardLayout";
import Main from "../Pages/Main/Main";
import Services from "../Pages/NormalUserPages/Services";
import ProductDetails from "../Pages/NormalUserPages/ProductDetails";
import AddProducts from "../Pages/DashBoardPages/AddProducts";
import AllProducts from "../Pages/DashBoardPages/AllProducts";
import UpdateProducts from "../Pages/DashBoardPages/UpdateProducts";
import PrivetRoute from "./PrivetRoute";
import UserInfo from "../Pages/DashBoardPages/UserInfo";
import ContactUs from "../Pages/NormalUserPages/ContactUs";
import About from "../Pages/NormalUserPages/About";
import OurTeams from "../Pages/NormalUserPages/OurTeams";

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
        path: '/services',
        element: <Services />
      },
      {
        path: '/product-details',
        element: <ProductDetails />
      },
      {
        path: '/contact-us',
        element: <ContactUs/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/our-team',
        element: <OurTeams/>
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
      {
        path: '/user-dashBoard/user-info',
        element: <PrivetRoute>
          <UserInfo/>
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

