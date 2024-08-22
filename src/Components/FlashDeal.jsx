import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Navigation } from "swiper/modules";

function FlashDeal() {
  const [counter, setCounter] = useState(59);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 59));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto bg-purple-100 mt-5">
      <div className="flex items-center justify-between px-5 pt-5">
        <div>
          <h1 className="text-2xl uppercase font-bold text-purple-600">
            Flash Deal
          </h1>
          <p className="text-purple-600">
            Hurry Up ! The offer is limited. Grab while it lasts
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="font-bold text-purple-600">View More</button>
          <FaAngleRight />
        </div>
      </div>
      <div className="flex items-center px-5 py-5">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max bg-purple-600 p-6">
          <div className="flex flex-col p-2 box-timer">
            <span className="countdown text-4xl">
              <span style={{ "--value": 15 }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 box-timer">
            <span className="countdown text-4xl">
              <span style={{ "--value": 10 }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 box-timer">
            <span className="countdown text-4xl">
              <span style={{ "--value": 24 }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 box-timer">
            <span className="countdown text-4xl">
              <span style={{ "--value": counter }}></span>
            </span>
            sec
          </div>
        </div>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper ml-10"
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default FlashDeal;
