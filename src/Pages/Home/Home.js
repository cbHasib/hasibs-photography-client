import React from "react";
import Banner from "./Banner/Banner";
import CustomerLogo from "./CustomerLogo/CustomerLogo";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeCTA from "./HomeCTA/HomeCTA";
import HomeService from "./HomeService/HomeService";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeAbout />
      <HomeService />
      <CustomerLogo />
      <HomeCTA />
    </div>
  );
};

export default Home;
