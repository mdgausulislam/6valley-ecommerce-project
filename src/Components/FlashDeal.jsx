import React, { useState, useEffect } from "react";
import { FaAngleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
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
    <div className="max-w-screen-xl mx-auto bg-purple-100 mt-6">
      <div className="flex items-center justify-between px-2 lg:px-5 pt-5">
        <div>
          <h1 className="text-xl uppercase font-bold text-purple-600">
            Flash Deal
          </h1>
          <p className="text-purple-600 text-xs lg:text-base">
            Hurry Up! The offer is limited. Grab while it lasts
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button className="font-bold text-purple-600">View More</button>
          <FaAngleRight />
        </div>
      </div>
      <div className="flex items-center px-2 lg:px-5 py-5 flex-col lg:flex-row">
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max bg-purple-600 p-6 rounded-md">
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
          spaceBetween={30}
          loop={false}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper ml-0 lg:ml-10 mt-5 lg:mt-0 w-full"
          breakpoints={{
            320: {
              slidesPerView: 2, // Show 1 slide on small screens
            },
            640: {
              slidesPerView: 2, // Show 2 slides on medium screens
            },
            768: {
              slidesPerView: 3, // Show 3 slides on tablets
            },
            1024: {
              slidesPerView: 4, // Show 4 slides on large screens
            },
          }}
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide className="rounded-lg shadow-md" key={index}>
              <ProductCard id={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default FlashDeal;
