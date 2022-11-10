import DashboardLayout from "../Layout/DashboardLayout";
import Blog from "../Pages/Blog/Blog";
import SingleBlog from "../Pages/Blog/SingleBlog";
import Contact from "../Pages/Contact/Contact";
import AddNewBlog from "../Pages/Dashboard/BlogControl/AddNewBlog/AddNewBlog";
import AddNewBlogAuthor from "../Pages/Dashboard/BlogControl/BlogAuthor/AddNewBlogAuthor";
import UpdateBlogAuthor from "../Pages/Dashboard/BlogControl/BlogAuthor/UpdateBlogAuthor";
import AddNewBlogCategory from "../Pages/Dashboard/BlogControl/BlogCategory/AddNewBlogCategory";
import UpdateBlogCategory from "../Pages/Dashboard/BlogControl/BlogCategory/UpdateBlogCategory";
import ManageBlog from "../Pages/Dashboard/BlogControl/ManageBlog/ManageBlog";
import UpdateBlog from "../Pages/Dashboard/BlogControl/UpdateBlog/UpdateBlog";
import AddNewService from "../Pages/Dashboard/ControlServices/AddNewService/AddNewService";
import ServicesControl from "../Pages/Dashboard/ControlServices/Services/ServicesControl";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Inbox from "../Pages/Dashboard/Inbox/Inbox";
import ViewMail from "../Pages/Dashboard/Inbox/ViewMail";
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
        path: "/contact",
        element: <Contact />,
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
        element: <ServicesControl />,
      },
      {
        path: "/admin/services/add-service",
        element: <AddNewService />,
      },
      {
        path: "/admin/my-reviews",
        element: <MyReviews />,
      },
      {
        path: "/admin/inbox",
        element: <Inbox />,
      },
      {
        path: "/admin/inbox/view/:id",
        element: <ViewMail />,
      },
      {
        path: "/admin/blogs",
        element: <ManageBlog />,
      },
      {
        path: "/admin/blogs/add-author",
        element: <AddNewBlogAuthor />,
      },
      {
        path: "/admin/blogs/add-category",
        element: <AddNewBlogCategory />,
      },
      {
        path: "/admin/blogs/add-new-blog",
        element: <AddNewBlog />,
      },
      {
        path: "/admin/blogs/update-blog/:id",
        element: <UpdateBlog />,
      },
      {
        path: "/admin/blogs/update-author/:id",
        element: <UpdateBlogAuthor />,
      },
      {
        path: "/admin/blogs/update-category/:id",
        element: <UpdateBlogCategory />,
      },
    ],
  },
]);
