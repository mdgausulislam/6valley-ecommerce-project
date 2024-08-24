import React from "react";
import { TbSortAscending2 } from "react-icons/tb";

function FilterProduct() {
  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <div className="flex items-center justify-between shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] px-5 py-5">
        <div>
          <h1 className="text-xl text-purple-600 font-bold">
            Category Products (Clothing)
          </h1>
          <p>4 Items found</p>
        </div>
        <div className="relative inline-block w-full max-w-xs">
          <div className="relative">
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
        </div>
      </div>
    </div>
  );
}

export default FilterProduct;
