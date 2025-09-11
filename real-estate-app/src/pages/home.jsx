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
      icon: (
        <img src="https://propbot-real-estate-app.netlify.app/icon-1.png" />
      ),
      title: "Buy & Sell Properties",
      desc: "Find verified homes for sale or list your property with ease.",
    },
    {
      icon: (
        <img src="https://propbot-real-estate-app.netlify.app/icon-2.png" />
      ),
      title: "Find Rental Homes",
      desc: "Browse through thousands of rental options suited to your needs.",
    },
    {
      icon: (
        <img src="https://propbot-real-estate-app.netlify.app/icon-3.png" />
      ),
      title: "Smart AI Property Search",
      desc: "Get instant recommendations based on your budget & location.",
    },
    {
      icon: (
        <img src="https://propbot-real-estate-app.netlify.app/icon-4.png" />
      ),
      title: "Safe & Secure Transactions",
      desc: "Verified listings & secure deals to ensure a smooth experience.",
    },
  ];
  const latestfeatures = [
    {
      icon: (
        <img
          src="https://propbot-real-estate-app.netlify.app/budget-icon.png"
          className="w-8 h-8 text-blue-800"
        />
      ),
      title: "Budget Friendly",
      desc: "Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.",
    },
    {
      icon: (
        <img
          src="https://propbot-real-estate-app.netlify.app/trust-icon.png"
          className="w-8 h-8 text-blue-800"
        />
      ),
      title: "Trusted By Thousand",
      desc: "Lorem ipsum dolor sit amet consectetur. Venenatis sed ac aenean tempus. Lectus quis pretium varius iaculis sed.",
    },
    {
      icon: (
        <img
          src="https://propbot-real-estate-app.netlify.app/prime-icon.png"
          className="w-8 h-8 text-blue-800"
        />
      ),
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
      <section className="flex justify-center px-6 sm:px-9 relative">
        <div
          className="relative w-full max-w-[1334px] h-[527px] rounded-[34px] overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero.png')",
          }}
        >
          {/* Text Content */}{" "}
          <div className="relative z-20 flex flex-col h-full text-center text-white space-y-4 pt-8 px-4 sm:px-6 md:px-8">
            <h1 className="font-poppins font-bold text-[28px] sm:text-[36px] md:text-[48px] leading-[110%] sm:leading-[110%] md:leading-[100%] tracking-[0px] text-center">
              Find Your Dream Home in One Click!
            </h1>
            <p className="font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[110%] sm:leading-[100%] md:leading-[100%] tracking-[0px] text-center text-gray-200">
              Discover, Buy, or Rent Verified Properties with Ease.
            </p>
          </div>
          {/* Search Input inside hero */}
          <div className="absolute bottom-[100px] z-20 flex items-center justify-between w-[80%] left-1/2 -translate-x-1/2">
            <div className="relative w-[600px] h-[60px]">
              {/* Left icon */}
              <img
                src="https://propbot-real-estate-app.netlify.app/location.png"
                className="w-[34px] h-[34px] absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              {/* Right icon */}
              <Search className="w-[34px] h-[26px] absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                className="w-full h-full pl-10 pr-10 border rounded-[12px] font-poppins font-normal text-[20px] leading-[100%] tracking-[0px] placeholder:text-gray-400"
                placeholder="Search location..."
              />
            </div>

            <Link
              to="/propertyList"
              className="w-[194px] h-[47px] px-[20px] py-[10px] bg-white text-blue-800 border-2 border-blue-800 rounded-[24px] hover:bg-blue-50 transition font-poppins font-normal text-[18px] leading-[100%] tracking-[0px] text-center whitespace-nowrap flex items-center justify-center gap-1"
            >
              List your Property
            </Link>
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
                For Rent
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
      </section>

      {/* About section start here */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-8xl mx-5 px-4 sm:px-8 text-center">
          {/* Heading */}
          <h2 className="font-poppins font-bold text-[28px] sm:text-[32px] md:text-[35px] leading-[100%] text-center text-blue-800 mb-4">
            What We Do?
          </h2>

          {/* Paragraph */}
          <p className="font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] tracking-[2%] text-center text-gray-500 mb-10 w-[90%] sm:w-[60%] md:w-[30%] mx-auto">
            Helping you find, buy, and rent the perfect property with ease.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex flex-col items-center text-center transition rounded-[12px] gap-[18px] p-[30px_20px] sm:p-[30px_41px] 
            ${idx === 1 ? "bg-white shadow-md hover:shadow-lg" : "bg-[#EEEEEE]"}
          `}
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "259px",
                }}
              >
                {/* Icon */}
                <div className="w-[77px] h-[77px] flex items-center justify-center rounded-full bg-gray-400">
                  {feature.icon}
                </div>

                {/* Title */}
                <h3 className="w-[166px] h-[52px] font-poppins font-normal text-[16px] sm:text-[18px] md:text-[20px] leading-[26px] tracking-[0.02em] text-center text-gray-800 flex items-center justify-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-poppins font-normal text-[12px] sm:text-[12px] md:text-[12px] leading-[19px] tracking-[2%] text-center text-gray-500">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About section end here */}

      {/* Feature property section start here */}
      <section className="w-full bg-white py-2">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
            <h2 className="font-poppins font-bold text-2xl sm:text-[40px] leading-[100%] tracking-[0] text-blue-800">
              Featured Property
            </h2>

            <Link to ="/propertyList" className="flex items-center gap-1 w-full sm:w-[260px] h-[47px] px-5 py-2.5 border-2 border-blue-900 text-blue-800 rounded-[24px] hover:bg-blue-50 transition">
              See 268 New Projects <ArrowUpRight size={18} />
            </Link>
          </div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left Big Image */}
            <div className="relative aspect-[650/478] overflow-hidden">
              <img
                src="https://propbot-real-estate-app.netlify.app/property-1.png"
                alt="Kenanga Residence"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-poppins font-normal text-[18px] leading-[100%] tracking-[0] text-center">
                  By Finder & Projects
                </p>
                <h3 className="font-poppins font-semibold text-[25px] leading-[100%] tracking-[0] text-center">
                  Kenanga Residence
                </h3>
              </div>
            </div>

            {/* Right Section */}
            <div className="grid grid-cols-2 gap-2">
              {/* Tall Image */}
              <div className="aspect-[307/478] overflow-hidden">
                <img
                  src="https://propbot-real-estate-app.netlify.app/property-2.png"
                  alt="Property"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Two stacked images */}
              <div className="flex flex-col gap-2">
                <div className="aspect-[309/226] overflow-hidden">
                  <img
                    src="https://propbot-real-estate-app.netlify.app/property-3.png"
                    alt="Property"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-[309/226] overflow-hidden">
                  <img
                    src="https://propbot-real-estate-app.netlify.app/property-4.png"
                    alt="Property"
                    className="w-full h-full object-cover"
                  />
                </div>
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
        <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-[40px] leading-[100%] text-blue-800">
          Start Your Journey Today!
        </h2>

        <p className="font-poppins font-normal text-[16px] sm:text-[20px] leading-[28px] tracking-[0.02em] text-gray-500 mt-2 mb-6">
          Create a profile in seconds and find your ideal home.
        </p>

        {/* Form */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full sm:w-[336px] md:w-1/4 px-4 py-3 h-[50px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0_2px_4px_0_rgba(0,0,0,0.2)]"
          />

          {/* User Type Select */}
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
            className="w-full sm:w-[336px] md:w-1/4 px-4 py-3 h-[50px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0_2px_4px_0_rgba(0,0,0,0.2)]"
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
            className="w-full sm:w-[336px] md:w-1/4 px-4 py-3 h-[50px] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-[0_2px_4px_0_rgba(0,0,0,0.2)]"
          />

          {/* Continue Button */}
          <button className="w-full sm:w-[225px] md:w-1/4 px-8 sm:px-10 py-3 rounded-full bg-[#1E3A8A] text-white hover:bg-blue-800 transition font-poppins font-medium">
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
              className="w-60 sm:w-72 md:w-[510px] h-64 sm:h-80 md:h-[533px] rounded-lg shadow-lg object-cover border-[10px] border-[#EEEEEE]"
            />

            {/* Overlapping Front Image */}
            <img
              src="https://propbot-real-estate-app.netlify.app/l-property-2.png"
              alt="Front House"
              className="w-52 sm:w-64 md:w-[408px] h-52 sm:h-72 md:h-[405px] rounded-lg shadow-lg absolute -bottom-4 sm:-bottom-6 md:-bottom-8 -right-4 sm:-right-6 md:-right-8 object-cover border-[10px] border-[#EEEEEE]"
            />
          </div>

          {/* Right Content */}
          <div className="text-center md:text-left px-10 flex flex-col justify-center">
            <h2 className="w-full md:w-[659px] mx-auto text-xl sm:text-2xl md:text-[40px] font-poppins font-bold text-blue-800 tracking-[2%] leading-snug md:leading-[100%] text-center mb-6 md:mb-8">
              We Provide Latest Properties
              <br />
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
                    <h3 className="text-lg sm:text-xl md:text-[25px] font-poppins font-semibold text-blue-800 tracking-[2%] leading-[100%]">
                      {feature.title}
                    </h3>

                    <p className="text-gray-800 text-sm sm:text-base md:text-lg mt-1 sm:mt-0 sm:max-w-md font-poppins tracking-[2%] leading-[100%]">
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
