import React from "react";
import { FaStar } from "react-icons/fa";

function TopSellersCard() {
  return (
    <div className="w-full bg-white rounded-md overflow-hidden cursor-pointer hover:shadow-lg">
      <div className="relative">
        <img
          src="https://6valley.6amtech.com/storage/app/public/shop/banner/2023-06-14-648875dbee846.png"
          alt=""
          className="w-full hover:scale-105 transition-transform duration-300 overflow-hidden"
        />

        <div className="absolute -bottom-16 flex items-center justify-between ml-5">
          <div className="w-20 bg-white rounded-full flex items-center justify-center p-1">
            <img
              src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f6e190f4c.png"
              alt=""
              className="rounded-full w-28 hover:scale-110 transition-transform duration-300"
            />
          </div>
          <div className="ml-5 pt-5">
            <h5 className="text-lg hover:text-purple-600 font-bold">Wellness Fair</h5>
            <p>4.5 ratings</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-20 px-2 py-5">
        <p className="bg-slate-200 py-1 px-6 rounded-md">
          5<span className="pl-3">review</span>
        </p>
        <p className="bg-slate-200 py-1 px-6 rounded-md">
          9<span className="pl-3">Products</span>
        </p>
      </div>
    </div>
  );
}

export default TopSellersCard;
