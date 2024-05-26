import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";
import DashBoardLayout from "../Layouts/DashBoardLayout/DashBoardLayout";
import Main from "../Pages/Main/Main";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>,
      children:[
        {
          path: '/',
          element: <Main/>
        }
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

