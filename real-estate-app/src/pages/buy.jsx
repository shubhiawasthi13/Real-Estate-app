import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import axios from "axios";

function Buy() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true); // loader state

  useEffect(() => {
    axios
      .get(
        "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
      )
      .then((res) => {
        setProperties(res.data);
        setLoading(false); // stop loader
      })
      .catch((err) => {
        console.log(err);
        setLoading(false); // stop loader even if error
      });
  }, []);

  const saleProperties = properties.slice(0, 2);

  return (
    <>
      {/* Hero section start here */}{" "}
      <section className="flex justify-center px-6 sm:px-9 relative">
        <div
          className="relative w-full max-w-[1420px] h-[527px] rounded-[34px] overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/buy-hero.png')" }}
        >
          {/* Text Content */}
          <div className="relative z-20 flex flex-col justify-end h-full pb-20">
            <div className="relative inline-block py-6 rounded-2xl overflow-hidden">
              {/* Only blurred image */}
              <img
                src="https://propbot-real-estate-app.netlify.app/hero-blur.png"
                alt="Blur Background"
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-80"
              />
              {/* Text on top */}
              <div className="relative z-10 px-10 mx-10">
                <h1 className="font-poppins font-bold text-2xl sm:text-3xl md:text-[48px] leading-tight md:leading-[100%] tracking-[0px] text-white">
                  Featured Properties For Sale
                </h1>
                <p className="font-poppins font-normal text-base sm:text-[20px] md:text-[22px] leading-[28px] md:leading-[32px] text-gray-200">
                  Discover, Buy, or Rent Verified Properties with Ease.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Search/Filter Container */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[1106px] md:w-[1106px] h-auto md:h-[102px] bg-white rounded-[24px] md:rounded-[46px] shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 px-4 md:px-6 py-4 z-30">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row md:flex-nowrap gap-3 w-full">
            {/* For Rent */}
            <button className="flex-1 flex items-center justify-between w-full md:max-w-[263px] h-[58px] px-5 py-2 bg-white shadow-md rounded-[46px] border border-gray-400 font-poppins font-normal text-[18px] leading-[100%] tracking-[0px] text-center">
              <span className="flex items-center gap-2">
                {/* Left Icon */}
                <img
                  src="https://propbot-real-estate-app.netlify.app/hero-icon-1.png"
                  className="w-[20px] h-[20px]"
                />
                For Buying
              </span>
              {/* Right Icon */}
              <ChevronDown size={20} />
            </button>

            {/* House */}
            <button className="flex-1 flex items-center justify-between w-full md:max-w-[263px] h-[58px] px-5 py-2 bg-white shadow-md rounded-[46px] border border-gray-400 font-poppins font-normal text-[18px] leading-[100%] tracking-[0px] text-center">
              <span className="flex items-center gap-2">
                <img
                  src="https://propbot-real-estate-app.netlify.app/hero-icon-2.png"
                  className="w-[20px] h-[20px]"
                />
                House
              </span>
              <ChevronDown size={20} />
            </button>

            {/* Indonesia */}
            <button className="flex-1 flex items-center justify-between w-full md:max-w-[263px] h-[58px] px-5 py-2 bg-white shadow-md rounded-[46px] border border-gray-400 font-poppins font-normal text-[18px] leading-[100%] tracking-[0px] text-center">
              <span className="flex items-center gap-2">
                <img
                  src="https://propbot-real-estate-app.netlify.app/hero-icon-3.png"
                  className="w-[20px] h-[20px]"
                />
                Indonesia
              </span>
              <ChevronDown size={20} />
            </button>
            <button className="w-full md:max-w-[194px] h-[58px] px-6 py-2 bg-blue-800 text-white rounded-[31px] hover:bg-blue-900 whitespace-nowrap font-poppins font-semibold text-[18px] leading-[100%] tracking-[0px] text-center">
              Find Property
            </button>
          </div>
        </div>
      </section>{" "}
      {/* Hero section end here */}
      {/* Feature Property Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 py-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-poppins font-bold text-blue-800 text-center">
            Featured Property
          </h2>

          <button className="flex items-center font-poppins gap-2 px-4 sm:px-6 py-2 sm:py-3 border border-blue-900 text-blue-800 rounded-full hover:bg-blue-50 transition w-full sm:w-auto">
            See 268 New Projects <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {saleProperties.map((property) => (
              <div
                key={property.id}
                className="relative flex flex-col items-center rounded-lg shadow-lg"
              >
                {/* Property Image */}
                <img
                  src={property.image || "https://via.placeholder.com/320"}
                  alt={property.name}
                  className="w-full sm:w-[90%] md:w-full aspect-[4/3] sm:aspect-square object-cover rounded-t-lg"
                />

                {/* Property Details */}
                <div className="absolute bottom-0 w-full sm:w-[90%] translate-y-1/2 bg-white p-4 sm:p-6 rounded-lg shadow-md">
                  {/* Top Row: Location & Bookmark */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-3 gap-2 sm:gap-0">
                    <div>
                      <div className="flex items-center gap-2">
                        <img
                          src="https://propbot-real-estate-app.netlify.app/location.png"
                          alt="icon"
                          className="w-4 sm:w-5 h-4 sm:h-5"
                        />
                        <h3 className="text-indigo-900 font-medium text-base sm:text-xl md:text-[24px] text-center font-poppins">
                          {property.city}, {property.state}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-xs sm:text-sm md:text-base mt-1 leading-[25px] font-poppins">
                        Spacious 3BHK apartment in a prime location with modern
                        amenities.
                      </p>
                    </div>

                    <button
                      aria-label="Bookmark"
                      className="text-indigo-900 hover:text-indigo-600 mt-2 sm:mt-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4a2 2 0 0 0-2 2v15l8-5 8 5V6a2 2 0 0 0-2-2H6Z" />
                      </svg>
                    </button>
                  </div>

                  {/* Bottom Row: Price & Know More */}
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
                    <span className="font-semibold text-black-900 text-sm sm:text-base md:text-[20px]">
                      {`$${property.price}/month`}
                    </span>

                    <button className="bg-indigo-900 text-white text-xs sm:text-sm md:text-[16px] font-semibold px-4 sm:px-5 py-2 rounded-full hover:bg-indigo-700 transition">
                      Know More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  );
}

export default Buy;
