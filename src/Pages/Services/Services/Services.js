import { Pagination } from "flowbite-react";
import React, { useEffect, useState } from "react";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services = () => {
  const [count, setCount] = useState(0);
  const limit = 6;
  const [page, setPage] = useState(1);
  const [services, setServices] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoad(true);
    fetch(`${process.env.REACT_APP_SERVER_URL}/service-count`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setCount(data.data);
        }
        setLoad(false);
      });

    fetch(
      `${process.env.REACT_APP_SERVER_URL}/services?limit=${limit}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setServices(data.data);
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
  }, [limit, page]);

  const onPageChange = (pageNo) => {
    setPage(pageNo);
  };

  useScrollToTop();
  useTitle("Services");

  const totalPages = Math.ceil(count / limit);

  return (
    <>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <div className="pb-20 pt-16 px-auto px-5 bg-gray-50 dark:bg-slate-900 dark:border-b dark:border-gray-800">
          <h2 className="text-center text-4xl lg:text-5xl font-semibold mb-12 text-slate-700 dark:text-gray-300">
            My <span className="text-blue-700 dark:text-blue-600">Service</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            {services?.map((service) => (
              <ServiceCard key={service._id} service={service} />
            ))}
          </div>
          <div className="flex justify-center pt-12">
            <Pagination
              currentPage={page}
              layout="table"
              onPageChange={onPageChange}
              showIcons={true}
              totalPages={totalPages}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
