import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Main from "../src/MainLayout/Main";
import AllBooks from "../src/Components/Pages/AllBooks/AllBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allBooks",
        element: <AllBooks />,
      },
    ],
  },
]);

export default router;
