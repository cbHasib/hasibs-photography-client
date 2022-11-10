import React, { useEffect, useState } from "react";
import {
  FaCalendar,
  FaEnvelope,
  FaMapPin,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const ViewBook = () => {
  const [booking, setBooking] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/booking-form/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setError("");
          setBooking(data.data);
          setLoad(false);
        } else {
          setError(data.error);
          toast.error(data.error);
          setLoad(false);
        }
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
        setLoad(false);
      });
  }, [id]);

  useTitle(booking?.subject || error || "Blog");

  return (
    <div>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <div>
          <div className="w-full col-span-3 lg:col-span-1 max-w-xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-md shadow-md p-7 sm:p-10 sticky top-20">
              <h3 className="dark:text-white/90 mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl underline text-center decoration-3 decoration-blue-400 dark:decoration-blue-600">
                Booking Details of {booking?.name}
              </h3>
              <form>
                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      id="name"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent cursor-not-allowed"
                      placeholder="Name"
                      value={booking.name}
                      disabled
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white dark:bg-slate-900 border-l border-b border-gray-300 dark:border-gray-700 text-gray-500 dark:text-gray-400 shadow-sm text-sm">
                      <FaEnvelope />
                    </span>
                    <input
                      type="email"
                      id="email"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent cursor-not-allowed"
                      placeholder="Email"
                      value={booking.email}
                      disabled
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
                      id="phone"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent cursor-not-allowed"
                      placeholder="Your Phone"
                      value={booking.phone}
                      disabled
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
                      id="date"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent cursor-not-allowed"
                      placeholder="Event Date"
                      value={booking.eventDate}
                      disabled
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
                      id="address"
                      className="rounded-r-lg flex-1 appearance-none border border-gray-300 dark:border-gray-700 w-full py-2 px-4 bg-white dark:bg-slate-900 text-gray-700 placeholder-gray-400 shadow-sm text-base dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent cursor-not-allowed"
                      placeholder="Address"
                      value={booking.address}
                      disabled
                    />
                  </div>
                </div>

                <div className="flex w-full">
                  <Link
                    to="/admin/request"
                    type="submit"
                    className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                  >
                    Back to Booking Request
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewBook;
