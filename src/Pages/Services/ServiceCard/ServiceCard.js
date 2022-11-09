import { Button, Rating } from "flowbite-react";
import React from "react";

const ServiceCard = () => {
  const serviceDetails =
    "Full preparation guide on HSC Physics 1st Paper Syllabus. Ensure maximum preparation in the shortest possible time. Enroll now and secure an A+ in HSC Physics 1st Paper.";
  return (
    <div className="max-w-[380px] w-full bg-white rounded-md shadow-md dark:bg-slate-800 dark:text-gray-100 p-3 flex flex-col justify-between text-center hover:-translate-y-1 duration-300 relative">
      <div className="bg-orange-500 text-white p-1.5 rounded-full absolute top-1 right-1">
        <span className="font-serif">৳</span>
        {"764"}
      </div>
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
          <div className="flex justify-center items-center">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
          </div>
        </div>
        <p className="">{serviceDetails.slice(0, 100) + "..."}</p>
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
