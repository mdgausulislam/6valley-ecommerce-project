import React from "react";
import HorizontalProduct from "./HorizontalProduct";
import { FaAngleRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Navigation } from "swiper/modules";

function FeaturedDeal() {
  return (
    <div className="max-w-screen-xl mx-auto bg-purple-100 mt-5">
      <div className="flex items-center justify-between px-2 pt-5">
        <div>
          <h1 className="text-2xl uppercase font-bold text-purple-600">
            Featured Products
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <button className="font-bold text-purple-600">View More</button>
          <FaAngleRight />
        </div>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper py-10 px-2"
      >
        <SwiperSlide>
          <HorizontalProduct />
        </SwiperSlide>
        <SwiperSlide>
          <HorizontalProduct />
        </SwiperSlide>
        <SwiperSlide>
          <HorizontalProduct />
        </SwiperSlide>
        <SwiperSlide>
          <HorizontalProduct />
        </SwiperSlide>
        <SwiperSlide>
          <HorizontalProduct />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FeaturedDeal;
