import React, { useState, useEffect } from "react";
import axios from "axios";

function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [locationFilter, setLocationFilter] = useState(""); // selected location

  useEffect(() => {
    axios
      .get(
        "https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing"
      )
      .then((res) => {
        setProperties(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  // Get unique locations from data (city + state)
  const uniqueLocations = [
    ...new Set(properties.map((p) => `${p.city}, ${p.state}`)),
  ];

  // Apply filter
  const filteredProperties = locationFilter
    ? properties.filter((p) => `${p.city}, ${p.state}` === locationFilter)
    : properties;

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
        </div>
      ) : (
        <section className="my-12 px-4 sm:px-6 md:px-12 overflow-x-hidden">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
                All Properties Available
              </h2>
              <p className="text-gray-600 mt-1 text-sm md:text-base">
                Browse our top-rated properties, featuring premium listings tailored to your needs.
              </p>
            </div>

            {/* Location Filter */}
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="border px-4 py-2 rounded-md shadow-sm text-gray-700"
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>

          {/* Grid Cards */}
          {filteredProperties.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProperties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full"
                >
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-48 md:h-56 object-cover"
                    onError={(e) => {
                      e.target.src = "/home.png";
                    }}
                  />
                  <div className="p-4 flex flex-col gap-2 bg-[#EEEEEE] flex-1">
                    <div className="flex items-center text-gray-500 text-sm gap-1 overflow-hidden">
                      <img
                        src="https://propbot-real-estate-app.netlify.app/location.png"
                        alt="icon"
                        className="w-5 h-5 flex-shrink-0"
                      />
                      <span className="truncate">
                        {property.city}, {property.state}
                      </span>
                    </div>

                    <p className="text-gray-700 text-sm md:text-base truncate">
                      Spacious 3BHK apartment in a prime location with modern amenities.
                    </p>

                    <div className="flex justify-between items-center mt-2 flex-wrap gap-2">
                      <button className="bg-blue-800 text-white px-5 py-2 rounded-full text-sm hover:bg-blue-900">
                        {property.isRental ? "View Rental" : "Buy Now"}
                      </button>
                      <span className="text-gray-900 font-semibold">
                        {property.isRental
                          ? `$${property.price}/month`
                          : `$${property.price}`}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 mt-6">No properties found for this location.</p>
          )}
        </section>
      )}
    </>
  );
}

export default PropertyList;
