import { Rating } from "flowbite-react";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/UserContext";

const AddReview = ({ serviceId, serviceName }) => {
  const [rating, setRating] = useState(4);
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const review = e.target.review.value;

    if (review.length < 10) {
      toast.error("Review must be at least 10 characters long");
      return;
    }

    const newReview = {
      serviceId,
      serviceName,
      rating,
      review,
      name: user.displayName,
      uid: user.uid,
      image: user.photoURL,
      reviewTime: new Date().toLocaleString(),
    };

    fetch(`${process.env.REACT_APP_SERVER_URL}/add-review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
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

  return (
    <div className="flex flex-col w-full p-8 shadow-sm rounded-xl bg-gray-200 dark:bg-gray-900 dark:text-gray-300">
      <form
        className="flex flex-col items-center w-full"
        onSubmit={handleSubmit}
      >
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
  );
};

export default AddReview;
