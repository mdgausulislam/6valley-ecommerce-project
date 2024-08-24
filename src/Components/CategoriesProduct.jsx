import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";
import { Navigation } from "swiper/modules";

function CategoriesProduct() {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto bg-white shadow-lg mt-5 px-2">
        <div className="flex items-center justify-between pt-5">
          <div>
            <h1 className="text-xl uppercase font-bold text-purple-600">
              Categories Products
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
          modules={[Navigation]}
          className="mySwiper py-5"
          breakpoints={{
            320: {
              slidesPerView: 3, // For small devices
            },
            640: {
              slidesPerView: 3, // For medium devices
            },
            768: {
              slidesPerView: 5, // For tablets
            },
            1024: {
              slidesPerView: 6, // For large devices
            },
            1280: {
              slidesPerView: 8, // For extra-large devices
            },
          }}
        >
          {[...Array(10)].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="w-52">
                <img
                  src={`https://6valley.6amtech.com/storage/app/public/category/2023-06-13-648820557a5a9.png`}
                  alt="Mens Fashion"
                  className="hover:scale-110 transition-transform duration-300"
                />
                <p className="hover:text-red-600 text-base">Mens Fashion</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default CategoriesProduct;
