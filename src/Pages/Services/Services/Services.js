import { Pagination } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const onPageChange = (page) => {
    console.log(page);
  };
  return (
    <div className="pb-20 pt-16 px-auto px-5 bg-gray-50 dark:bg-slate-900 dark:border-b dark:border-gray-800">
      <h2 className="text-center text-4xl lg:text-5xl font-semibold mb-12 text-slate-700 dark:text-gray-300">
        My <span className="text-blue-700 dark:text-blue-600">Service</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
      <div className="flex justify-center pt-12">
        <Pagination
          currentPage={10}
          layout="table"
          onPageChange={onPageChange}
          showIcons={true}
          totalPages={1000}
        />
      </div>
    </div>
  );
};

export default Services;
