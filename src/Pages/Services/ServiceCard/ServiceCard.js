import { Button, Rating } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, details, thumbnail, price } = service;

  const navigate = useNavigate();
  const [rating, setRating] = useState(4);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/average-rating/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setRating(data.data);
        }
      });
  }, [_id]);

  return (
    <div className="max-w-[380px] w-full bg-white rounded-md shadow-md dark:bg-slate-800 drop-shadow-2xl dark:text-gray-100 p-3 flex flex-col justify-between text-center hover:-translate-y-1 duration-300 relative">
      <div className="bg-orange-500 text-white p-1.5 rounded-full absolute top-1 right-1">
        <span className="font-serif">৳</span>
        {price}
      </div>
      <div>
        <PhotoProvider>
          <PhotoView src={thumbnail}>
            <img
              src={thumbnail}
              alt={title}
              className="object-cover object-center w-full rounded-lg h-48 dark:bg-gray-500"
            />
          </PhotoView>
        </PhotoProvider>

        <div className="px-3 py-2 space-y-3">
          <h2 className="text-xl font-semibold tracking-wide text-ellipsis ">
            {title}
          </h2>
          <div className="flex justify-center items-center">
            <Rating>
              <Rating.Star filled={rating >= 1 ? true : false} />
              <Rating.Star filled={rating >= 2 ? true : false} />
              <Rating.Star filled={rating >= 3 ? true : false} />
              <Rating.Star filled={rating >= 4 ? true : false} />
              <Rating.Star filled={rating === 5 ? true : false} />
            </Rating>
          </div>
        </div>
        <p className="">{details.slice(0, 100) + "..."}</p>
      </div>

      <div className="px-3 py-2 space-y-3">
        <Button
          onClick={() => navigate(`/services/${_id}`)}
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
