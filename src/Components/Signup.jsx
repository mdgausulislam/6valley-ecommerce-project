import React, { useState } from "react";
import SignupImg from "../assets/signup.png";
import { CiUser, CiMail } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Signup.css";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordMatch(e.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    setPasswordMatch(e.target.value === password);
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
              <h3 className="text-3xl font-bold text-purple-600">
                Create an account
              </h3>
              <p className="text-white">Enter your details below</p>
            </div>

            <div>
              <label className="text-white text-xs block mb-2">Full Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-b-1 focus:border-white focus:outline-none px-2 py-3"
                  placeholder="Enter Your Name"
                />
                <CiUser className="text-xl absolute right-2 text-white" />
              </div>
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

            <div className="mt-8">
              <label className="text-white text-xs block mb-2">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="confirmpassword"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-b-1 focus:border-white focus:outline-none px-2 py-3"
                  placeholder="Enter confirm password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                />
                {showConfirmPassword ? (
                  <FiEyeOff
                    className="text-xl absolute right-2 text-white cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                ) : (
                  <FiEye
                    className="text-xl absolute right-2 text-white cursor-pointer"
                    onClick={toggleConfirmPasswordVisibility}
                  />
                )}
              </div>
              {passwordMatch ? (
                <p className="text-green-500 text-sm mt-2">Passwords match.</p>
              ) : (
                <p className="text-red-500 text-sm mt-2">
                  Passwords do not match.
                </p>
              )}
            </div>

            <div className="mt-10 text-center">
              <button
                className="text-white bg-purple-400 hover:bg-purple-600 px-28 py-3 rounded-md font-bold text-xs uppercase tracking-wider"
                type="submit"
              >
                Signup
              </button>
            </div>

            <div className="flex items-center gap-x-2 mt-6">
              <input
                type="checkbox"
                defaultChecked
                className="checkbox focus:bg-white checked:bg-purple-500"
              />
              <label htmlFor="rememberme" className="text-white text-sm">
                I agree to all the{" "}
                <a href="#" className="text-purple-400">
                  terms and conditions
                </a>
              </label>
            </div>

            <div className="text-center mt-10">
              <p className="text-white text-sm">
                Already have an account?{" "}
                <a href="#" className="text-purple-400 font-bold">
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
