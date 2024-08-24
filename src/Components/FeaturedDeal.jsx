import React from "react";
import HorizontalProduct from "./HorizontalProduct";
import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Navigation } from "swiper/modules";

function FeaturedDeal() {
  return (
    <div className="max-w-screen-xl mx-auto bg-purple-100 mt-5">
      <div className="flex items-center justify-between px-2 pt-5">
        <div>
          <h1 className="text-xl uppercase font-bold text-purple-600">
            Featured Deals
          </h1>
          <p className="text-purple-600 text-xs lg:text-base">
            See the latest deals and exciting new offers!
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="font-bold text-purple-600">View More</button>
          <FaAngleRight />
        </div>
      </div>
      <Swiper
        spaceBetween={30}
        loop={false}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper py-10 px-2"
        breakpoints={{
          320: {
            slidesPerView: 1, // For small devices, 1 slide per view
          },
          640: {
            slidesPerView: 2, // For medium devices, 2 slides per view
          },
          768: {
            slidesPerView: 3, // For tablets, 3 slides per view
          },
          1024: {
            slidesPerView: 4, // For large devices, 4 slides per view
          },
        }}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className="rounded-lg shadow-md">
            <HorizontalProduct />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeaturedDeal;
