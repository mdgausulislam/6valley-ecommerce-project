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

function CategoriesProduct() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto bg-white shadow-lg mt-5">
        <div className="flex items-center justify-between px-2 pt-5">
          <div>
            <h1 className="text-2xl uppercase font-bold text-purple-600">
              Categories Products
            </h1>
          </div>
          <div className="flex items-center justify-between">
            <button className="font-bold text-purple-600">View More</button>
            <FaAngleRight />
          </div>
        </div>
        <Swiper
          slidesPerView={8}
          spaceBetween={30}
          loop={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper py-5"
        >
          <SwiperSlide>
            <div className="w-52">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-648820557a5a9.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-52">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-6488211a870e0.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-52">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64882013626e6.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-52">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881fc8d29c5.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-52">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-64881f86528da.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-52">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-648820557a5a9.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-52">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-648820557a5a9.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-52">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-648820557a5a9.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-52">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-648820557a5a9.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-52 shadow-lg">
              <img
                src="https://6valley.6amtech.com/storage/app/public/category/2023-06-13-648820557a5a9.png"
                alt=""
                className="hover:scale-110 transition-transform duration-300"
              />
              <p className="hover:text-red-600 text-base">Mens Fashion</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CategoriesProduct;
