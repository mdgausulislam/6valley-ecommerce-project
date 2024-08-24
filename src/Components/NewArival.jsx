import React from "react";
import ps5Image from "../assets/ps5-slim-goedkope-playstation_large 1.png";
import womanHatImage from "../assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import speakerImage from "../assets/Frame 707.png";
import perfumeImage from "../assets/Frame 706.png";
import { FaAngleRight } from "react-icons/fa";

function NewArival() {
  return (
    <div className="max-w-screen-xl lg:mx-auto mt-10 mx-2">
      <div className="flex items-center justify-between px-2 pt-5">
        <div>
          <h1 className="text-2xl uppercase font-bold text-purple-600">
            Top Sellers
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <button className="font-bold text-purple-600">View More</button>
          <FaAngleRight />
        </div>
      </div>
      <div className="py-4 mx-auto max-w-screen-xl sm:py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div
            className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col"
            style={{ height: "616px" }}
          >
            <a className="bg-black group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
              <img
                src={ps5Image}
                alt="PlayStation"
                className="absolute top-10 inset-0 h-[511px] w-[511px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <div className="z-10 text-white absolute bottom-8 left-10 p-4 space-y-4">
                <h3 className="text-2xl font-medium xs:text-xl md:text-2xl">
                  PlayStation
                </h3>
                <p className="text-white">
                  Black and White version of the PS5 <br />
                  coming out on s
                  <button className="flex flex-col pt-3">Shop Now</button>
                </p>
              </div>
            </a>
          </div>
          <div
            className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50"
            style={{ height: "616px" }}
          >
            <a className="h-[300px] bg-black group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
              <img
                src={womanHatImage}
                alt="Women’s Collections"
                className="absolute left-44 inset-0 h-[286px] w-[432px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
              <div className="z-10 text-white absolute bottom-5 left-10 p-4 space-y-3">
                <h3 className="text-2xl font-medium xs:text-xl md:text-2xl">
                  Women’s Collections
                </h3>
                <p className="text-white text-xs">
                  Black and White version of the PS5 <br />
                  coming out on s
                  <button className="flex flex-col pt-2 text-base">
                    Shop Now
                  </button>
                </p>
              </div>
            </a>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 h-[300px]">
              <a className="bg-black group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img
                  src={speakerImage}
                  alt="Speakers"
                  className="absolute top-10 left-10 inset-0 h-[222px] w-[210px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <div className="z-10 text-white absolute bottom-5 left-10 p-4 space-y-2">
                  <h3 className="text-2xl font-medium xs:text-xl md:text-2xl">
                    Speakers
                  </h3>
                  <p className="text-white text-xs">
                    Amazon wireless speakers
                    <button className="flex flex-col pt-2 text-base">
                      Shop Now
                    </button>
                  </p>
                </div>
              </a>
              <a className="bg-black group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                <img
                  src={perfumeImage}
                  alt="Perfume"
                  className="absolute top-10 left-10 inset-0 h-[222px] w-[210px] object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <div className="z-10 text-white absolute bottom-5 left-10 p-4 space-y-2">
                  <h3 className="text-2xl font-medium xs:text-xl md:text-2xl">
                    Perfume
                  </h3>
                  <p className="text-white text-xs">
                    GUCCI INTENSE OUD EDP
                    <button className="flex flex-col pt-2 text-base">
                      Shop Now
                    </button>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewArival;
