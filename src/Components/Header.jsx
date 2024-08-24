import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { CiHeart, CiUser } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { FaXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const navigate = useNavigate();

  const handleSignupClick = () => {
    navigate("/signup");
  };
  const handleSigninClick = () => {
    navigate("/signin");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header>
      <div className="navbar max-w-screen-xl mx-auto bg-purple-100 grid grid-cols-3 items-center">
        <div className="flex justify-start">
          <div className="lg:hidden">
            <button
              onClick={toggleDrawer}
              role="button"
              className="flex items-center text-black px-4 py-3 rounded-md hover:bg-gray-200 mr-2 cursor-pointer"
            >
              <FiMenu />
            </button>
          </div>
          <button onClick={handleLogoClick} className="text-xl">
            <img
              src="https://6valley.6amtech.com/storage/app/public/company/2023-06-13-648845d83c293.png"
              alt="Company Logo"
              className="w-52 cursor-pointer"
            />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="pt-2 relative text-gray-600 hidden lg:flex w-full max-w-lg">
            <input
              className="border-2 w-full border-gray-300 bg-white h-12 px-5 rounded-lg text-sm focus:outline-none"
              type="search"
              name="search"
              placeholder="Search for items..."
            />
            <button
              type="submit"
              className="absolute right-0 bg-purple-600 h-12 w-14 rounded-e-md"
            >
              <IoSearch className="text-white text-2xl ml-4" />
            </button>
          </div>
        </div>
        <div className="flex justify-end gap-3 mr-3 lg:mr-0">
          <div className="bg-purple-50 p-3 rounded-full hidden lg:block cursor-pointer">
            <CiHeart className="text-base lg:text-lg text-purple-500" />
          </div>
          <div className="relative group">
            <div className="cursor-pointer bg-purple-50 p-3 rounded-full hidden lg:block group-hover:bg-purple-100 transition-all">
              <CiUser className="text-base lg:text-lg text-purple-500 group-hover:text-purple-600" />
            </div>
            <div className="absolute right-0 mt-1 z-10 hidden group-hover:block bg-white shadow-lg rounded-lg w-48 border border-gray-200 duration-700 transition-all ease-in-out">
              <ul className="p-2 max-h-auto overflow-y-auto duration-700 transition-all ease-in-out space-y-2">
                <li
                  onClick={handleSigninClick}
                  className="flex items-center space-x-2 border-b border-gray-200 py-2 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer pl-2"
                >
                  Signin
                </li>
                <li
                  onClick={handleSignupClick}
                  className="flex items-center space-x-2 border-b border-gray-200 py-2 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer pl-2"
                >
                  Signup
                </li>
                <li className="flex items-center space-x-2 border-b border-gray-200 py-2 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer pl-2">
                  LogOut
                </li>
              </ul>
            </div>
          </div>
          <div className="relative group">
            <div className="bg-purple-50 p-3 rounded-full cursor-pointer group-hover:bg-purple-100 duration-700 transition-all ease-in-out relative">
              <FiShoppingCart className="text-base lg:text-lg text-purple-500 group-hover:text-purple-600" />
              <span className="absolute bg-red-500 text-white text-sm px-[6px] py-[3px] -top-2 -right-1 rounded-full">
                0
              </span>
            </div>

            <div className="absolute right-0 z-10 mt-1 hidden group-hover:block bg-white shadow-lg rounded-lg w-80 border border-gray-200 duration-700 transition-all ease-in-out">
              <ul className="p-2 max-h-auto overflow-y-auto duration-700 transition-all ease-in-out">
                <li className="flex items-center space-x-2 border-b border-gray-200 py-2 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer">
                  <img
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64884610598d4.png"
                    alt="Product 1"
                    className="w-16 h-16 object-cover rounded ml-5 shadow-sm"
                  />
                  <div className="flex-1 pl-10">
                    <p className="text-sm font-medium text-gray-800">
                      Product Name 1
                    </p>
                    <p className="text-sm text-gray-500">$19.99</p>
                    <p className="text-sm text-purple-600">Quantity: 1</p>
                  </div>
                </li>
                <li className="flex items-center space-x-2 border-b border-gray-200 py-2 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer">
                  <img
                    src="https://6valley.6amtech.com/storage/app/public/product/thumbnail/2023-06-13-64884610598d4.png"
                    alt="Product 1"
                    className="w-16 h-16 object-cover rounded ml-5 shadow-sm"
                  />
                  <div className="flex-1 pl-10">
                    <p className="text-sm font-medium text-gray-800">
                      Product Name 1
                    </p>
                    <p className="text-sm text-gray-500">$19.99</p>
                    <p className="text-sm text-purple-600">Quantity: 1</p>
                  </div>
                </li>

                <li className="text-center py-2">
                  <button className="text-white bg-purple-600 px-10 py-3 rounded-md cursor-pointer">
                    View More
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        id="drawer"
        className={`fixed inset-y-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <button
            onClick={toggleDrawer}
            className="absolute right-5 top-10 bg-gray-500 hover:bg-gray-950 text-white px-2 py-1 rounded cursor-pointer"
          >
            <FaXmark />
          </button>
          <ul className="mt-16">
            <li className="py-2 px-4 hover:bg-gray-200 rounded-md">
              <a href="#">Category</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 rounded-md">
              <a href="#">Home</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 rounded-md">
              <a href="#">Brand</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 rounded-md">
              <a href="#">Discount Products</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 rounded-md">
              <a href="#">All Vendors</a>
            </li>
            <li className="py-2 px-4 hover:bg-gray-200 rounded-md">
              <a href="#">Vendor Zone</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
