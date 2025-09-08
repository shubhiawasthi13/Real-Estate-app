
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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-gray-200">
        {/* Left: Back Button */}
        <Link
          to="/"
          className="text-xs sm:text-sm flex items-center gap-2 border border-blue-700 rounded-full px-3 sm:px-4 py-2 text-blue-700 hover:bg-blue-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 sm:h-5 sm:w-5"
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
        <div className="flex items-center gap-2">
          <img src="https://propbot-real-estate-app.netlify.app/logo.png" alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="font-bold text-lg sm:text-xl">PropBot</span>
        </div>

        {/* Right: Button (hidden on very small screens) */}
        <button className="hidden sm:flex bg-blue-900 text-white text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 hover:bg-blue-800 transition items-center gap-2">
          About Us
          <span className="flex items-center justify-center w-4 h-4 rounded-full border border-white">
            <ArrowRight size={14} className="text-white" />
          </span>
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex flex-1 flex-col md:flex-row items-center justify-center px-4 md:px-12 py-10 max-w-7xl mx-auto w-full gap-8">
        {/* Left Column Form */}
        <section className="max-w-md w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Log In
          </h2>

          {/* Email Input */}
          <label className="block w-full mb-4">
            <span className="block font-semibold mb-1 text-gray-900">
              Email Address
            </span>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter Your Email Id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-blue-800 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-blue-800 pr-10"
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </label>

          {/* Password Input */}
          <label className="block w-full mb-2">
            <span className="block font-semibold mb-1 text-gray-900">
              Password
            </span>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-blue-800 rounded-lg px-4 py-3 outline-none focus:ring-1 focus:ring-blue-800 pr-10"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <Eye />
              </button>
            </div>
          </label>

          <div className="flex justify-between items-center mb-6">
            <label className="inline-flex items-center text-sm text-gray-900">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-800 rounded"
              />
              <span className="ml-2">Remember Me</span>
            </label>
            <a
              href="#!"
              className="text-xs text-red-600 font-medium hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Error Message */}
          {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

          {/* Log In Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white text-lg rounded-full py-3 font-semibold transition"
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
              <img src="https://propbot-real-estate-app.netlify.app/apple.png" alt="Apple" />
            </button>
            <button aria-label="Login with Facebook">
              <img src="https://propbot-real-estate-app.netlify.app/fb.png" alt="social-logo" />
            </button>
            <button aria-label="Login with Google">
              <img src="https://propbot-real-estate-app.netlify.app/google.png" alt="social-logo" />
            </button>
          </div>

          {/* Signup Link */}
          <p className="mt-10 text-center text-sm text-gray-700">
            Doesn’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-blue-900 hover:underline"
            >
              Create One
            </Link>
          </p>
        </section>

        {/* Right Column Image */}
        <section className="flex-1 max-w-xl rounded-3xl overflow-hidden shadow-lg">
          <img
            src="https://propbot-real-estate-app.netlify.app/login.png"
            alt="Modern House"
            className="w-full object-cover rounded-3xl h-96 md:h-full"
            loading="lazy"
          />
        </section>
      </main>
    </div>
  );
};

export default Login;
