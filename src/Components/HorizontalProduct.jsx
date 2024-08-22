import React from "react";
import { FiEye } from "react-icons/fi";
import Ratings from "./Ratings"; // Import the Ratings component

function HorizontalProduct() {
  return (
    <div className="grid grid-cols-2 w-full h-full items-center justify-between bg-white overflow-hidden rounded-md group">
      <div className="m-3 rounded-md overflow-hidden group-hover:bg-[rgba(14,66,136,0.3)] transition-colors duration-300 cursor-pointer">
        <img
          src="https://media.e-valy.com/cms/products/images/93ca9538-f187-4a89-b7c3-bf93cd43d685?h=250&w=250"
          alt="Product"
          className="relative w-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <span className="absolute top-0 left-0 m-3 rounded-lg bg-purple-600 px-4 py-1 text-center text-sm font-medium text-white">
        39%
      </span>
      <span className="absolute top-16 right-[75%] transform translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-300 bg-white p-2 rounded-full cursor-pointer">
        <FiEye className="text-black" />
      </span>
      <div className="mr-2">
        <h1 className="text-gray-900 h-10 overflow-hidden text-sm text-ellipsis hover:text-red-500 cursor-pointer">
          Silicone Strap Analogue Sports Watch Rectangular Dial New Model 2023
          Men Watches
        </h1>

        <div className="flex items-center justify-center mt-2">
          <Ratings rating={5.0} starDimension="14px" starSpacing="2px" />
          <span className="ml-2 rounded bg-purple-600 text-white fo px-2.5 py-0.5 text-xs font-bold">
            5.0
          </span>
        </div>

        <div className="flex items-center mt-2 justify-center">
          <span className="text-lg font-semibold text-gray-900">$250</span>
          <span className="text-sm font-medium text-gray-500 line-through ml-4">
            $350
          </span>
        </div>
      </div>
    </div>
  );
}

export default HorizontalProduct;
