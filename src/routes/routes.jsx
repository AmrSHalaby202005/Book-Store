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
import Recommended from "../pages/Recommended";
import Mycart from "../pages/Mycart";
import Wishlist from "../pages/Wishlist";
import Checkout from "../pages/Checkout";
import Historyall from "../pages/Historyall";
import HistoryInprogress from "../pages/HistoryInprogress";
import Historycompleted from "../pages/Historycompleted";
import Canceled from "../pages/Canceled";

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
        path: "/Recommended",
        element: <Recommended />,
      },
      {
        path: "/Mycart",
        element: <Mycart />,
      },
      {
        path: "/Wishlist",
        element: <Wishlist />,
      },
      {
        path: "/Checkout",
        element: <Checkout />,
      },
      {
        path: "/Historyall",
        element: <Historyall />,
      },
      {
        path: "/HistoryInprogress",
        element: <HistoryInprogress />,
      },
      {
        path: "/Historycompleted",
        element: <Historycompleted />,
      },
      {
        path: "/Canceled",
        element: <Canceled />,
      },
    ],
  },
]);

export default router;
