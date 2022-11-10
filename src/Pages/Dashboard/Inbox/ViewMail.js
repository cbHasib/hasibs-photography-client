import React, { useEffect, useState } from "react";
import { FaEnvelope, FaInfo, FaPen, FaUser } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useTitle from "../../../hooks/useTitle";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const ViewMail = () => {
  const [mail, setMail] = useState({});
  const [load, setLoad] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/contact-form/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setError("");
          setMail(data.data);
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

  useTitle(mail?.subject || error || "View Mail");

  return (
    <div>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <div>
          <form className="max-w-xl mx-auto">
            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <FaUser />
                </span>
                <input
                  type="text"
                  id="name"
                  className="rounded-r-lg flex-1 appearance-none cursor-not-allowed border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="User Name"
                  disabled
                  aria-label="disabled input"
                  value={mail.name}
                />
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  id="email"
                  className=" rounded-r-lg flex-1 appearance-none cursor-not-allowed border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="User Email"
                  disabled
                  aria-label="disabled input"
                  value={mail.email}
                />
              </div>
            </div>

            <div className="flex flex-col mb-2">
              <div className="flex relative">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <FaInfo />
                </span>
                <input
                  type="text"
                  id="subject"
                  className=" rounded-r-lg flex-1 appearance-none cursor-not-allowed border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="User Subject"
                  disabled
                  aria-label="disabled input"
                  value={mail.subject}
                />
              </div>
            </div>

            <div className="flex flex-col mb-5">
              <div className="flex relative ">
                <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                  <FaPen />
                </span>
                <textarea
                  type="textarea"
                  rows={4}
                  id="message"
                  className=" rounded-r-lg flex-1 appearance-none cursor-not-allowed border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="User Message"
                  disabled
                  aria-label="disabled input"
                  value={mail.message}
                />
              </div>
            </div>

            <div className="flex w-full">
              <Link
                to="/admin/inbox"
                type="submit"
                className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
              >
                Go Back
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ViewMail;
