import React, { useState } from "react";

const SearchShows = () => {
  const [activeTab, setActiveTab] = useState("shows");

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center px-4">
      {/* Tab Navigation */}
      <div className="flex gap-8 text-white text-lg border-b border-gray-700 w-full max-w-lg justify-center mb-6">
        <button
          className={`pb-2 ${
            activeTab === "shows"
              ? "border-b-2 border-white font-semibold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("shows")}
        >
          Shows
        </button>
        <button
          className={`pb-2 ${
            activeTab === "classes"
              ? "border-b-2 border-white font-semibold"
              : "text-gray-400"
          }`}
          onClick={() => setActiveTab("classes")}
        >
          Classes
        </button>
      </div>

      {/* Search Box */}
      <div className="bg-white rounded-xl p-6 md:p-10 shadow-lg w-full max-w-3xl">
        <h2 className="text-center text-2xl font-bold text-black">Find a Show</h2>
        <p className="text-center text-gray-600 text-sm mb-6">
          Search all available shows in your area
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center">
          <select className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">
            <option>Location</option>
          </select>
          <input
            type="date"
            className="bg-gray-200 px-4 py-2 rounded-full text-gray-700"
            defaultValue="2025-03-27"
          />
          <select className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">
            <option>Show Type</option>
          </select>
          <select className="bg-gray-200 px-4 py-2 rounded-full text-gray-700">
            <option>Time of Day</option>
          </select>
        </div>

        {/* Search Button */}
        <div className="mt-6 flex flex-col items-center">
          <button className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold">
            Search Shows
          </button>
          <a href="#" className="mt-3 text-red-500 text-sm">
            or view all shows
          </a>
        </div>
      </div>
    </div>
  );
};

export default SearchShows;
