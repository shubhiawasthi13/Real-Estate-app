import { Search, ChevronDown, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Property from "../components/property";
export default function Home() {
  const [userType, setUserType] = useState("");
  const [loading, setLoading] = useState(true);
  const features = [
    {
      icon: <img src="https://propbot-real-estate-app.netlify.app/icon-1.png" />,
      title: "Buy & Sell Properties",
      desc: "Find verified homes for sale or list your property with ease.",
    },
    {
      icon: <img src="https://propbot-real-estate-app.netlify.app/icon-2.png" />,
      title: "Find Rental Homes",
      desc: "Browse through thousands of rental options suited to your needs.",
    },
    {
      icon: <img src="https://propbot-real-estate-app.netlify.app/icon-3.png" />,
      title: "Smart AI Property Search",
      desc: "Get instant recommendations based on your budget & location.",
    },
    {
      icon: <img src="https://propbot-real-estate-app.netlify.app/icon-4.png" />,
      title: "Safe & Secure Transactions",
      desc: "Verified listings & secure deals to ensure a smooth experience.",
    },
  ];
  const latestfeatures = [
    {
      icon: <img src="https://propbot-real-estate-app.netlify.app/budget-icon.png" className="w-8 h-8 text-blue-800" />,
      title: "Budget Friendly",
      desc: "Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.",
    },
    {
      icon: <img src="https://propbot-real-estate-app.netlify.app/trust-icon.png" className="w-8 h-8 text-blue-800" />,
      title: "Trusted By Thousand",
      desc: "Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.",
    },
    {
      icon: <img src="https://propbot-real-estate-app.netlify.app/prime-icon.png" className="w-8 h-8 text-blue-800" />,
      title: "Prime Location",
      desc: "Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.",
    },
  ];
  const [properties, setProperties] = useState([]);

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

  const saleProperties = properties.slice(0, 8); // first 4 as sale
  const rentalProperties = properties.slice(8, 16); // next 4 as rental
  return (
    <>
      {/* Hero section end here */}
      <section className="flex justify-center px-9 relative">
        <div
          className="relative w-full max-w-[1420px] h-[527px] rounded-[34px] overflow-hidden bg-cover bg-center"
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
                src="https://propbot-real-estate-app.netlify.app/location.png"
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
            <Link to ="/propertyList" className="px-5 py-1 bg-white text-blue-800 border border-blue-800 rounded-full hover:bg-blue-50 transition whitespace-nowrap">
              List your Property
            </Link>
          </div>
        </div>

        {/* Search/Filter Container */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[95%] md:w-[70%] bg-white rounded-2xl md:rounded-full shadow-xl flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-4 z-30">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row md:flex-nowrap gap-3 w-full">
            {/* For Rent */}
            <button className="flex-1 flex items-center justify-between px-5 py-2 bg-white shadow-md rounded-xl md:rounded-full border border-gray-400">
              <span className="flex items-center gap-2">
                <img src="https://propbot-real-estate-app.netlify.app/hero-icon-1.png" />
                For Rent
              </span>
              <ChevronDown size={18} />
            </button>

            {/* House */}
            <button className="flex-1 flex items-center justify-between px-5 py-2 bg-white shadow-md rounded-xl md:rounded-full border border-gray-400">
              <span className="flex items-center gap-2">
                <img src="https://propbot-real-estate-app.netlify.app/hero-icon-2.png" />
                House
              </span>
              <ChevronDown size={18} />
            </button>

            {/* Indonesia */}
            <button className="flex-1 flex items-center justify-between px-5 py-2 bg-white shadow-md rounded-xl md:rounded-full border border-gray-400">
              <span className="flex items-center gap-2">
                <img src="https://propbot-real-estate-app.netlify.app/hero-icon-3.png" />
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

      {/* About section start here */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-5 px-8 text-center">
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">
            What We Do?
          </h2>
          <p className="text-gray-500 mb-10 w-[30%] mx-auto">
            Helping you find, buy, and rent the perfect property with ease.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`rounded-xl p-6 flex flex-col items-center text-center transition ${
                  idx === 1
                    ? "bg-white shadow-md hover:shadow-lg"
                    : "bg-[#EEEEEE]"
                }`}
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 w-[70%] mx-auto">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* About section end here */}

      {/* Feature property section start here */}
      <section className="py-16">
        <div className="max-w-8xl mx-8 px-5">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
              Featured Property
            </h2>
            <button className="flex items-center gap-2 px-4 py-2 border border-blue-900 text-blue-800 rounded-full hover:bg-blue-50 transition">
              See 268 New Projects <ArrowUpRight size={18} />
            </button>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Big Image (50%) */}
            <div className="relative rounded-xl overflow-hidden h-[500px]">
              <img
                src="https://propbot-real-estate-app.netlify.app/property-1.png"
                alt="Kenanga Residence"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">By Finder & Projects</p>
                <h3 className="text-xl font-bold">Kenanga Residence</h3>
              </div>
            </div>

            {/* Right Section (50%) */}
            <div className="grid grid-cols-2 gap-4 h-[500px]">
              {/* One tall image */}
              <img
                src="https://propbot-real-estate-app.netlify.app/property-2.png"
                alt="Property"
                className="rounded-xl object-cover w-full h-full"
              />

              {/* Two stacked small images */}
              <div className="flex flex-col gap-4">
                <img
                  src="https://propbot-real-estate-app.netlify.app/property-3.png"
                  alt="Property"
                  className="rounded-xl object-cover h-1/2 w-full"
                />
                <img
                  src="https://propbot-real-estate-app.netlify.app/property-4.png"
                  alt="Property"
                  className="rounded-xl object-cover h-1/2 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Feature property section end here */}

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <Property
          title="Best Properties Available For Sale"
          subTitle="Browse our top-rated properties for Sale, featuring premium listings tailored to your needs. Find your dream home today!"
          buttonText="View All Sales"
          properties={saleProperties}
          isRental={false}
        />
      )}

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <Property
          title="Find The Perfect Rental Home"
          buttonText="View All Rentals"
          subTitle="Browse our top-rated properties for rent, featuring premium listings tailored to your needs. Find your dream home today!"
          properties={rentalProperties}
          isRental={true}
        />
      )}
      {/* Form section start here */}
      <section className="max-w-8xl mx-5 px-6 py-5">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800">
          Start Your Journey Today!
        </h2>
        <p className="text-gray-500 mt-2 mb-6 text-base sm:text-lg">
          Create a profile in seconds and find your ideal home.
        </p>

        {/* Form */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full md:w-1/4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.1)]"
          />

          {/* User Type Select */}
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full md:w-1/4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.1)]"
          >
            <option value="">Select User Type</option>
            <option value="buyer">Buyer</option>
            <option value="seller">Seller</option>
            <option value="agent">Agent</option>
          </select>

          {/* Location Input */}
          <input
            type="text"
            placeholder="Enter Your Location"
            className="w-full md:w-1/4 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0_4px_4px_0_rgba(0,0,0,0.1)]"
          />

          {/* Continue Button */}
          <button className="w-full md:w-1/4 px-10 rounded-full py-3 bg-blue-900 text-white hover:bg-blue-800 transition">
            Continue
          </button>
        </div>
      </section>
      {/* Form section end here */}

      {/* Latest feature property section start here */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-5 px-5 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          {/* Left Images */}
          <div className="relative w-full flex justify-center md:justify-start">
            {/* Back Image */}
            <img
              src="https://propbot-real-estate-app.netlify.app/l-property-1.png"
              alt="Back House"
              className="w-60 sm:w-72 md:w-96 h-64 sm:h-80 md:h-96 rounded-lg shadow-lg object-cover"
            />

            {/* Overlapping Front Image */}
            <img
              src="https://propbot-real-estate-app.netlify.app/l-property-2.png"
              alt="Front House"
              className="w-52 sm:w-64 md:w-80 h-52 sm:h-72 md:h-80 rounded-lg shadow-lg absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left px-10 flex flex-col justify-center">
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-blue-800 mb-6 md:mb-8">
              We Provide Latest Properties <br />
              For Our Valuable Clients
            </h2>

            <div className="space-y-8">
              {latestfeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 text-blue-800 text-2xl sm:text-3xl">
                    {feature.icon}
                  </div>

                  {/* Text */}
                  <div className="w-full sm:w-auto">
                    <h3 className="font-bold text-lg md:text-xl text-blue-800">
                      {feature.title}
                    </h3>
                    <p className="text-gray-800 text-base md:text-lg mt-1 sm:mt-0 sm:max-w-md">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Latest feature property section end here */}
    </>
  );
}
