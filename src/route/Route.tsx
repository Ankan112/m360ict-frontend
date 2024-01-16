import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/Sign-in/SignIn";
import SignUp from "../pages/Sign-up/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
