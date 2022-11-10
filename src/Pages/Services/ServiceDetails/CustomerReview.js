import { Pagination } from "flowbite-react";
import React from "react";
import CustomerReviewItem from "./CustomerReviewItem";

const CustomerReview = ({ rating }) => {
  const onPageChange = (page) => {
    console.log(page);
  };
  return (
    <div>
      <h2 className="text-2xl font-bold mt-5 mb-3 dark:text-white/80">
        Customer Reviews (Overall:
        <span className="text-yellow-500"> {rating}</span>)
      </h2>

      <div>
        <CustomerReviewItem />
        <CustomerReviewItem />
        <CustomerReviewItem />
      </div>
      <div className="flex justify-end items-center">
        <Pagination
          currentPage={6}
          totalPages={100}
          onPageChange={onPageChange}
          showIcons={true}
          layout="navigation"
        />
      </div>
    </div>
  );
};

export default CustomerReview;
