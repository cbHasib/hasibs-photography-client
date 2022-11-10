import { Rating } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const UpdateMyReview = () => {
  const [rating, setRating] = useState(4);
  const { id } = useParams();

  const [review, setReview] = useState({});
  const [load, setLoad] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/reviews/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setError(null);
          setReview(data.data);
          setRating(data.data.rating);
        } else {
          setError(data.error);
          toast.error(data.error);
        }
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        toast.error(error.message);
        setError(error.message);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = e.target.review.value;
    const data = { review, rating };

    fetch(`${process.env.REACT_APP_SERVER_URL}/update-review/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          e.target.reset();
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => toast.error(error.message));
  };
  useTitle("Update Review");
  useScrollToTop();

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <div>
          <div className="flex flex-col w-full p-8 shadow-sm rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
            <form
              className="flex flex-col items-center w-full"
              onSubmit={handleSubmit}
            >
              <h2 className="text-3xl font-semibold text-center">
                Update your review
              </h2>
              <div className="flex flex-col items-center py-3 space-y-3">
                <span className="text-center">How was your experience?</span>
                <div className="flex space-x-3">
                  <Rating size="lg">
                    <button
                      type="button"
                      title="Rate 1 stars"
                      aria-label="Rate 1 stars"
                      onClick={() => setRating(1)}
                    >
                      <Rating.Star />
                    </button>

                    <button
                      type="button"
                      title="Rate 2 stars"
                      aria-label="Rate 2 stars"
                      onClick={() => setRating(2)}
                    >
                      <Rating.Star filled={rating < 2 ? false : true} />
                    </button>

                    <button
                      type="button"
                      title="Rate 3 stars"
                      aria-label="Rate 3 stars"
                      onClick={() => setRating(3)}
                    >
                      <Rating.Star filled={rating < 3 ? false : true} />
                    </button>

                    <button
                      type="button"
                      title="Rate 4 stars"
                      aria-label="Rate 4 stars"
                      onClick={() => setRating(4)}
                    >
                      <Rating.Star filled={rating < 4 ? false : true} />
                    </button>

                    <button
                      type="button"
                      title="Rate 5 stars"
                      aria-label="Rate 5 stars"
                      onClick={() => setRating(5)}
                    >
                      <Rating.Star filled={rating < 5 ? false : true} />
                    </button>
                  </Rating>
                </div>
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  rows="3"
                  placeholder="Review..."
                  className="p-4 rounded-md resize-none dark:text-gray-100 dark:bg-gray-900"
                  name="review"
                  defaultValue={review?.review}
                ></textarea>
                <button
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-5"
                >
                  Leave feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default UpdateMyReview;
