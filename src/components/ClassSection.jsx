import React from "react";

const ClassSection = () => {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center">
      {/* Left Side Content */}
      <div className="lg:w-1/2 text-center lg:text-left relative z-10">
        <h2 className="text-lg font-semibold uppercase tracking-wide">
          The Second City
        </h2>
        <h3 className="text-4xl font-bold mt-2">Take a class!</h3>
        <p className="text-gray-400 mt-4">
          Ready to join the dozens of distinguished alumni as a Second City
          student? Whether you're an amateur trying something new or a
          professional wanting to take your career to the next level, The Second
          City classes give you the opportunity to develop your skills in improv,
          acting, comedy writing, stand-up, and more. Sign up now by finding a
          class near you.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-red-600 px-6 py-3 rounded-full font-semibold">
            New Students
          </button>
          <button className="border border-white px-6 py-3 rounded-full font-semibold">
            Returning Students
          </button>
        </div>
      </div>

      {/* Right Side Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 relative">
        <div className="relative w-full">
          <img
            src="src/assets/Homepage-Sliders-2800x1014-All-Shows.webp"
            alt="Class"
            className="w-full rounded-lg"
          />
          {/* Circular Overlay */}
          <div className="absolute top-0 left-[-100px] lg:left-[-150px] w-[300px] h-[300px] bg-black rounded-full hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default ClassSection;
