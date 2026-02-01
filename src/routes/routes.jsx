import { createBrowserRouter } from "react-router";
import AppLayout from "../layouts/AppLayout";
import Home from "../pages/Home";
import Aboutus from "../pages/Aboutus";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgetPassword from "../pages/ForgetPassword";
import AddCode from "../pages/AddCode";
import ResetPassword from "../pages/ResetPassword";
import Books from "../pages/Books";
import Profile from "../pages/Profile";
import Productdetails from "../pages/Productdetails";
import Customerreviews from "../pages/Customerreviews";
import Recommendedbooks from "../pages/Recommendedbooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Books",
        element: <Books />,
      },
      {
        path: "/Aboutus",
        element: <Aboutus />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/ForgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/AddCode",
        element: <AddCode />,
      },
      {
        path: "/ResetPassword",
        element: <ResetPassword />,
      },
      {
        path: "/Profile",
        element: <Profile />,
      },
      {
        path: "/Productdetails",
        element: <Productdetails />,
      },
      {
        path: "/Customerreviews",
        element: <Customerreviews />,
      },
      {
        path: "/Recommendedbooks",
        element: <Recommendedbooks />,
      },
    ],
  },
]);

export default router;
