import React from "react";

const Property = ({ title, subTitle, buttonText, properties, isRental }) => {
  return (
    <section className="my-12 px-4 sm:px-6 md:px-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h2 className="font-poppins font-bold text-2xl sm:text-3xl md:text-[40px] leading-snug sm:leading-tight md:leading-[100%] tracking-normal text-blue-900">
            {title}
          </h2>

          <p className="font-poppins font-normal text-sm sm:text-base md:text-[20px] leading-relaxed sm:leading-6 md:leading-[28px] tracking-wide md:tracking-[0.02em] text-gray-600 mt-1 md:w-[70%]">
            {subTitle}
          </p>
        </div>

        <button className="w-full sm:w-[200px] md:w-[251px] h-12 sm:h-14 md:h-[58px] bg-[#1E3A8A] text-white rounded-full hover:bg-blue-900 font-poppins font-medium text-sm sm:text-base md:text-base">
          {buttonText}
        </button>
      </div>

      {/* Properties Carousel */}
      <div
        className="flex gap-4 sm:gap-6 overflow-x-auto pb-4"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#9ca3af #f3f4f6",
        }}
      >
        {properties.map((property) => (
          <div
            key={property.id}
            className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[341px] h-auto bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Property Image */}
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-48 sm:h-52 md:h-[200px] object-cover rounded-[12px]"
              onError={(e) => (e.target.src = "/home.png")}
            />

            {/* Content Section */}
            <div className="p-4 flex flex-col gap-2 bg-[#EEEEEE]">
              {/* Location */}
              <div className="flex items-center gap-1 text-gray-500 font-poppins font-normal text-xs sm:text-sm md:text-[18px] leading-tight sm:leading-snug md:leading-[100%] tracking-normal text-center">
                <img
                  src="/location.png"
                  alt="icon"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
                {property.city}, {property.state}
              </div>

              {/* Description */}
              <p className="text-gray-700 font-poppins font-normal text-sm sm:text-base md:text-[16px] leading-6 sm:leading-6 md:leading-[25px] tracking-normal">
                Spacious 3BHK apartment in a prime location with modern
                amenities.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-2 gap-2 sm:gap-0">
                <button className="w-[100px] sm:w-[115px] md:w-[128px] h-9 sm:h-10 md:h-[38px] bg-[#1E3A8A] text-white rounded-full text-xs sm:text-sm md:text-sm hover:bg-blue-900 font-poppins font-medium">
                  {isRental ? "View Rental" : "Buy Now"}
                </button>

                <span className="text-gray-900 font-poppins font-normal text-sm sm:text-base md:text-[18px] leading-tight sm:leading-snug md:leading-[100%] tracking-normal text-center">
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
