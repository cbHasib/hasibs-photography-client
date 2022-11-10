import { Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import CustomerReviewItem from "./CustomerReviewItem";

const CustomerReview = ({ totalAverage, serviceId }) => {
  const [reviews, setReviews] = useState([]);

  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const limit = 3;

  useEffect(() => {
    setLoad(true);
    // /review-count/636c5e9e4e36d84105413b5f
    fetch(`${process.env.REACT_APP_SERVER_URL}/review-count/${serviceId}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCount(data.data);
        } else {
          setError(data.error);
        }
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message);
      });

    // API Look Like this: /get-reviews/636c5e9e4e36d84105413b5f?sort=desc&page=2&limit=1
    fetch(
      `${process.env.REACT_APP_SERVER_URL}/get-reviews/${serviceId}/?sort=desc&page=${page}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setReviews(data.data);
          setError("");
        } else {
          setError(data.error);
        }
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message);
      });
  }, [limit, page, serviceId]);

  const onPageChange = (pageNo) => {
    setPage(pageNo);
  };

  const totalPages = Math.ceil(count / limit);

  return (
    <div>
      <h2 className="text-2xl font-bold mt-5 mb-3 dark:text-white/80">
        Customer Reviews (Overall:
        <span className="text-yellow-500"> {totalAverage || 0}</span>)
      </h2>

      <div>
        {load ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorMessage error={error} />
        ) : (
          <>
            {reviews?.map((review) => (
              <CustomerReviewItem key={review._id} review={review} />
            ))}
          </>
        )}
      </div>
      <div className="flex justify-end items-center">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
          showIcons={true}
          layout="navigation"
        />
      </div>
    </div>
  );
};

export default CustomerReview;
