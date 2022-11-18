import React, { useContext, useEffect, useState } from "react";
import {
  FaCalendar,
  FaEnvelope,
  FaMapPin,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { useForm } from "react-hook-form";
import { PhotoProvider, PhotoView } from "react-photo-view";
import CustomerReview from "./CustomerReview";
import AddReview from "./AddReview";
import UserRequired from "./UserRequired";
import { AuthContext } from "../../../Context/UserContext";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";
import { toast } from "react-toastify";

const ServiceDetails = () => {
  useScrollToTop();
  const { user } = useContext(AuthContext);
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState(null);
  const [load, setLoad] = useState(false);
  const [totalAverage, setTotalAverage] = useState(0);
  const [service, setService] = useState({});
  const { _id, title, details, price, thumbnail, gallery } = service;

  const { id } = useParams();

  useEffect(() => {
    setLoad(true);

    fetch(`${process.env.REACT_APP_SERVER_URL}/average-rating/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setTotalAverage(data.data);
        } else {
          setError(data.error);
        }
      })
      .catch((error) => {
        setError(error.message);
      });

    fetch(`${process.env.REACT_APP_SERVER_URL}/service/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setError(null);
          setService(data.data);
        } else {
          setError(data.error);
        }
        setLoad(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoad(false);
      });
  }, [id]);

  useTitle(title || error || "Service Details");
  const onSubmit = (data) => {
    data["serviceId"] = _id;
    data["serviceTitle"] = title;

    const id = toast.loading("Please wait booking email sending...");

    // Send data to server
    fetch(`${process.env.REACT_APP_SERVER_URL}/booking-form`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.update(id, {
            render: data.message,
            type: "success",
            autoClose: true,
            isLoading: false,
          });

          reset();
        } else {
          toast.update(id, {
            render: data.error,
            type: "error",
            isLoading: false,
            autoClose: true,
          });
        }
      })
      .catch((err) => {
        toast.update(id, {
          render: err.message,
          type: "error",
          isLoading: false,
          autoClose: true,
        });
      });
  };

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <div>
          <div className="relative">
            <img
              src={thumbnail}
              alt={title}
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="relative bg-gradient-to-r from-gray-900 to-black opacity-75">
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32">
                <div className="flex flex-col items-center justify-between xl:flex-row">
                  <div className="w-full flex flex-col justify-center items-center max-w-7xl mx-auto text-center">
                    <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none lg:6xl">
                      {title}
                    </h2>
                    <button
                      onClick={() => {
                        document
                          .getElementById("details")
                          .scrollIntoView({ behavior: "smooth" });
                      }}
                      aria-label=""
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 max-w-fit text-center"
                    >
                      Learn more
                      <svg
                        className="inline-block w-3 ml-2"
                        fill="currentColor"
                        viewBox="0 0 12 12"
                      >
                        <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            id="details"
            className="py-12 bg-gray-100 dark:bg-slate-900 dark:border-b dark:border-gray-800"
          >
            <div className="grid grid-cols-3 px-5 sm:px-4 py-3 gap-7 w-full max-w-7xl mx-auto">
              <div className="col-span-3 lg:col-span-2 bg-white rounded-md dark:bg-slate-800 shadow-md pt-6 pb-12 px-5 lg:px-10">
                <div className="flex justify-between items-center pb-2 dark:text-white/80">
                  <h2 className="text-2xl font-bold mb-3">Service Details</h2>
                  <h2 className="text-xl font-semibold mb-3">
                    Price: ৳{price}
                  </h2>
                </div>
                <p className="text-justify mb-7 dark:text-white/75">
                  {details}
                </p>

                <h2 className="text-2xl font-bold mt-5 mb-3 dark:text-white/80">
                  Service Gallery
                </h2>
                <PhotoProvider>
                  <div className="flex flex-wrap gap-5 justify-center">
                    {gallery?.map((item, index) => (
                      <PhotoView key={index} src={item}>
                        <figure className="relative">
                          <img
                            src={item}
                            alt=""
                            className="w-[120px] h-[120px] object-cover rounded-md"
                          />
                          <div className="absolute inset-0 duration-300 hover:bg-blue-800 hover:bg-opacity-50 rounded-md"></div>
                        </figure>
                      </PhotoView>
                    ))}
                  </div>
                </PhotoProvider>

                <div className="mt-16">
                  <CustomerReview totalAverage={totalAverage} serviceId={id} />
                </div>
                <div className="mt-16">
                  {user ? (
                    <AddReview serviceId={_id} serviceName={title} />
                  ) : (
                    <UserRequired />
                  )}
                </div>
              </div>

              <div className="w-full col-span-3 lg:col-span-1">
                <div className="bg-white dark:bg-slate-800 rounded-md shadow-md p-7 sm:p-10 sticky top-20">
                  <h3 className="dark:text-white/90 mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl underline text-center decoration-3 decoration-blue-400 dark:decoration-blue-600">
                    Book Now
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mb-2.5">
                      <div className="flex relative ">
                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                          <FaUser />
                        </span>
                        <input
                          type="text"
                          {...register("name")}
                          id="name"
                          className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mb-2.5">
                      <div className="flex relative ">
                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                          <FaEnvelope />
                        </span>
                        <input
                          {...register("email")}
                          type="email"
                          id="email"
                          className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mb-2.5">
                      <div className="flex relative ">
                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                          <FaPhoneAlt />
                        </span>
                        <input
                          type="tel"
                          {...register("phone")}
                          id="phone"
                          className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mb-2.5">
                      <div className="flex relative ">
                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                          <FaCalendar />
                        </span>
                        <input
                          type="date"
                          {...register("eventDate")}
                          id="date"
                          className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Your Event Date"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col mb-6">
                      <div className="flex relative ">
                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                          <FaMapPin />
                        </span>
                        <input
                          type="text"
                          {...register("address")}
                          id="address"
                          className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                          placeholder="Your Address"
                        />
                      </div>
                    </div>

                    <div className="flex w-full">
                      <button
                        type="submit"
                        className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Book Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceDetails;
