import React, { useState } from "react";
import { TbSortAscending2 } from "react-icons/tb";
import { FaFilter } from "react-icons/fa";
import { IoIosClose } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import ProductCard from "./ProductCard";

function FilterProduct() {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <div className="flex items-center justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-1 lg:px-5 py-5">
        <div>
          <h1 className="text-base lg:text-xl text-purple-600 font-bold whitespace-nowrap">
            Category Products (Clothing)
          </h1>
          <p>4 Items found</p>
        </div>
        <div className="relative inline-block w-full max-w-xs ml-3">
          <div className="relative hidden lg:block">
            <select className="appearance-none select select-primary w-full pl-10 pr-8 py-2 rounded-md bg-white border border-gray-300 focus:border-none focus:outline-offset-0">
              <option disabled selected>
                Short By Latest
              </option>
              <option>Game of Thrones</option>
              <option>Lost</option>
              <option>Breaking Bad</option>
              <option>Walking Dead</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
              <TbSortAscending2 className="text-gray-500" />
            </div>
          </div>
          <div className="drawer-content flex items-center justify-end">
            {/* Page content here */}
            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              <FaFilter />
            </label>
          </div>
        </div>
      </div>

      <div className="drawer lg:drawer-open h-full">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mt-3 ml-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
          {/* Page content here */}
          <div className="grid grid-cols-2 lg:grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
        <div className="drawer-side shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] mt-3 h-auto z-50">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <div className="menu bg-white text-base-content w-80 p-4 z-50 h-full">
            {/* Sidebar content here */}
            <button className="absolute block lg:hidden right-5 top-3 bg-gray-500 hover:bg-gray-950 text-white px-2 py-1 rounded cursor-pointer">
              <IoIosClose className="text-2xl" />
            </button>
            <h1 className="text-2xl text-purple-600 font-semibold text-center py-5">
              Filter
            </h1>
            <div className="relative">
              <select className="appearance-none select select-primary w-full pl-3 pr-8 py-2 rounded-md bg-white border border-gray-300 focus:border-none focus:outline-offset-0">
                <option disabled selected>
                  Choose
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            <div className="relative py-5">
              <select className="appearance-none select select-secondary w-full pl-3 pr-8 py-2 rounded-md bg-white border border-gray-300 focus:border-none focus:outline-offset-0">
                <option disabled selected>
                  Latest
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>

            <div>
              <span className="flex items-center  justify-center text-2xl text-purple-600 font-semibold">
                Price
              </span>
              <div className="flex justify-between items-center mt-5">
                <input
                  type="text"
                  placeholder="0"
                  className="input input-bordered w-full max-w-xs focus:border-none focus:outline-offset-0"
                />
                <span className="px-5 text-xl">To</span>
                <input
                  type="text"
                  placeholder="100"
                  className="input input-bordered w-full max-w-xs focus:border-none focus:outline-offset-0"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="input input-bordered flex items-center gap-2">
                <input
                  type="text"
                  className="grow focus:shadow-none focus:border-none focus:outline-none focus:outline-offset-0"
                  placeholder="Search"
                />
                <IoIosSearch className="cursor-pointer text-2xl" />
              </label>
            </div>
            <div className="h-52 overflow-auto mt-5 custom-scroll">
              <div className="mx-2 space-y-3">
                <div className="flex justify-between items-center">
                  <h1>Digital Product</h1>
                  <p className="bg-base-300 p-2 rounded-md">11</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Digital Product</h1>
                  <p className="bg-base-300 p-2 rounded-md">11</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Digital Product</h1>
                  <p className="bg-base-300 p-2 rounded-md">11</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Digital Product</h1>
                  <p className="bg-base-300 p-2 rounded-md">11</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Digital Product</h1>
                  <p className="bg-base-300 p-2 rounded-md">11</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Digital Product</h1>
                  <p className="bg-base-300 p-2 rounded-md">11</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Digital Product</h1>
                  <p className="bg-base-300 p-2 rounded-md">11</p>
                </div>
                <div className="flex justify-between items-center">
                  <h1>Digital Product</h1>
                  <p className="bg-base-300 p-2 rounded-md">11</p>
                </div>
              </div>
            </div>

            <div className="mt-5 overflow-hidden">
              <span className="flex items-center justify-center text-2xl text-purple-600 font-semibold">
                Categories
              </span>
              <div className="space-y-5 mt-5">
                <div className="flex justify-between items-center">
                  <h1>Men's fashion</h1>
                  <FaAngleRight />
                </div>
                <div className="flex justify-between items-center">
                  <h1>Home Improvement & Tools</h1>
                  <FaAngleRight />
                </div>
                <div className="flex justify-between items-center">
                  <h1>Outdoor Fun & Sports</h1>
                  <FaAngleRight />
                </div>
                <div className="flex justify-between items-center">
                  <h1>Women's fashion</h1>
                  <FaAngleRight />
                </div>
                <div className="flex justify-between items-center">
                  <h1>ebook</h1>
                  <FaAngleRight />
                </div>
                <div className="flex justify-between items-center">
                  <h1>Jewelry & Watches</h1>
                  <FaAngleRight />
                </div>
                <div className="flex justify-between items-center">
                  <h1>Toys , Kids & Babies</h1>
                  <FaAngleRight />
                </div>
                <div className="flex justify-between items-center">
                  <h1>Beauty, Health & Hair</h1>
                  <FaAngleRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
