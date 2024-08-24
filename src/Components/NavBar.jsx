import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { FiGrid } from "react-icons/fi";
import { FaAngleLeft } from "react-icons/fa";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (event) => {
    if (!event.target.closest(".dropdown")) {
      setIsDropdownOpen(false);
    }
  };

  document.addEventListener("click", closeDropdown);

  return (
    <nav className="bg-purple-600 hidden lg:block">
      <ul className="max-w-screen-xl mx-auto flex items-center justify-between text-base text-white h-16">
        <li
          className="dropdown relative w-72 bg-white text-black h-10 cursor-pointer flex items-center justify-center"
          onClick={toggleDropdown}
        >
          <a href="#" className="flex items-center justify-between">
            <FiGrid className="mr-10" />
            <h1> Category</h1>
            <FaAngleDown className="ml-10" />
          </a>
          {isDropdownOpen && (
            <ul className="absolute z-10 top-[52px] left-0 w-72 bg-white text-black shadow-md rounded-md h-[352px]">
              <li className="px-3 py-1 hover:bg-base-300 flex items-center justify-between mx-2 rounded-md my-2 relative group">
                Men's fashion
                <FaAngleLeft />
                <ul className="invisible absolute z-50 flex w-full flex-col bg-white py-1 px-4 text-gray-800 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] group-hover:visible left-72 -top-[7px] h-[352px] mt-[3px]duration-700 transition-all ease-in-out">
                  <li className="px-3 py-1 hover:bg-base-300 rounded-md">
                    Menu Item 1
                  </li>
                  <li className="px-3 py-1 hover:bg-base-300 rounded-md">
                    Menu Item 2
                  </li>
                  <li className="px-3 py-1 hover:bg-base-300 rounded-md">
                    Menu Item 3
                  </li>
                </ul>
              </li>
              <li className="px-3 py-1 hover:bg-base-300 flex items-center justify-between mx-2 rounded-md my-2">
                Home Improvement & Tools
                <FaAngleLeft />
              </li>
              <li className="px-3 py-1 hover:bg-base-300 flex items-center justify-between mx-2 rounded-md my-2">
                Outdoor Fun & Sports
                <FaAngleLeft />
              </li>
              <li className="px-3 py-1 hover:bg-base-300 flex items-center justify-between mx-2 rounded-md my-2">
                Women's fashion
                <FaAngleLeft />
              </li>
              <li className="px-3 py-1 hover:bg-base-300 flex items-center justify-between mx-2 rounded-md my-2">
                ebook
                <FaAngleLeft />
              </li>
              <li className="px-3 py-1 hover:bg-base-300 flex items-center justify-between mx-2 rounded-md my-2">
                Jewelry & Watches
                <FaAngleLeft />
              </li>
              <li className="px-3 py-1 hover:bg-base-300 flex items-center justify-between mx-2 rounded-md my-2">
                Toys , Kids & Babies
                <FaAngleLeft />
              </li>
            </ul>
          )}
        </li>
        <li className="hover:bg-purple-400 px-4 py-3 rounded-md">
          <a href="#">Home</a>
        </li>
        <li className="hover:bg-purple-400 px-4 py-3 rounded-md">
          <a href="#">Brand</a>
        </li>
        <li className="hover:bg-purple-400 px-4 py-3 rounded-md">
          <a href="#">Discount Products</a>
        </li>
        <li className="hover:bg-purple-400 px-4 py-3 rounded-md">
          <a href="#">All Vendors</a>
        </li>
        <li className="hover:bg-purple-400 px-4 py-3 rounded-md">
          <a href="#">Vendor Zone</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
