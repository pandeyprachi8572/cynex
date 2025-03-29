import React from "react";

const MerchSection = () => {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('src/assets/pexels-photo-396547.jpeg')" }} // Ensure this image exists in `public/assets/`
      ></div>

      {/* Content Card */}
      <div className="relative bg-gray-900 bg-opacity-90 rounded-xl px-8 py-12 max-w-5xl flex flex-col md:flex-row items-center gap-8 shadow-lg">
        {/* Left Text Section */}
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold">Check out our available merch!</h2>
          <p className="mt-3 text-gray-300">
            Be part of our world, taking a part of us with you everywhere!
          </p>
          <button className="mt-6 border border-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-white hover:text-black transition">
            ↗ See All
          </button>
        </div>

        {/* Right Merchandise Images */}
        <div className="relative flex items-center space-x-4">
          <img
            src="/src/assets/images.jpg"
            alt="Blue Shirt"
            className="h-28 md:h-36 lg:h-40 -rotate-2 transition-transform hover:scale-105"
          />
          <img
            src="/src/assets/images.jpg"
            alt="Red Shirt"
            className="h-36 md:h-44 lg:h-48 rotate-3 transition-transform hover:scale-105"
          />
          
        </div>
      </div>
    </section>
  );
};

export default MerchSection;
