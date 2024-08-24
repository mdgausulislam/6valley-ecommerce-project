import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import ProductImg from "../assets/ProductsDetails/image 63.png";
import ProductImg1 from "../assets/ProductsDetails/image 57.png";
import ProductImg2 from "../assets/ProductsDetails/image 58.png";
import ProductImg3 from "../assets/ProductsDetails/image 59.png";
import ProductImg4 from "../assets/ProductsDetails/image 61.png";
import { CiHeart } from "react-icons/ci";
import { FiMinus } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import Ratings from "./Ratings";

function ProductModal({ id }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(prevQuantity + delta, 1));
  };

  // Close the modal without causing any side effects
  const handleCloseModal = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const modal = document.getElementById(`my_modal_${id}`);
    if (modal) {
      modal.close();
    }
  };

  return (
    <div>
      <dialog
        id={`my_modal_${id}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="w-full lg:w-[1200px] bg-white">
          <div className="flex justify-between items-center mx-5 p-3 mt-3 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
            <div className="flex items-center">
              <h3 className="font-bold text-base lg:text-lg">
                LM Washable and Light-Weight Men's Shoe
              </h3>
              <FaAngleRight className="text-2xl ml-5 cursor-pointer" />
            </div>
            <div className="ml-2">
              <button className="btn" onClick={handleCloseModal}>
                <IoIosClose className="text-2xl" />
              </button>
            </div>
          </div>
          <section className="flex flex-col lg:flex-row justify-between gap-10 py-5 mx-5">
            {/* Left side */}
            <div className="flex flex-col-reverse lg:flex-row p-5 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
              {/* Small img */}
              <div className="h-full lg:h-[448px] flex flex-row lg:flex-col mr-0 lg:mr-5 gap-4 lg:gap-0 lg:space-y-3 space-y-3 spa">
                <div className="bg-[#F5F5F5] w-full lg:w-52 h-24 lg:h-28 flex items-center justify-center rounded-md p-4 lg:p-0 mt-3 lg:mt-0">
                  <img src={ProductImg2} alt="Small img 1" />
                </div>
                <div className="bg-[#F5F5F5] w-full lg:w-52 h-24 lg:h-28 flex items-center justify-center rounded-md mt-5 lg:mt-0 p-4 lg:p-0">
                  <img src={ProductImg1} alt="Small img 2" />
                </div>
                <div className="bg-[#F5F5F5] w-full lg:w-52 h-24 lg:h-28 flex items-center justify-center rounded-md mt-5 lg:mt-0 p-4 lg:p-0">
                  <img src={ProductImg3} alt="Small img 3" />
                </div>
                <div className="bg-[#F5F5F5] w-full lg:w-52 h-24 lg:h-28 flex items-center justify-center rounded-md mt-5 lg:mt-0 p-4 lg:p-0">
                  <img src={ProductImg4} alt="Small img 4" />
                </div>
              </div>

              {/* Large image */}
              <div
                className="w-full lg:w-[400px] h-full lg:h-[448px] bg-[#F5F5F5] flex items-center justify-center featured-image rounded-lg"
                id="featured-image"
              >
                <div className="zoom-container" id="zoom-container">
                  <img
                    src={ProductImg}
                    alt="Large img"
                    className="w-[300px] h-[300px] zoom-image"
                    id="large-image"
                  />
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="p-5 rounded-md shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
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
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
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
                <button className="text-[#5C5C5C] bg-white border border-[#E5261E] px-5 py-2 rounded-md hover:bg-[#FAFAFA]">
                  Add to cart
                </button>
                <button className="text-gray-600 border border-gray-400 hover:text-white hover:bg-[#E5261E] p-2 rounded-md">
                  <CiHeart />
                </button>
              </div>
            </div>
          </section>
        </div>
      </dialog>
    </div>
  );
}

export default ProductModal;
