import React from "react";
import ProductCard from "./ProductCard";
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

function FeatureProducts() {
  return (
    <div className="max-w-screen-xl mx-auto bg-white shadow-lg mt-5">
      <div className="flex items-center justify-between px-2 pt-5">
        <div>
          <h1 className="text-2xl uppercase font-bold text-purple-600">
            Featured Products
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
      <Swiper
        slidesPerView={6}
        spaceBetween={30}
        loop={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper py-5"
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
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
        <SwiperSlide>
          <ProductCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default FeatureProducts;
