import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React, { useContext, useEffect, useState } from "react";
import "./Header.css";
import logo from "../../../assets/images/logo.png";
import { AuthContext } from "../../../Context/UserContext";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [dark, setDark] = useState(false);
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("dark") === "true") {
      setDark(true);
      document.getElementById("darkSwitch").checked = true;
    }
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.setAttribute("class", "dark");
      localStorage.setItem("dark", "true");
    } else {
      document.documentElement.removeAttribute("class");
      localStorage.setItem("dark", "false");
    }
  }, [dark]);

  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 sticky top-0 z-50">
      <Navbar
        className="px-5 sm:px-4 py-3 w-full max-w-7xl mx-auto z-20"
        fluid={true}
      >
        <Navbar.Brand className="cursor-pointer" onClick={() => navigate("/")}>
          <img
            src={logo}
            className="mr-3 h-6 sm:h-9"
            alt="Hasib's Photography Logo"
          />
          <div className="flex flex-col gap-0">
            <span className="text-xl my-0 py-0 font-semibold dark:text-white">
              Hasib's
            </span>
            <span className=" text-xs  dark:text-white -mt-1.5 py-0">
              Photography
            </span>
          </div>
        </Navbar.Brand>

        <div className="flex md:order-2">
          <label className="swap swap-rotate mr-4">
            <input
              id="darkSwitch"
              type="checkbox"
              onClick={() => setDark(!dark)}
            />

            <svg
              className="swap-on fill-white w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            <svg
              className="swap-off fill-blue-700 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          {/* If user logged in */}
          {user ? (
            <>
              <Dropdown
                arrowIcon={false}
                inline={true}
                label={
                  <Avatar
                    alt="User settings"
                    img={user?.photoURL}
                    referrerPolicy="no-referrer"
                    rounded={true}
                  />
                }
              >
                <Dropdown.Header>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </Dropdown.Header>
                <Link to="/admin">
                  <Dropdown.Item>Dashboard</Dropdown.Item>
                </Link>
                <Link to="/admin/services">
                  <Dropdown.Item>My Services</Dropdown.Item>
                </Link>
                <Link to="/admin/my-reviews">
                  <Dropdown.Item>My Reviews</Dropdown.Item>
                </Link>
                <Link to="/admin/inbox">
                  <Dropdown.Item>Inbox</Dropdown.Item>
                </Link>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
              </Dropdown>
              <Navbar.Toggle />
            </>
          ) : (
            <>
              <Button
                className="mr-3 hidden md:block"
                onClick={() => navigate("/register")}
              >
                Register
              </Button>
              <Button outline={true} onClick={() => navigate("/login")}>
                Login
              </Button>
              <Navbar.Toggle />
            </>
          )}
        </div>

        <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-blue-700 dark:text-white/90 md:dark:hover:bg-transparent md:dark:hover:text-white"
                : "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-blue-700 dark:text-white/90 md:dark:hover:bg-transparent md:dark:hover:text-white"
                : "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-blue-700 dark:text-white/90 md:dark:hover:bg-transparent md:dark:hover:text-white"
                : "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-blue-700 dark:text-white/90 md:dark:hover:bg-transparent md:dark:hover:text-white"
                : "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100 text-blue-700 dark:text-white/90 md:dark:hover:bg-transparent md:dark:hover:text-white"
                : "block py-2 pr-4 pl-3 md:p-0 border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white"
            }
          >
            Contact
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
