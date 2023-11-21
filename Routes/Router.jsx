import { createBrowserRouter } from "react-router-dom";
import Home from "../src/Components/Home/Home";
import Main from "../src/MainLayout/Main";
import AllBooks from "../src/Components/Pages/AllBooks/AllBooks";
import Login from "../src/Components/Pages/Login/Login";
import Register from "../src/Components/Pages/Register/Register";
import AllClass from "../src/Components/Pages/AllClass/AllClass";
import Blog from "../src/Components/Pages/Blog/Blog";

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
      {
        path: "/allClass",
        element: <AllClass />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
