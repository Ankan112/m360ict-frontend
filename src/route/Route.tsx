import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/Sign-in/SignIn";
import SignUp from "../pages/Sign-up/SignUp";
import Dashboard from "../components/Dashboard";
import Users from "../components/Users";
import Sales from "../components/Sales";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/sales",
        element: <Sales />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
]);

export default router;
