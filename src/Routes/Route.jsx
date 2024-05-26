import {
    createBrowserRouter
  } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts/MainLayouts";
import SignUp from "../Pages/SignUp/SignUp";
import SignIn from "../Pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts/>
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

