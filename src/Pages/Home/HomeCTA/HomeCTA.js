import React from "react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <div className="bg-slate-900">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:py-16 lg:px-8 text-center lg:text-left">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to hire me?</span>
          <span className="block text-indigo-500">
            Let's make a frame more beautiful.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              See Service
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCTA;
