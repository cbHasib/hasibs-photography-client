import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/UserContext";
import useScrollToTop from "../../../hooks/useScrollToTop";
import useTitle from "../../../hooks/useTitle";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import MyReviewsItem from "./MyReviewsItem";

const MyReviews = () => {
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [myReviews, setMyReviews] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user?.uid) {
      setLoad(true);

      // /my-review?uid=${uid}
      // or can be /my-review?uid=${uid}&limit=2&page=1

      fetch(`${process.env.REACT_APP_SERVER_URL}/my-reviews?uid=${user.uid}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setMyReviews(data.data);
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
    }
  }, [user, refresh]);

  useScrollToTop();
  useTitle("My Reviews");

  return (
    <div>
      {load ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorMessage error={error} />
      ) : (
        <>
          {myReviews?.map((review) => (
            <MyReviewsItem
              key={review?._id}
              review={review}
              setRefresh={setRefresh}
              refresh={refresh}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MyReviews;
