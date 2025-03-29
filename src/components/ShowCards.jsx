
import React from "react";
import { FaMapMarkerAlt, FaFilter } from "react-icons/fa"
const ShowCards = () => {
  return (
    <div className="bg-gray-100  w-full">
      {/* Header (Left Aligned & Full Width) */}
      <div className="bg-red-900 text-white  text-3xl font-bold w-full text-left py-5 px-5">
        Find a show in Chicago, Toronto, or New York
      </div>

      {/* Filters Section */}
      <div className="bg-white p-6 shadow-md rounded-lg flex flex-wrap gap-4 mt- items-center justify-between">
        <button className="flex items-center gap-2 border px-5 py-4 rounded-lg text-lg">
          <FaFilter /> Filters
        </button>
        <select className="border px-5 py-4 rounded-lg text-lg">
          <option>Location</option>
        </select>
        <select className="border px-5 py-4 rounded-lg text-lg">
          <option>Date</option>
        </select>
        <select className="border px-5 py-4 rounded-lg text-lg">
          <option>Show Type</option>
        </select>
        <select className="border px-5 py-4 rounded-lg text-lg">
          <option>Time of Day</option>
        </select>

        {/* View Toggle */}
        <div className="flex items-center text-lg gap-4">
          <span>Calendar View</span>
          <input type="checkbox" className="toggle toggle-lg" />
          <span className="font-semibold">List View</span>
        </div>
      </div>

      
    </div>
  );
};

export default ShowCards;
