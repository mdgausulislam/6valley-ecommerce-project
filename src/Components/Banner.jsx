import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
function Banner() {
  return (
    <div className="max-w-screen-xl mx-auto flex h-80">
      <div className="w-72 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
        <ul className="space-y-3 px-3 mt-3">
          <li className="hover:bg-base-300 px-3 py-1 rounded-md cursor-pointer">
            Men's fashion
          </li>
          <li className="hover:bg-base-300 px-3 py-1 rounded-md cursor-pointer">
            Home Improvement & Tools
          </li>
          <li className="hover:bg-base-300 px-3 py-1 rounded-md cursor-pointer">
            Outdoor Fun & Sports
          </li>
          <li className="hover:bg-base-300 px-3 py-1 rounded-md cursor-pointer">
            Women's fashion
          </li>
          <li className="hover:bg-base-300 px-3 py-1 rounded-md cursor-pointer">
            ebook
          </li>
          <li className="hover:bg-base-300 px-3 py-1 rounded-md cursor-pointer">
            Jewelry & Watches
          </li>
          <li className="hover:bg-base-300 px-3 py-1 rounded-md cursor-pointer">
            Toys , Kids & Babies
          </li>
        </ul>
      </div>
      <div className="ml-3 w-[76.5%]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper flex items-end justify-end"
        >
          <SwiperSlide>
            <img
              src="https://img.lazcdn.com/us/domino/236fe735-9ea0-421a-b791-9608f2279c83_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.lazcdn.com/us/domino/35e2967e-d8df-44ec-b852-c42f51b44858_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.lazcdn.com/us/domino/930d2f24-d7cb-4132-8245-1791af9c30ae_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://img.lazcdn.com/us/domino/7ea5a946-8a4b-4c8e-b661-dcbd38d61803_BD-1976-688.jpg_2200x2200q80.jpg_.webp"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Banner;
