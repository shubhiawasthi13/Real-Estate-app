import React from "react";

const Property = ({ title, subTitle, buttonText, properties, isRental }) => {
  return (
    <section className="my-12 px-6 md:px-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            {title}
          </h2>
          <p className="text-gray-600 mt-1 text-sm md:text-base md:text-lg md:w-[70%]">
            {subTitle}
          </p>
        </div>
        <button className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900 whitespace-nowrap">
          {buttonText}
        </button>
      </div>

      <div
        className="flex gap-6 overflow-x-auto"
        style={{
          scrollbarWidth: "thin", // Firefox
          scrollbarColor: "#9ca3af #f3f4f6", // thumb color #9ca3af (gray-400), track #f3f4f6 (gray-100)
        }}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            className="w-[280px] md:w-[330px] h-[400px] bg-white rounded-xl shadow-md flex-shrink-0 overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 md:h-56 object-cover"
              onError={(e) => {
                e.target.src = "/home.png";
              }}
            />
            <div className="p-4 flex flex-col gap-2 h-[152px] md:h-[160px] bg-[#EEEEEE]">
              <div className="flex items-center text-gray-500 text-sm gap-1">
                <img
                  src="/location.png"
                  alt="icon"
                  className="w-5 h-5 text-gray-400"
                />
                {property.city}, {property.state}
              </div>

              <p className="text-gray-700 text-sm md:text-base w-[70%]">
                Spacious 3BHK apartment in a prime location with modern
                amenities.
              </p>

              <div className="flex justify-between items-center mt-2 ">
                <button className="bg-blue-800 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-900">
                  {isRental ? "View Rental" : "Buy Now"}
                </button>
                <span className="text-gray-900 font-semibold">
                  {isRental ? `$${property.price}/month` : `$${property.price}`}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Property;
