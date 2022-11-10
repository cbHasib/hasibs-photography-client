import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../Context/UserContext";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import LoadingSpinner from "../Pages/Shared/LoadingSpinner/LoadingSpinner";

const MainLayout = () => {
  const { loading } = useContext(AuthContext);
  return (
    <div className="">
      <Header />
      {loading ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </div>
  );
};

export default MainLayout;
