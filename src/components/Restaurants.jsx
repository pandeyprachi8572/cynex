import React from "react";

const restaurants = [
  {
    name: "1959 Kitchen & Bar",
    image: "src/assets/download (2).jpg", // Store images in public/assets/
    location: "Chicago",
  },
  {
    name: "The Bentwood - Toronto",
    image: "src/assets/download (3).jpg",
    location: "Toronto",
  },
  {
    name: "The Bentwood - New York",
    image: "src/assets/images.jpg",
    location: "New York",
  },
];

const Restaurants = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Our Restaurants:
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="relative bg-gray-900 rounded-xl shadow-lg overflow-hidden p-4 flex flex-col items-center"
          >
            {/* Image with Overlay */}
            <div className="relative w-full h-52">
              <img
                src={restaurant.image}
                alt={restaurant.name}
                className="w-full h-full object-cover rounded-lg"
              />
              {/* Overlay Text */}
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center">
                <h3 className="text-3xl font-bold">{restaurant.name}</h3>
                <p className="text-lg mt-1">{restaurant.location}</p>
              </div>
            </div>

            {/* Visit Button */}
            <a
              href="#"
              className="mt-6 border border-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition"
            >
              Visit {restaurant.location}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
