import React from "react";
import ProductCard from "./ProductCard";
import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Navigation } from "swiper/modules";

function FeatureProducts() {
  return (
    <div className="max-w-screen-xl mx-auto bg-white shadow-lg mt-5 px-2">
      <div className="flex items-center justify-between pt-5">
        <div>
          <h1 className="text-2xl uppercase font-bold text-purple-600">
            Featured Products
          </h1>
          <p className="text-purple-600 text-xs lg:text-base">
            Hurry Up ! The offer is limited. Grab while it lasts
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
        className="mySwiper py-5"
        breakpoints={{
          320: {
            slidesPerView: 2, // For small devices, 1 slide per view
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
          1280: {
            slidesPerView: 6, // For extra large devices, 6 slides per view
          },
        }}
      >
        {[...Array(7)].map((_, index) => (
          <SwiperSlide key={index}>
            <ProductCard id={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeatureProducts;
