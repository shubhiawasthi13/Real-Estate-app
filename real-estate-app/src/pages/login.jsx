import React, { useState } from "react";
import { Mail, Eye, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase.js"; // adjust path if needed

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Save session in localStorage
      localStorage.setItem("user", JSON.stringify(userCredential.user));

      // Redirect to homepage
      navigate("/");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col overflow-hidden">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-[0px_4px_8px_0px_#0000001F] px-4 sm:px-6 lg:px-12 h-[85px] flex items-center justify-between">
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

      {/* Main Content */}
      <main className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto p-6 gap-6 h-[calc(100vh-85px)]">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl md:text-[34px] font-poppins font-bold text-center mb-6">
            Log In
          </h1>

          <form className="flex flex-col gap-5" onSubmit={handleLogin}>
            {/* Email */}
            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold font-poppins">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Id"
                className="w-full sm:w-[320px] md:w-[453px] border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <Mail className="absolute right-3 top-9 text-gray-500" />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold font-poppins">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            {/* Remember & Forgot */}
            <div className="flex justify-between items-center mb-6">
              <label className="inline-flex items-center text-sm text-gray-900">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-800 rounded"
                />
                <span className="ml-2 font-poppins">Remember Me</span>
              </label>
              <a
                href="#!"
                className="text-xs text-red-600 font-medium hover:underline"
              >
                Forgot Password?
              </a>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}

            {/* Log In Button */}
            <button
              type="submit"
              className="bg-[#1E3A8A] text-white w-full sm:w-[300px] md:w-[417px] py-3 px-5 sm:px-6 rounded-[34px] mt-4 shadow-[2px_2px_10px_0_rgba(0,0,0,0.16)] hover:bg-blue-800 transition font-poppins font-medium text-base sm:text-lg md:text-[18px]"
            >
              Log In
            </button>

            {/* Divider */}
            <div className="flex items-center my-3 text-gray-400 text-sm">
              <hr className="flex-grow border border-gray-300" />
              <span className="mx-3 whitespace-nowrap">OR CONTINUE WITH</span>
              <hr className="flex-grow border border-gray-300" />
            </div>

            {/* Social Login */}
            <div className="flex justify-center gap-12 text-2xl text-gray-600">
              <button aria-label="Login with Apple">
                <img
                  src="https://propbot-real-estate-app.netlify.app/apple.png"
                  alt="Apple"
                />
              </button>
              <button aria-label="Login with Facebook">
                <img
                  src="https://propbot-real-estate-app.netlify.app/fb.png"
                  alt="Facebook"
                />
              </button>
              <button aria-label="Login with Google">
                <img
                  src="https://propbot-real-estate-app.netlify.app/google.png"
                  alt="Google"
                />
              </button>
            </div>

            {/* Signup Link */}
            <p className="mt-2 text-center text-sm sm:text-base md:text-base text-gray-700 font-poppins">
              Doesn’t have an account?{" "}
              <Link
                to="/register"
                className="font-medium sm:font-semibold text-blue-900 hover:underline"
              >
                Create One
              </Link>
            </p>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md lg:max-w-none h-96 lg:h-full rounded-[34px] overflow-hidden border border-blue-600 border-opacity-50 shadow-lg">
            <img
              src="https://propbot-real-estate-app.netlify.app/login.png"
              alt="Modern House"
              className="w-full h-full object-cover rounded-[34px]"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
