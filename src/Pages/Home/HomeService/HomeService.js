import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Services/ServiceCard/ServiceCard";

const HomeService = () => {
  return (
    <div className="py-20 px-auto px-5 bg-gray-100 dark:bg-slate-900 dark:border-b dark:border-gray-800">
      <h2 className="text-center text-4xl lg:text-5xl font-semibold mb-12 text-slate-700 dark:text-gray-300">
        My Service
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex justify-center pt-12">
        <Link
          to={`/services`}
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          View More Services
        </Link>
      </div>
    </div>
  );
};

export default HomeService;
