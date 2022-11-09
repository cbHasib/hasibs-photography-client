import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import Sidebar from "../Pages/Shared/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900 flex flex-col lg:flex-row">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className="px-7 py-6 2xl:container w-full">
          <Outlet />
        </div>

        <div className="lg:hidden">
          <Sidebar />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardLayout;
