import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">Stay In The Loop</h2>
      <p className="text-gray-300 mb-6">
        Join our mailing list to stay in the loop with news and events.
      </p>

      {/* Location Checkbox */}
      <div className="flex flex-wrap justify-center gap-4 mb-6 text-gray-300">
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-red-500" />
          <span>Chicago</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-red-500" />
          <span>Toronto</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-red-500" />
          <span>NYC</span>
        </label>
        <label className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox text-red-500" />
          <span>Second City Works</span>
        </label>
      </div>

      {/* Email Input and Button */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:w-96 px-4 py-3 rounded-full bg-white text-black outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition">
          Subscribe Now →
        </button>
      </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-sm mt-8">
        Copyright © 2024 The Second City
      </p>
    </section>
  );
};

export default SubscribeSection;
