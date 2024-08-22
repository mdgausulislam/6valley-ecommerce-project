import React from "react";
import { FiEye } from "react-icons/fi";
import Ratings from "./Ratings";

function ProductCard() {
  return (
    <div className="w-full lg:w-[200px] h-full lg:h-[320px] bg-white overflow-hidden rounded-md relative group">
      <div className="relative m-3 rounded-md overflow-hidden group-hover:bg-[rgba(14,66,136,0.3)] transition-colors duration-300 cursor-pointer">
        <img
          src="https://media.e-valy.com/cms/products/images/93ca9538-f187-4a89-b7c3-bf93cd43d685?h=250&w=250"
          alt="Product"
          className="w-full group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      <span className="absolute top-0 left-0 m-3 rounded-lg bg-purple-600 px-4 py-1 text-center text-sm font-medium text-white">
        39%
      </span>
      <span className="absolute top-[25%] right-[50%] transform translate-x-1/2 group-hover:opacity-100 opacity-0 transition-opacity duration-300 bg-white p-2 rounded-full cursor-pointer">
        <FiEye />
      </span>
      <div className="px-4 pt-2 text-center pb-5">
        <h1 className="text-base font-medium text-gray-900 overflow-hidden whitespace-nowrap text-ellipsis hover:text-red-500 cursor-pointer">
          Silicone Strap Analogue Sports Watch Rectangular Dial New Model 2023
          Men Watches
        </h1>
        <div className="flex items-center mt-2 justify-center">
          <span className="text-lg font-semibold text-gray-900">$250</span>
          <span className="text-sm font-medium text-gray-500 line-through ml-4">
            $350
          </span>
        </div>
        <div className="mt-2">
          <Ratings rating={4.5} starDimension="20px" starSpacing="5px" />
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
