import React from "react";
import { Link } from "react-router-dom";

const HomeAbout = () => {
  return (
    <div className="py-32 bg-white dark:bg-gray-900 border-b dark:border-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 text-center lg:text-left px-7 lg:px-10 ">
        <div className="flex items-center justify-center lg:justify-start">
          <h2 className="uppercase text-3xl md:text-4xl lg:text-6xl font-bold lg:w-[80%] text-blue-900 dark:text-blue-400 font-serif">
            I Love To Capture For Smiling...
          </h2>
        </div>
        <div className="flex items-center">
          <div className="flex-col">
            <p className="mb-5 dark:text-gray-300">
              Hasibul Hasan is one of the freelance commercial photographers in
              Bangladesh. He is passionate about his work and he's following his
              passion for more than 21 years. He believes in simplicity so he
              always tries to exhibit his works creatively in a simple way. His
              work includes Commercial, Advertising, Fashion & Glamour Industry,
              Interiors, Products, Wedding & Parties and more.
            </p>
            <Link
              to="/about"
              className="text-purple-700 hover:text-purple-900 dark:text-gray-300 hover:dark:text-gray-500 font-semibold"
            >
              Read More...
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
