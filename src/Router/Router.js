import DashboardLayout from "../Layout/DashboardLayout";
import About from "../Pages/About/About";
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
import BookingRequest from "../Pages/Dashboard/BookingRequest/BookingRequest";
import ViewBook from "../Pages/Dashboard/BookingRequest/ViewBook";
import AddNewService from "../Pages/Dashboard/ControlServices/AddNewService/AddNewService";
import EditService from "../Pages/Dashboard/ControlServices/EditService/EditService";
import ServicesControl from "../Pages/Dashboard/ControlServices/Services/ServicesControl";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Inbox from "../Pages/Dashboard/Inbox/Inbox";
import ViewMail from "../Pages/Dashboard/Inbox/ViewMail";
import MyReviews from "../Pages/Dashboard/MyReviews/MyReviews";
import UpdateMyReview from "../Pages/Dashboard/MyReviews/UpdateMyReview";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/Services/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services/Services";
import PrivateRouter from "./PrivateRouter";

const { createBrowserRouter } = require("react-router-dom");
const { default: MainLayout } = require("../Layout/MainLayout");
const { default: Home } = require("../Pages/Home/Home");

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
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
    ],
  },
  {
    path: "/admin",
    element: (
      <PrivateRouter>
        <DashboardLayout />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
      },
      {
        index: true,
        path: "/admin/dashboard",
        element: (
          <PrivateRouter>
            <Dashboard />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/services",
        element: (
          <PrivateRouter>
            <ServicesControl />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/services/update-service/:id",
        element: (
          <PrivateRouter>
            <EditService />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/services/add-service",
        element: (
          <PrivateRouter>
            <AddNewService />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/my-reviews",
        element: (
          <PrivateRouter>
            <MyReviews />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/my-reviews/edit-review/:id",
        element: (
          <PrivateRouter>
            <UpdateMyReview />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/inbox",
        element: (
          <PrivateRouter>
            <Inbox />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/inbox/view/:id",
        element: (
          <PrivateRouter>
            <ViewMail />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/request",
        element: (
          <PrivateRouter>
            <BookingRequest />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/request/view/:id",
        element: (
          <PrivateRouter>
            <ViewBook />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/blogs",
        element: (
          <PrivateRouter>
            <ManageBlog />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/blogs/add-author",
        element: (
          <PrivateRouter>
            <AddNewBlogAuthor />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/blogs/add-category",
        element: (
          <PrivateRouter>
            <AddNewBlogCategory />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/blogs/add-new-blog",
        element: (
          <PrivateRouter>
            <AddNewBlog />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/blogs/update-blog/:id",
        element: (
          <PrivateRouter>
            <UpdateBlog />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/blogs/update-author/:id",
        element: (
          <PrivateRouter>
            <UpdateBlogAuthor />
          </PrivateRouter>
        ),
      },
      {
        path: "/admin/blogs/update-category/:id",
        element: (
          <PrivateRouter>
            <UpdateBlogCategory />
          </PrivateRouter>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
