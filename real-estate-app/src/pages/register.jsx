import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { auth } from "../services/firebase.js"; // make sure path is correct
import {
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );

      // Set display name
      await updateProfile(userCredential.user, {
        displayName: formData.name,
      });
      await signOut(auth);
      navigate("/login"); // Redirect to login after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-[0px_4px_8px_0px_#0000001F] px-4 sm:px-6 lg:px-12 h-[75px] flex items-center justify-between">
        {/* Left: Back Button */}
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-4 px-4 py-2 rounded-[24px] border border-gray-300 text-[#555555] font-poppins text-[16px] sm:text-[18px]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-5 sm:w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="hidden sm:inline">Back to Homepage</span>
        </Link>

        {/* Center: Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src="https://propbot-real-estate-app.netlify.app/logo.png"
            alt="Logo"
            className="w-8 h-8 sm:w-8 sm:h-8"
          />
          <span className="sm:inline font-poppins font-bold text-lg sm:text-2xl">
            PropBot
          </span>
        </div>

        {/* Right: About Us Button */}
        <div className="hidden sm:flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-[24px] bg-[#1E3A8A] text-white font-poppins text-[18px]">
            About Us
            <span className="flex items-center justify-center w-4 h-4 rounded-full border border-white">
              <ArrowRight size={14} className="text-white" />
            </span>
          </button>
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto p-6 gap-6 h-[calc(100vh-85px)]">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-[34px] font-poppins font-bold text-center mb-6">
            Create new account
          </h1>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold font-poppins">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="w-full sm:w-[320px] md:w-[453px] border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold font-poppins">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Id"
                className="w-full sm:w-[320px] md:w-[453px] border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold font-poppins">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="w-full sm:w-[320px] md:w-[453px] border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-600"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold font-poppins">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Your Password"
                className="border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-600"
              >
                {showConfirmPassword ? "🙈" : "👁️"}
              </button>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Button */}
            <button
              type="submit"
              className="bg-[#1E3A8A] text-white w-full sm:w-[300px] md:w-[417px] py-3 px-5 sm:px-6 rounded-[34px] mt-4 shadow-[2px_2px_10px_0_rgba(0,0,0,0.16)] hover:bg-blue-800 transition font-poppins font-medium text-base sm:text-lg md:text-[18px]"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-2 text-sm text-gray-600 font-poppins">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-900 font-semibold hover:underline font-poppins"
            >
              Log In
            </Link>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md lg:max-w-none h-96 lg:h-full rounded-[34px] overflow-hidden border border-blue-600 border-opacity-50 shadow-lg">
            <img
              src="https://res.cloudinary.com/djg40ufiy/image/upload/v1757599445/login_vd2nos.png"
              alt="Modern House"
              className="w-full h-full object-cover rounded-[34px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
