import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center">
        <h1 className="text-4xl font-bold">The Second City</h1>
        <p className="mt-4 text-lg">Comedy, Shows, and Classes for Everyone</p>
        <button className="mt-6 bg-red-500 px-6 py-3 rounded">View Shows</button>
      </div>
    </div>
  );
};

export default Hero;
