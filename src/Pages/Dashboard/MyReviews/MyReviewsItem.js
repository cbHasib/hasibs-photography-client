import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";
import {
  HiOutlineExclamationCircle,
  HiOutlineTrash,
  HiPencilAlt,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const MyReviewsItem = ({ review, setRefresh, refresh }) => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/delete-review/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(data.message);
          setRefresh(!refresh);
        } else {
          toast.error(data.error);
        }
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <>
      <div className="container flex flex-col w-full p-2 mx-auto divide-y rounded-md divide-gray-700 dark:bg-gray-800 bg-gray-100 dark:text-gray-100 my-2">
        <div className="flex justify-between px-4 py-2">
          <div className="flex space-x-4">
            <div>
              <img
                src={review?.image}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{review?.name}</h4>
              <span className="text-xs dark:text-gray-400">
                {review?.reviewTime}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current"
            >
              <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold">{review?.rating + ".0"}</span>
          </div>

          <div className="flex justify-center items-center space-x-2 text-red-700 dark:text-red-500">
            <HiPencilAlt
              className="w-5 h-5 fill-current hover:cursor-pointer"
              onClick={() =>
                navigate(`/admin/my-reviews/edit-review/${review?._id}`)
              }
            />
            <HiOutlineTrash
              className="w-5 h-5 hover:cursor-pointer"
              onClick={() => setShow(true)}
            />
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{review?.review}</p>
        </div>
      </div>

      <div>
        <Modal
          show={show}
          size="md"
          popup={true}
          onClose={() => setShow(false)}
        >
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to DELETE this review?
              </h3>
              <div className="flex justify-center gap-4">
                <Button
                  color="failure"
                  onClick={() => {
                    handleDelete(review?._id);
                    setShow(false);
                  }}
                >
                  Yes, I'm sure
                </Button>
                <Button color="gray" onClick={() => setShow(false)}>
                  No, cancel
                </Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default MyReviewsItem;
