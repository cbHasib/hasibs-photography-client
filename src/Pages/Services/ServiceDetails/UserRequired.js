import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserRequired = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col w-full p-8 shadow-sm rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>

        <div className="flex flex-col items-center py-3 space-y-">
          <span className="text-center">
            Kindly login or register to leave your feedback!
          </span>
        </div>

        <div className="flex justify-center items-center w-full">
          <Link
            state={{ from: location }}
            replace
            to="/login"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Login
          </Link>

          <Link
            state={{ from: location }}
            replace
            to="/register"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserRequired;
