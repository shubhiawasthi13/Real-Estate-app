import { Search, ChevronDown, ArrowUpRight } from "lucide-react";

import React from 'react'

function hero() {
  return (
    <>
    {/* Hero section start here */}
      <section className="flex justify-center px-9 relative">
        <div
          className="relative w-full max-w-[1334px] h-[527px] rounded-[34px] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        >
          {/* Text Content */}
          <div className="relative z-20 flex flex-col h-full text-center text-white space-y-4">
            <h1 className="font-poppins font-bold pt-6 text-2xl sm:text-3xl md:text-[50px] leading-tight md:leading-[100%] tracking-[1px]">
              Find Your Dream Home in One Click!
            </h1>
            <p className="font-poppins font-normal text-base sm:text-lg md:text-[22px] leading-relaxed md:leading-[32px] text-gray-200">
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>
          </div>

          {/* Search Input inside hero */}
          <div className="absolute bottom-[100px] z-20 flex items-center justify-between w-[80%] left-1/2 -translate-x-1/2">
            <div className="relative w-1/2">
              {/* Left icon */}
              <img
                src="/location.png"
                className="w-6 h-6 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              {/* Right icon */}
              <Search className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                className="w-full pl-10 pr-10 py-2 border rounded-md"
                placeholder="Search location..."
              />
            </div>
            <button className="px-5 py-1 bg-white text-blue-800 border border-blue-800 rounded-full hover:bg-blue-50 transition whitespace-nowrap">
              List your Property
            </button>
          </div>
        </div>

        {/* Search/Filter Container */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[70%] bg-white rounded-2xl md:rounded-full shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-4 z-30">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row md:flex-nowrap gap-3 w-full">
            {/* For Rent */}
            <button className="flex-1 flex items-center justify-between px-5 py-2 bg-white shadow-md rounded-xl md:rounded-full border border-gray-400">
              <span className="flex items-center gap-2">
                <img src="/hero-icon-1.png" />
                For Rent
              </span>
              <ChevronDown size={18} />
            </button>

            {/* House */}
            <button className="flex-1 flex items-center justify-between px-5 py-2 bg-white shadow-md rounded-xl md:rounded-full border border-gray-400">
              <span className="flex items-center gap-2">
                <img src="/hero-icon-2.png" />
                House
              </span>
              <ChevronDown size={18} />
            </button>

            {/* Indonesia */}
            <button className="flex-1 flex items-center justify-between px-5 py-2 bg-white shadow-md rounded-xl md:rounded-full border border-gray-400">
              <span className="flex items-center gap-2">
                <img src="/hero-icon-3.png" />
                Indonesia
              </span>
              <ChevronDown size={18} />
            </button>
          </div>

          {/* CTA Button */}
          <button className="w-full sm:w-auto px-6 py-2 bg-blue-800 text-white rounded-xl md:rounded-full hover:bg-blue-900 whitespace-nowrap">
            Find Property
          </button>
        </div>
      </section>
    </>
  )
}

export default hero
