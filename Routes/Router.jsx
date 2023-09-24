import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Main from "../src/MainLayout/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
