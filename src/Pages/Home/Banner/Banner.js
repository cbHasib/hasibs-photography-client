import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import slider1 from "../../../assets/images/banner/1.jpg";
import slider2 from "../../../assets/images/banner/2.jpg";
import slider3 from "../../../assets/images/banner/3.jpg";
import slider4 from "../../../assets/images/banner/4.jpg";
import slider5 from "../../../assets/images/banner/5.jpg";
import slider6 from "../../../assets/images/banner/6.jpg";
import { Button } from "flowbite-react";

const sliders = [
  {
    id: 1,
    img: slider1,
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
  },
  {
    id: 2,
    img: slider2,
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
  },
  {
    id: 3,
    img: slider3,
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
  },
  {
    id: 4,
    img: slider4,
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
  },
  {
    id: 5,
    img: slider5,
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
  },
  {
    id: 6,
    img: slider6,
    title: "Affordable Price For Car Servicing",
    subtitle:
      "There are many variations of passages of available, but the majority have suffered alteration in some form",
  },
];

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {sliders.map((slider) => (
          <SwiperSlide key={slider.id}>
            <div className="relative w-full">
              <img src={slider.img} alt="" />
              <div className="absolute top-0 bottom-0 right-0 left-0 lg:w-2/3 h-full  gradSlide text-white p-5 lg:p-20  text-center lg:text-left flex justify-center flex-col">
                <h2 className="text-3xl md:text-5xl lg:text-5xl xl:text-6xl font-bold lg:w-2/3">
                  {slider.title}
                </h2>
                <p className="my-7 lg:w-10/12">{slider.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-1 max-w-sm mx-auto lg:mx-0">
                  <Button>My Services</Button>
                  <Button color="dark">Contact Me</Button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
