import DashboardLayout from "../Layout/DashboardLayout";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Inbox from "../Pages/Dashboard/Inbox/Inbox";
import MyReviews from "../Pages/Dashboard/MyReviews/MyReviews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services/Services";
import Test from "../Pages/Shared/Test/Test";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layout/MainLayout");
const { default: Home } = require("../Pages/Home/Home");

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/services/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/post/:cat_slug/:slug",
        element: <SingleBlog />,
      },
      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        index: true,
        path: "/admin/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/admin/services",
        element: <Dashboard />,
      },
      {
        path: "/admin/my-reviews",
        element: <MyReviews />,
      },
      {
        path: "/admin/inbox",
        element: <Inbox />,
      },
    ],
  },
]);
