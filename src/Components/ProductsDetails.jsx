import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ProductImg from "../assets/ProductsDetails/image 63.png";
import ProductImg1 from "../assets/ProductsDetails/image 57.png";
import ProductImg2 from "../assets/ProductsDetails/image 58.png";
import ProductImg3 from "../assets/ProductsDetails/image 59.png";
import ProductImg4 from "../assets/ProductsDetails/image 61.png";
import { CiHeart } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import Ratings from "./Ratings";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdAssignmentReturned } from "react-icons/md";
import { CiBookmarkRemove } from "react-icons/ci";
import { IoIosChatboxes } from "react-icons/io";

import "./Banner.css";

function ProductsDetails() {
  const [quantity, setQuantity] = useState(1);
  const [largeImage, setLargeImage] = useState(ProductImg);
  const [activeImage, setActiveImage] = useState(ProductImg);
  const [value, setValue] = useState("1");

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + delta, 1));
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleImageClick = (image) => {
    setLargeImage(image); // Update large image on click
    setActiveImage(image); // Update the active image state
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-5 p-5 shadow-xl">
      <div className="flex flex-col lg:flex-row justify-between gap-10 py-10">
        {/* Left side */}
        <div className="flex flex-col-reverse">
          {/* Small img */}
          <div className="flex flex-row space-y-5 gap-3">
            {[ProductImg1, ProductImg2, ProductImg3, ProductImg4].map(
              (img, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(img)}
                  className={`bg-[#F5F5F5] w-full h-28 flex items-center justify-center rounded-md mt-5 cursor-pointer ${
                    activeImage === img ? "border-2 border-purple-600" : ""
                  }`}
                >
                  <img src={img} alt={`Small img ${index + 1}`} />
                </div>
              )
            )}
          </div>

          {/* Large image */}
          <div className="w-full lg:w-[400px] h-full lg:h-[400px] bg-[#F5F5F5] flex items-center justify-center rounded-lg zoom-container">
            <img
              src={largeImage} // Display the large image based on state
              alt="Large img"
              className="w-[300px] h-[220px] zoom-image"
            />
          </div>
        </div>

        {/* Right side */}
        <div className="">
          <h3 className="text-center font-bold text-xl">
            Havic HV G-92 Gamepad
          </h3>
          <div className="flex items-center justify-center space-x-1 space-y-3">
            <Ratings rating={4.5} starDimension="20px" starSpacing="2px" />
            <span className="pl-3 text-base font-semibold border-r border-black pr-3">
              (150 reviews)
            </span>
            <span className="text-base text-green-500 pl-3 font-bold">
              In Stock
            </span>
          </div>

          <h5 className="font-bold space-y-3 text-center">
            $140 <del className="pl-5">$170</del>
          </h5>
          <p>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <hr className="bg-black h-[1px] mt-5" />

          <div className="pt-5 flex items-center gap-10">
            <h1 className="text-[20px]">Colors:</h1>
            <div className="flex items-center space-x-3">
              <button className="w-7 h-7 rounded-full bg-gray-800 dark:bg-gray-200 hover:border-4 hover:border-purple-600"></button>
              <button className="w-7 h-7 rounded-full bg-red-500 dark:bg-red-700 hover:border-4 hover:border-purple-600"></button>
              <button className="w-7 h-7 rounded-full bg-blue-500 dark:bg-blue-700 hover:border-4 hover:border-purple-600"></button>
              <button className="w-7 h-7 rounded-full bg-yellow-500 dark:bg-yellow-700 hover:border-4 hover:border-purple-600"></button>
            </div>
          </div>

          <div className="mb-4 flex items-center gap-5 mt-5">
            <span className="font-semibold text-[20px] text-gray-700 dark:text-gray-300">
              Size:
            </span>
            <div className="flex items-center space-x-3">
              <button className="w-10 h-10 border border-black bg-white text-black text-base rounded-[4px] font-bold hover:bg-purple-600 hover:text-white hover:border-none">
                XS
              </button>
              <button className="w-10 h-10 border border-black bg-white text-black text-base rounded-[4px] font-bold hover:bg-purple-600 hover:text-white hover:border-none">
                S
              </button>
              <button className="w-10 h-10 border border-black bg-white text-black text-base rounded-[4px] font-bold hover:bg-purple-600 hover:text-white hover:border-none">
                M
              </button>
              <button className="w-10 h-10 border border-black bg-white text-black text-base rounded-[4px] font-bold hover:bg-purple-600 hover:text-white hover:border-none">
                L
              </button>
              <button className="w-10 h-10 border border-black bg-white text-black text-base rounded-[4px] font-bold hover:bg-purple-600 hover:text-white hover:border-none">
                XL
              </button>
            </div>
          </div>
          <div className="mb-4 flex items-center gap-5 mt-5">
            <span className="font-semibold text-[20px] text-gray-700 dark:text-gray-300">
              Quantity:
            </span>
            <div className="flex justify-between items-center">
              <button
                className="group border border-gray-400 w-12 h-10 hover:bg-[#f2f2f2] rounded-md"
                onClick={() => handleQuantityChange(-1)}
              >
                <FiMinus className="text-[#B1B1B1] text-xl mx-auto group-hover:text-[#333]" />
              </button>
              <input
                type="text"
                readOnly
                className="w-12 h-10 text-center border border-gray-400 rounded-md"
                value={quantity}
              />
              <button
                className="group border border-gray-400 w-12 h-10 hover:bg-[#f2f2f2] rounded-md"
                onClick={() => handleQuantityChange(1)}
              >
                <GoPlus className="text-[#B1B1B1] text-xl mx-auto group-hover:text-[#333]" />
              </button>
            </div>
          </div>
          <div className="flex space-x-5 mt-4">
            <button className="text-white bg-[#E5261E] px-5 py-2 rounded-md hover:bg-[#C9221B]">
              Buy now
            </button>
            <button className="text-[#5C5C5C] bg-white border border-purple-600 px-5 py-2 rounded-md hover:bg-purple-600 hover:text-white font-bold">
              Add to cart
            </button>
            <button className="text-gray-600 border border-purple-600 hover:text-white hover:bg-purple-600 p-4 rounded-md">
              <CiHeart />
            </button>
          </div>
        </div>

        <div className="">
          <div className="p-5 rounded-md border">
            <ul className="space-y-8 p-2">
              <li className="flex items-center whitespace-nowrap">
                <FaCarSide className="mr-4" />
                Fast Delivery all across the country
              </li>
              <li className="flex items-center whitespace-nowrap">
                <MdOutlineHealthAndSafety className="mr-4" /> Safe Payment
              </li>
              <li className="flex items-center whitespace-nowrap">
                <MdAssignmentReturned className="mr-4" /> 7 Days Return Policy
              </li>
              <li className="flex items-center whitespace-nowrap">
                <CiBookmarkRemove className="mr-4" /> 100% Authentic Products
              </li>
            </ul>
          </div>
          <div className="p-5 rounded-md border mt-5">
            <div className="flex items-center">
              <img
                src="https://6valley.6amtech.com/storage/app/public/shop/2022-04-21-6260f790349f7.png"
                alt=""
                className="rounded-full w-20 mr-5"
              />
              <div>
                <h1 className="text-lg text-purple-600">Deluxe Online</h1>
                <p className="hover:text-red-300">Vendor info</p>
              </div>
            </div>

            <div className="flex justify-between items-center mt-5 gap-5">
              <div className="flex flex-col items-center justify-center bg-base-300 px-8 py-2 rounded-md">
                <img
                  src="https://6valley.6amtech.com/public/assets/front-end/img/rating.svg"
                  alt=""
                />
                <span>9 reviews</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-base-300 px-8 py-2 rounded-md">
                <img
                  src="https://6valley.6amtech.com/public/assets/front-end/img/products.svg"
                  alt=""
                />
                <span>9 reviews</span>
              </div>
            </div>
            <div className="mt-5 flex items-center text-center justify-center">
              <button className="bg-purple-600 px-10 py-3 text-white rounded-md flex items-center text-center justify-center">
                <IoIosChatboxes className="mr-3" />
                Chat With Vendor
              </button>
            </div>
          </div>
        </div>
      </div>

      <Box sx={{ typography: "body1" }} className="w-full lg:w-[70%]">
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Description" value="1" />
              <Tab label="Review" value="2" />
              <Tab label="Overview" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores quam incidunt totam quas mollitia vitae vel assumenda atque, quibusdam excepturi vero fugiat amet. Adipisci quidem animi libero voluptates sed esse expedita enim voluptatum doloribus sequi corrupti inventore minima aperiam, dolorem, unde laboriosam ducimus natus dolorum. Modi officia nisi ducimus aspernatur?</TabPanel>
          <TabPanel value="2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere at obcaecati rerum esse sit rem ut harum assumenda amet dolorem?</TabPanel>
          <TabPanel value="3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia aliquid non dignissimos, consectetur voluptatum in numquam officiis voluptas velit, a consequatur. Commodi provident quam consequuntur repudiandae tenetur sit suscipit!</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}

export default ProductsDetails;
