import React from "react";
import scannerCode from "../assets/Qrcode 1.png";
import downloadApp from "../assets/Frame 718.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="bg-purple-600 text-white mt-10 md:mt-32">
      <div className="container mx-auto p-10">
        <div className="footer grid grid-cols-1 lg:grid-cols-5 justify-between">
          <nav>
            <img
              src="https://6valley.6amtech.com/storage/app/public/company/2023-06-13-648845d83f583.png"
              alt=""
              className="w-44 mb-5"
            />
            <h6 className="footer-title">Download App</h6>
            <div className="flex justify-center items-center">
              <img
                src="https://6valley.6amtech.com/public/assets/front-end/png/apple_app.png"
                alt=""
                className="w-32"
              />
              <img
                src="https://6valley.6amtech.com/public/assets/front-end/png/google_app.png"
                alt=""
                className="w-32 ml-2"
              />
            </div>
          </nav>

          <nav className="footer-nav">
            <h6 className="footer-title">Support</h6>
            <a href="#">Dhaka, DH 1515, Bangladesh.</a>
            <a href="mailto:gausulislam5@gmail.com">gausulislam5@gmail.com</a>
            <a href="tel:+8801785003901">+8801785003901</a>
          </nav>
          <nav className="footer-nav">
            <h6 className="footer-title">Account</h6>
            <a href="#">My Account</a>
            <a href="#">Login/Register</a>
            <a href="#">Cart Shop</a>
          </nav>
          <nav className="footer-nav">
            <h6 className="footer-title">Quick Link</h6>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Of Use</a>
            <a href="#">FAQs</a>
            <a href="#">Contact</a>
          </nav>
          <nav className="footer-nav">
            <h6 className="footer-title">Exclusive</h6>
            <a href="#">Subscribe</a>
            <a href="#">Get 10% off your first order</a>
            <div className="relative">
              <p className="pt-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-[300px] h-[52px]  bg-purple-600 px-4 py-3 gap-8 rounded border border-[#fafafa] outline-none text-white"
                />
                <button className="absolute -right-2 p-4 bg-white text-black rounded-lg font-bold">
                  Subscribe
                </button>
              </p>
            </div>
          </nav>
        </div>
        <hr className="bg-white opacity-20 my-5" />
        <p className="opacity-70 text-center p-4">
          &copy; 2024. All rights reserved{" "}
          <i className="fa-solid fa-cart-shopping"></i>
        </p>
      </div>
    </footer>
  );
}

export default Footer;



