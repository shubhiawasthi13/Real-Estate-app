// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   return (
//     <div className="min-h-screen flex flex-col">
//       {/* Navbar */}
//       <nav className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-gray-200">
//         {/* Left: Back Button */}
//         <Link
//           to="/"
//           className="text-xs sm:text-sm flex items-center gap-2 border border-blue-700 rounded-full px-3 sm:px-4 py-2 text-blue-700 hover:bg-blue-50 transition"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-4 w-4 sm:h-5 sm:w-5"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 19l-7-7 7-7"
//             />
//           </svg>
//           <span className="hidden sm:inline">Back to Homepage</span>
//         </Link>

//         {/* Center: Logo */}
//         <div className="flex items-center gap-2">
//           <img src="/logo.png" alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
//           <span className="font-bold text-lg sm:text-xl">PropBot</span>
//         </div>

//         {/* Right: Button (hidden on very small screens) */}
//         <button className="hidden sm:flex bg-blue-900 text-white text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 hover:bg-blue-800 transition items-center gap-2">
//           About Us
//           <span className="flex items-center justify-center w-4 h-4 rounded-full border border-white">
//             <ArrowRight size={14} className="text-white" />
//           </span>
//         </button>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto p-6 gap-6">
//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 max-w-md mx-auto">
//           <h1 className="text-2xl font-bold mb-6 text-center">
//             Create new account
//           </h1>

//           <form className="flex flex-col gap-5">
//             {/* Name */}
//             <div className="flex flex-col gap-1">
//               <label className="font-semibold">Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter Your Full Name"
//                 className="border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//             </div>

//             {/* Email */}
//             <div className="flex flex-col gap-1 relative">
//               <label className="font-semibold">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="Enter Your Email Id"
//                 className="border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 absolute right-3 top-9 text-gray-400"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M16 12H8m0 0l4-4m-4 4l4 4"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z"
//                 />
//               </svg>
//             </div>

//             {/* Password */}
//             <div className="flex flex-col gap-1 relative">
//               <label className="font-semibold">Password</label>
//               <input
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter Your Password"
//                 className="border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-9 text-gray-600"
//                 aria-label="Toggle password visibility"
//               >
//                 {showPassword ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-10-7-10-7a13.163 13.163 0 014.993-5.16"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-10-7-10-7a13.163 13.163 0 014.993-5.16"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2 2l20 20"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>

//             {/* Confirm Password */}
//             <div className="flex flex-col gap-1 relative">
//               <label className="font-semibold">Confirm Password</label>
//               <input
//                 type={showConfirmPassword ? "text" : "password"}
//                 placeholder="Confirm Your Password"
//                 className="border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-9 text-gray-600"
//                 aria-label="Toggle confirm password visibility"
//               >
//                 {showConfirmPassword ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-10-7-10-7a13.163 13.163 0 014.993-5.16"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M13.875 18.825A10.05 10.05 0 0112 19c-7 0-10-7-10-7a13.163 13.163 0 014.993-5.16"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M2 2l20 20"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>

//             {/* Create Account Button */}
//             <button
//               type="submit"
//               className="bg-blue-900 text-white rounded-full py-3 mt-4 hover:bg-blue-800 transition"
//             >
//               Create Account
//             </button>
//           </form>

//           <p className="text-center mt-6 text-sm text-gray-600">
//             Already have an account?{" "}
//             <Link
//               to="/login"
//               className="text-blue-900 font-semibold hover:underline"
//             >
//               Log In
//             </Link>
//           </p>
//         </div>

//         {/* Image Section - Full width with fixed height */}
//         <div className="w-full lg:w-1/2">
//           <div className="w-full h-96 lg:h-full rounded-xl overflow-hidden border border-blue-600 border-opacity-50">
//             <img
//               src="/login.png"
//               alt="Modern house"
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Register;

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
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-4 sm:px-6 py-4 border-b border-gray-200">
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

        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="" className="w-6 h-6 sm:w-7 sm:h-7" />
          <span className="font-bold text-lg sm:text-xl">PropBot</span>
        </div>

        <button className="hidden sm:flex bg-blue-900 text-white text-xs sm:text-sm rounded-full px-4 sm:px-6 py-2 hover:bg-blue-800 transition items-center gap-2">
          About Us
          <span className="flex items-center justify-center w-4 h-4 rounded-full border border-white">
            <ArrowRight size={14} className="text-white" />
          </span>
        </button>
      </nav>

      {/* Main */}
      <main className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto p-6 gap-6">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 max-w-md mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Create new account
          </h1>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="font-semibold">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                className="border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email Id"
                className="border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1 relative">
              <label className="font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="border border-blue-700 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              <label className="font-semibold">Confirm Password</label>
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
              className="bg-blue-900 text-white rounded-full py-3 mt-4 hover:bg-blue-800 transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-900 font-semibold hover:underline"
            >
              Log In
            </Link>
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <div className="w-full h-96 lg:h-full rounded-xl overflow-hidden border border-blue-600 border-opacity-50">
            <img
              src="/login.png"
              alt="Modern house"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
