import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Services/ServiceCard/ServiceCard";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

const HomeService = () => {
  const [services, setServices] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/services?limit=3&page=1`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setError("");
          setServices(data.data.reverse());
        } else {
          setError(data.error);
        }
        setLoad(false);
      })
      .catch((error) => {
        setLoad(false);
        setError(error.message);
      });
  }, []);
  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <div className="py-20 px-auto px-5 bg-gray-100 dark:bg-slate-900 dark:border-b dark:border-gray-800">
          <h2 className="text-center text-4xl lg:text-5xl font-semibold mb-12 text-slate-700 dark:text-gray-300">
            My Service
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {services?.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
          <div className="flex justify-center pt-12">
            <Link
              to={`/services`}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              View More Services
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeService;
