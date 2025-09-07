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
      <section className="flex justify-center px-9 relative">
        {" "}
        <div
          className="relative w-full max-w-[1420px] h-[527px] rounded-[34px] overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: "url('/buy-hero.png')" }}
        >
          {" "}
          {/* Text Content */}{" "}
          <div className="relative z-20 flex flex-col justify-end h-full pb-20">
            {" "}
            <div className="relative inline-block py-6 rounded-2xl overflow-hidden">
              {" "}
              {/* Only blurred image */}{" "}
              <img
                src="/hero-blur.png"
                alt="Blur Background"
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-80"
              />{" "}
              {/* Text on top */}{" "}
              <div className="relative z-10 px-10 mx-10">
                {" "}
                <h1 className="font-poppins font-bold text-2xl text-white sm:text-3xl md:text-[50px] leading-tight md:leading-[100%] tracking-[1px]">
                  {" "}
                  Featured Properties For Sale{" "}
                </h1>{" "}
                <p className="font-poppins font-normal text-base sm:text-lg md:text-[22px] leading-relaxed md:leading-[32px] text-gray-200">
                  {" "}
                  Discover, Buy, or Rent Verified Properties with Ease.{" "}
                </p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          {/* Search Input inside hero */}{" "}
        </div>{" "}
        {/* Search/Filter Container */}{" "}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[70%] bg-white rounded-2xl md:rounded-full shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-4 z-30">
          {" "}
          {/* Filters */}{" "}
          <div className="flex flex-col sm:flex-row md:flex-nowrap gap-3 w-full">
            {" "}
            {/* For Rent */}{" "}
            <button className="flex-1 flex items-center justify-between px-5 py-2 bg-white shadow-md rounded-xl md:rounded-full border border-gray-400">
              {" "}
              <span className="flex items-center gap-2">
                {" "}
                <img src="/hero-icon-1.png" /> For Buying{" "}
              </span>{" "}
              <ChevronDown size={18} />{" "}
            </button>{" "}
            {/* House */}{" "}
            <button className="flex-1 flex items-center justify-between px-5 py-2 bg-white shadow-md rounded-xl md:rounded-full border border-gray-400">
              {" "}
              <span className="flex items-center gap-2">
                {" "}
                <img src="/hero-icon-2.png" /> House{" "}
              </span>{" "}
              <ChevronDown size={18} />{" "}
            </button>{" "}
            {/* Indonesia */}{" "}
            <button className="flex-1 flex items-center justify-between px-5 py-2 bg-white shadow-md rounded-xl md:rounded-full border border-gray-400">
              {" "}
              <span className="flex items-center gap-2">
                {" "}
                <img src="/hero-icon-3.png" /> Indonesia{" "}
              </span>{" "}
              <ChevronDown size={18} />{" "}
            </button>{" "}
          </div>{" "}
          {/* CTA Button */}{" "}
          <button className="w-full sm:w-auto px-6 py-2 bg-blue-800 text-white rounded-xl md:rounded-full hover:bg-blue-900 whitespace-nowrap">
            {" "}
            Find Property{" "}
          </button>{" "}
        </div>{" "}
      </section>{" "}
      {/* Hero section end here */}
      
      {/* Feature Property Section */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
            Featured Property
          </h2>
          <button className="flex items-center gap-2 px-4 py-2 border border-blue-900 text-blue-800 rounded-full hover:bg-blue-50 transition">
            See 268 New Projects <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Loader */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
          </div>
        ) : (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
            style={{ marginBottom: "5%" }}
          >
            {saleProperties.map((property) => (
              <div
                key={property.id}
                className="relative flex flex-col items-center rounded-lg shadow-lg"
                style={{ marginBottom: "100px" }}
              >
                {/* Property Image */}
                <img
                  src={property.image || "https://via.placeholder.com/320"}
                  alt={property.name}
                  className="w-[90%] aspect-square object-cover rounded-t-lg"
                />

                {/* Property Details */}
                <div className="absolute bottom-0 w-[90%] translate-y-1/2 bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <img
                          src="/location.png"
                          alt="icon"
                          className="w-5 h-5"
                        />
                        <h3 className="text-indigo-900 font-semibold text-lg">
                          {property.city}, {property.state}
                        </h3>
                      </div>
                      <p className="text-gray-500 text-sm md:text-base mt-1">
                        Spacious 3BHK apartment in a prime location with modern
                        amenities.
                      </p>
                    </div>

                    <button
                      aria-label="Bookmark"
                      className="text-indigo-900 hover:text-indigo-600"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 4a2 2 0 0 0-2 2v15l8-5 8 5V6a2 2 0 0 0-2-2H6Z" />
                      </svg>
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-indigo-900">
                      {`$${property.price}/month`}
                    </span>
                    <button className="bg-indigo-900 text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-indigo-700 transition">
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
