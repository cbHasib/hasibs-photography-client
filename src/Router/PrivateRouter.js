import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import LoadingSpinner from "../Pages/Shared/LoadingSpinner/LoadingSpinner";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (user && user?.uid) {
    return children;
  }

  return <Navigate state={{ from: location }} replace to="/login" />;
};

export default PrivateRouter;
