import React from "react";
import Banner from "./Banner/Banner";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeCTA from "./HomeCTA/HomeCTA";
import HomeService from "./HomeService/HomeService";

const Home = () => {
  return (
    <div>
      <Banner />
      <HomeAbout />
      <HomeService />
      <HomeCTA />
    </div>
  );
};

export default Home;
