import React, { useState } from "react";
import {
  HiOutlineStar,
  HiOutlineViewGridAdd,
  HiOutlineInboxIn,
} from "react-icons/hi";
import { HiOutlinePencilAlt } from "react-icons/hi";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import ErrorMessage from "../Shared/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../Shared/LoadingSpinner/LoadingSpinner";

const Dashboard = () => {
  const [serviceCount, setServiceCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [instructorCount, setInstructorCount] = useState(0);
  const [reviewsCount, setReviewsCount] = useState(0);
  const [blogCount, setBlogCount] = useState(0);
  const [error, setError] = useState("");
  const [load, setLoad] = useState(false);
  useScrollToTop();
  useTitle("Dashboard");
  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <section className="p-6">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div className="shadow-lg rounded-2xl w-full p-4 bg-white dark:bg-gray-800 hover:bg-purple-300 duration-300 ">
              <div className="flex items-center">
                <span className="bg-green-500 p-2 h-7 w-7 rounded-full relative">
                  <HiOutlineViewGridAdd className="text-white h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </span>
                <p className="text-md text-gray-700 dark:text-gray-50 ml-2 font-medium">
                  Services
                </p>
              </div>

              <div className="flex flex-col justify-start">
                <p
                  className={
                    serviceCount
                      ? "text-gray-800 text-4xl text-left dark:text-white font-bold my-4"
                      : "h-11 bg-gray-200 rounded dark:bg-gray-700 w-15 mb-4 animate-pulse my-4"
                  }
                >
                  {serviceCount ? serviceCount : null}
                </p>
                <div className="relative w-full h-2 bg-gray-200 rounded">
                  <div className="absolute top-0 h-2  left-0 rounded bg-green-500 w-full"></div>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-2xl w-full p-4 bg-white dark:bg-gray-800 hover:bg-purple-300 duration-300">
              <div className="flex items-center">
                <span className="bg-green-500 p-2 h-7 w-7 rounded-full relative">
                  <HiOutlineViewGridAdd className="text-white h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </span>
                <p className="text-md text-gray-700 dark:text-gray-50 ml-2 font-medium">
                  Service Request
                </p>
              </div>

              <div className="flex flex-col justify-start">
                <p
                  className={
                    videoCount
                      ? "text-gray-800 text-4xl text-left dark:text-white font-bold my-4"
                      : "h-11 bg-gray-200 rounded dark:bg-gray-700 w-15 mb-4 animate-pulse my-4"
                  }
                >
                  {videoCount ? videoCount : null}
                </p>
                <div className="relative w-full h-2 bg-gray-200 rounded">
                  <div className="absolute top-0 h-2  left-0 rounded bg-green-500 w-full"></div>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-2xl w-full p-4 bg-white dark:bg-gray-800 hover:bg-purple-300 duration-300">
              <div className="flex items-center">
                <span className="bg-green-500 p-2 h-7 w-7 rounded-full relative">
                  <HiOutlineStar className="text-white h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </span>
                <p className="text-md text-gray-700 dark:text-gray-50 ml-2 font-medium">
                  Reviews
                </p>
              </div>

              <div className="flex flex-col justify-start">
                <p
                  className={
                    instructorCount
                      ? "text-gray-800 text-4xl text-left dark:text-white font-bold my-4"
                      : "h-11 bg-gray-200 rounded dark:bg-gray-700 w-15 mb-4 animate-pulse my-4"
                  }
                >
                  {instructorCount ? instructorCount : null}
                </p>
                <div className="relative w-full h-2 bg-gray-200 rounded">
                  <div className="absolute top-0 h-2  left-0 rounded bg-green-500 w-full"></div>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-2xl w-full p-4 bg-white dark:bg-gray-800 hover:bg-purple-300 duration-300">
              <div className="flex items-center">
                <span className="bg-green-500 p-2 h-7 w-7 rounded-full relative">
                  <HiOutlineInboxIn className="text-white h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </span>
                <p className="text-md text-gray-700 dark:text-gray-50 ml-2 font-medium">
                  Message
                </p>
              </div>

              <div className="flex flex-col justify-start">
                <p
                  className={
                    instructorCount
                      ? "text-gray-800 text-4xl text-left dark:text-white font-bold my-4"
                      : "h-11 bg-gray-200 rounded dark:bg-gray-700 w-15 mb-4 animate-pulse my-4"
                  }
                >
                  {instructorCount ? instructorCount : null}
                </p>
                <div className="relative w-full h-2 bg-gray-200 rounded">
                  <div className="absolute top-0 h-2  left-0 rounded bg-green-500 w-full"></div>
                </div>
              </div>
            </div>

            <div className="shadow-lg rounded-2xl w-full p-4 bg-white dark:bg-gray-800 hover:bg-purple-300 duration-300">
              <div className="flex items-center">
                <span className="bg-green-500 p-2 h-7 w-7 rounded-full relative">
                  <HiOutlinePencilAlt className="text-white h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                </span>
                <p className="text-md text-gray-700 dark:text-gray-50 ml-2 font-medium">
                  Blogs
                </p>
              </div>

              <div className="flex flex-col justify-start">
                <p
                  className={
                    blogCount
                      ? "text-gray-800 text-4xl text-left dark:text-white font-bold my-4"
                      : "h-11 bg-gray-200 rounded dark:bg-gray-700 w-15 mb-4 animate-pulse my-4"
                  }
                >
                  {blogCount ? blogCount : null}
                </p>
                <div className="relative w-full h-2 bg-gray-200 rounded">
                  <div className="absolute top-0 h-2  left-0 rounded bg-green-500 w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Dashboard;
