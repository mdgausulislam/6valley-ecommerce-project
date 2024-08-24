import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";
import { Navigation } from "swiper/modules";
import TopSellersCard from "./TopSellersCard";

function TopSellers() {
  return (
    <div className="max-w-screen-xl mx-auto shadow-lg mt-5">
      <div className="flex items-center justify-between px-2 py-5">
        <div>
          <h1 className="text-xl uppercase font-bold text-purple-600">
            Top Sellers
          </h1>
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
        observer={true}
        observeParents={true}
        modules={[Navigation]}
        className="mySwiper py-10 px-2 pt-5"
        breakpoints={{
          640: {
            slidesPerView: 2, // For medium devices, 2 slides per view
          },
          1024: {
            slidesPerView: 4, // For large devices, 4 slides per view
          },
        }}
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index} className="rounded-lg shadow-sm border-2">
            <TopSellersCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopSellers;
