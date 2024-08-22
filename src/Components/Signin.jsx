import React, { useState } from "react";
import SignupImg from "../assets/signup.png";
import { CiMail } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Signin() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="bg-white mt-5 max-w-screen-xl mx-auto shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 h-full">
        <div className="max-md:order-1 p-4">
          <img
            src={SignupImg}
            className="w-full lg:max-w-[85%] h-full object-contain block mx-auto"
            alt="login-image"
          />
        </div>

        <div className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
          <form className="max-w-lg w-full mx-auto">
            <div className="mb-5">
              <h3 className="text-3xl font-bold text-purple-600 text-center">Login</h3>
            </div>
            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-b-1 focus:border-white focus:outline-none px-2 py-3"
                  placeholder="Enter email"
                />
                <CiMail className="text-xl absolute right-2 text-white" />
              </div>
            </div>

            <div className="mt-8">
              <label className="text-white text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-b-1 focus:border-white focus:outline-none px-2 py-3"
                  placeholder="Enter password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {showPassword ? (
                  <FiEyeOff
                    className="text-xl absolute right-2 text-white cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <FiEye
                    className="text-xl absolute right-2 text-white cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </div>
            </div>

            <div className="flex items-center gap-x-2 mt-6">
              <a href="#" className="text-purple-400">
                Forget Password?
              </a>
            </div>

            <div className="mt-10 text-center">
              <button
                className="text-white bg-purple-400 hover:bg-purple-600 px-28 py-3 rounded-md font-bold text-xs uppercase tracking-wider"
                type="submit"
              >
                LogIn
              </button>
            </div>

            <div className="text-center mt-10">
              <p className="text-white text-sm">
                Don’t have an account yet?
                <a href="#" className="text-purple-400 font-bold">
                  SignUp here
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signin;
