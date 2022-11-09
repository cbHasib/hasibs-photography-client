import { Rating } from "flowbite-react";
import React from "react";

const AddReview = () => {
  return (
    <div className="flex flex-col w-full p-8 shadow-sm rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
      <div className="flex flex-col items-center w-full">
        <h2 className="text-3xl font-semibold text-center">
          Your opinion matters!
        </h2>
        <div className="flex flex-col items-center py-3 space-y-3">
          <span className="text-center">How was your experience?</span>
          <div className="flex space-x-3">
            <Rating size="lg">
              <button
                type="button"
                title="Rate 1 stars"
                aria-label="Rate 1 stars"
              >
                <Rating.Star />
              </button>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
            </Rating>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <textarea
            rows="3"
            placeholder="Message..."
            className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
          ></textarea>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-5"
          >
            Leave feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
