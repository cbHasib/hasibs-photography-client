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

import slider1 from "../../../assets/images/banner/product.jpg";
import slider2 from "../../../assets/images/banner/corporate.jpg";
import slider3 from "../../../assets/images/banner/wedding.jpg";
import slider4 from "../../../assets/images/banner/interior.jpg";
import slider5 from "../../../assets/images/banner/industrial.jpg";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

const sliders = [
  {
    id: 1,
    img: slider1,
    title: "Product Photography",
    subtitle:
      "Though product photography sounds all simple but it's tricky and challenging. There is a difference between capturing a photo of human beings and products.",
  },
  {
    id: 2,
    img: slider2,
    title: "Corporate Photography",
    subtitle:
      "You will have some fresh corporate ideas from Hasib's photography.",
  },
  {
    id: 3,
    img: slider3,
    title: "Wedding Photography",
    subtitle:
      "Hasib has been successfully covering wedding events as well with his photography creativity to make the day special for couples.",
  },
  {
    id: 4,
    img: slider4,
    title: "Interior Photography",
    subtitle:
      "Each type of photography requires different skills and levels of dedication. Because you have to put more time and effort while doing post-production photography.",
  },
  {
    id: 5,
    img: slider5,
    title: "Industrial Photography",
    subtitle:
      "Only photographers like hasibul Hasan can come up with an innovative camera angle even while taking photos of the machine and working people.",
  },
];

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        cssMode={true}
        autoplay={{
          delay: 4000,
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
                  <Button onClick={() => navigate("/services")}>
                    My Services
                  </Button>
                  <Button color="dark" onClick={() => navigate("/contact")}>
                    Contact Me
                  </Button>
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
