// import React from "react";

// const HistorySection = () => {
//   return (
//     <div className="bg-black text-white py-16 px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center">
//       {/* Left Side - Image Stack */}
//       <div className="lg:w-1/2 flex flex-wrap gap-4 justify-center">
//         <img
//           src="src/assets/download (3).jpg"
//           alt="Comedy 1"
//           className="rounded-lg shadow-lg transform rotate-[-5deg]"
//         />
//         <img
//           src="src/assets/download (3).jpg"
//           alt="Comedy 2"
//           className="rounded-lg shadow-lg transform rotate-[5deg]"
//         />
//         <img
//           src="src/assets/download (3).jpg"
//           alt="Comedy 3"
//           className="rounded-lg shadow-lg transform rotate-[-3deg]"
//         />
//         <img
//           src="src/assets/images.jpg"
//           alt="Comedy 4"
//           className="rounded-lg shadow-lg transform rotate-[3deg]"
//         />
//       </div>

//       {/* Right Side - Text Content */}
//       <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
//         <h2 className="text-4xl font-bold">Over 60 Years of Comedy</h2>
//         <p className="text-gray-400 mt-4">
//           The Second City brings the longest running improv stages, world’s largest training facilities, and a cast of 100’s of alumni that have become household names!
//         </p>

//         {/* Button */}
//         <div className="mt-6">
//           <button className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
//             View Our History
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HistorySection;
import React from "react";

const HistorySection = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-16 lg:px-24 flex flex-col lg:flex-row items-center">
      {/* Left Side - Image Stack */}
      <div className="lg:w-1/2 flex flex-wrap gap-4 justify-center relative">
        <img
          src="src/assets/download (3).jpg"
          alt="Comedy 1"
          className="rounded-lg shadow-lg transform rotate-[-8deg] absolute top-0 left-0 w-40 lg:w-56"
        />
        <img
          src="src/assets/download.jpg"
          alt="Comedy 2"
          className="rounded-lg shadow-lg transform rotate-[8deg] absolute top-10 left-10 w-40 lg:w-56"
        />
        <img
          src="src/assets/Homepage-Sliders-2800x1014-All-Shows.webp"
          alt="Comedy 3"
          className="rounded-lg shadow-lg transform rotate-[-5deg] absolute top-20 left-20 w-40 lg:w-56"
        />
        <img
          src="src/assets/images.jpg"
          alt="Comedy 4"
          className="rounded-lg shadow-lg transform rotate-[5deg] absolute top-28 left-28 w-40 lg:w-56"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
        <h2 className="text-4xl font-bold">Over 60 Years of Comedy</h2>
        <p className="text-gray-400 mt-4">
          The Second City brings the longest running improv stages, world’s largest training facilities, and a cast of 100’s of alumni that have become household names!
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="border border-gray-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
            View Our History
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
