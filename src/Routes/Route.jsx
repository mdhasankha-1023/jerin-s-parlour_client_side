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
import AddService from "../Pages/DashBoardPages/AddService";
import ManageServices from "../Pages/DashBoardPages/ManageServices";
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
        path: '/product-details/:id',
        element: <ProductDetails />,
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`)
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
        path: '/our-teams',
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
        path: '/user-dashBoard/add-service',
        element: <PrivetRoute>
          <AddService />
        </PrivetRoute>
      },
      {
        path: '/user-dashBoard/manage-services',
        element: <PrivetRoute>
          <ManageServices />
        </PrivetRoute>,
        loader: () => fetch('http://localhost:3000/products')
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

