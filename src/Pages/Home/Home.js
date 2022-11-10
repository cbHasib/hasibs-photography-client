import React from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import useTitle from "../../hooks/useTitle";
import Banner from "./Banner/Banner";
import CustomerLogo from "./CustomerLogo/CustomerLogo";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeService from "./HomeService/HomeService";

const Home = () => {
  useScrollToTop();
  useTitle("Home");
  return (
    <div>
      <Banner />
      <HomeAbout />
      <HomeService />
      <CustomerLogo />
    </div>
  );
};

export default Home;
