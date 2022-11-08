import { Button } from "flowbite-react";
import React from "react";

const ServiceCard = () => {
  return (
    <div className="max-w-[380px] w-full bg-white rounded-md shadow-md dark:bg-slate-800 dark:text-gray-100 p-3 flex flex-col justify-between text-center hover:-translate-y-1 duration-300">
      <div>
        <img
          src={"https://flowbite.com/docs/images/blog/image-1.jpg"}
          alt=""
          className="object-cover object-center w-full rounded-lg h-48 dark:bg-gray-500"
        />
        <div className="px-3 py-2 space-y-3">
          <h2 className="text-xl font-semibold tracking-wide text-ellipsis ">
            {"Wedding Photography"}
          </h2>
        </div>
      </div>

      <div className="px-3 py-2 space-y-3">
        <Button
          to={`/courses/`}
          type="button"
          className="bg-blue-600 w-full p-0 m-0 min-h-[1rem] max-h-10"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
