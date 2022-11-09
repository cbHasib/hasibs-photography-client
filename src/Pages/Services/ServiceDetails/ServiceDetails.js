import React from "react";
import {
  FaCalendar,
  FaEnvelope,
  FaMapPin,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { useForm } from "react-hook-form";

const ServiceDetails = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <div className="relative">
        <img
          src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className="relative bg-gradient-to-r from-gray-900 to-black opacity-75">
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col items-center justify-between xl:flex-row">
              <div className="w-full flex flex-col justify-center items-center max-w-7xl mx-auto text-center">
                <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                  Wedding Photography
                </h2>
                <p className="max-w-xl mx-auto mb-4 text-base text-gray-300 md:text-lg">
                  Capture your special moments with Hasibul Hasan.
                </p>
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
        <div className="grid grid-cols-3 px-5 sm:px-4 py-3 w-full max-w-7xl mx-auto">
          <div className="col-span-2 bg-white rounded-md">
            <h2 className="text-2xl font-bold">Service Details</h2>
          </div>

          <div className="w-full px-5">
            <div className="bg-white rounded-md shadow-md p-7 sm:p-10">
              <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl underline  decoration-3 decoration-blue-400 dark:decoration-blue-600">
                Book Now
              </h3>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <FaUser />
                    </span>
                    <input
                      type="text"
                      {...register("name")}
                      id="name"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Name"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <FaEnvelope />
                    </span>
                    <input
                      {...register("email")}
                      type="email"
                      id="email"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <FaPhoneAlt />
                    </span>
                    <input
                      type="tel"
                      {...register("phone")}
                      id="phone"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Phone"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-2.5">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <FaCalendar />
                    </span>
                    <input
                      type="date"
                      {...register("date")}
                      id="date"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                      placeholder="Your Event Date"
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-6">
                  <div className="flex relative ">
                    <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                      <FaMapPin />
                    </span>
                    <input
                      type="text"
                      {...register("address")}
                      id="address"
                      className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
  );
};

export default ServiceDetails;
