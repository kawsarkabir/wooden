import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import MyArtCraftList from "../pages/myArtCraftList/MyArtCraftList";
import AddArtAndCraftItem from "../pages/addArtAndCraftItem/AddArtAndCraftItem";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allArtAndCraftItems",
        element: <allArtAndCraftItems></allArtAndCraftItems>,
      },
      {
        path: "/addArtAndCraftItem",
        element: <AddArtAndCraftItem></AddArtAndCraftItem>,
      },
      {
        path: "/myArtCarftList",
        element: <MyArtCraftList></MyArtCraftList>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
