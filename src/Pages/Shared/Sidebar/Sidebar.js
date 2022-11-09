import React from "react";
import {
  HiOutlineCamera,
  HiOutlineChartPie,
  HiOutlineLogout,
  HiOutlineStar,
  HiPencilAlt,
} from "react-icons/hi";
import {
  HiOutlineInboxArrowDown,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside class="lg:w-64 px-7 lg:px-0 h-full" aria-label="Sidebar">
      <div class="overflow-y-auto py-4 px-3 bg-gray-50 h-full dark:bg-gray-800">
        <ul class="space-y-2">
          <li>
            <NavLink
              to="/admin/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-gray-200 dark:bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <HiOutlineChartPie
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="ml-3">Dashboard</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/services"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-gray-200 dark:bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <HiOutlineWrenchScrewdriver
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition
              duration-75 dark:text-gray-400 group-hover:text-gray-900
              dark:group-hover:text-white"
              />
              <span class="ml-3">Services</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/my-reviews"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-gray-200 dark:bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <HiOutlineStar
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition
              duration-75 dark:text-gray-400 group-hover:text-gray-900
              dark:group-hover:text-white"
              />
              <span class="ml-3">My Reviews</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/request"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-gray-200 dark:bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <HiOutlineCamera
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition
              duration-75 dark:text-gray-400 group-hover:text-gray-900
              dark:group-hover:text-white"
              />
              <span class="flex-1 ml-3 whitespace-nowrap">Request</span>
              <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                3
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/inbox"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-gray-200 dark:bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <HiOutlineInboxArrowDown
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition
              duration-75 dark:text-gray-400 group-hover:text-gray-900
              dark:group-hover:text-white"
              />
              <span class="flex-1 ml-3 whitespace-nowrap">Inbox</span>
              <span class="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                3
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/blogs"
              className={({ isActive }) =>
                isActive
                  ? "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white bg-gray-200 dark:bg-gray-700"
                  : "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              }
            >
              <HiPencilAlt
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition
              duration-75 dark:text-gray-400 group-hover:text-gray-900
              dark:group-hover:text-white"
              />
              <span class="flex-1 ml-3">Manage Blog</span>
            </NavLink>
          </li>
        </ul>
        <ul class="pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
            <button
              onClick={() => console.log("object")}
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
            >
              <HiOutlineLogout
                aria-hidden="true"
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              />
              <span class="ml-3">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
