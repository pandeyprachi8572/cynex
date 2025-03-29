
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       {/* Top Navbar */}
//       <div className="bg-white text-black py-2 px-8 flex justify-center md:justify-between items-center text-sm border-b">
//         <div className="hidden md:flex space-x-6 py-6">
//           <h3 className="mx-3">A Location</h3>
//           <span className="cursor-pointer hover:text-gray-600">CHICAGO</span>
//           <span className="cursor-pointer hover:text-gray-600">TORONTO</span>
//           <span className="cursor-pointer hover:text-gray-600">NEW YORK</span>
//           <span className="cursor-pointer hover:text-gray-600">VIRTUAL</span>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <nav className="bg-black text-white py-4 px-8 flex justify-between items-center shadow-md relative">
//         <div className="text-2xl font-bold">The Second City</div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 py-6">
//           <li className="cursor-pointer hover:text-yellow-400">See a Show</li>
//           <li className="cursor-pointer hover:text-yellow-400">Classes + Education</li>
//           <li className="cursor-pointer hover:text-yellow-400">Plan an Event</li>
//           <li className="cursor-pointer hover:text-yellow-400">Corporate Solutions</li>
//           <li className="cursor-pointer hover:text-yellow-400">About Us</li>
//         </ul>

//         <div className="text-yellow-400 font-semibold hidden md:block">1-800-896-8120</div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
//           ☰
//         </div>

//         {/* Mobile Menu */}
//         {isOpen && (
//           <ul className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 md:hidden">
//             <li className="cursor-pointer hover:text-yellow-400">See a Show</li>
//             <li className="cursor-pointer hover:text-yellow-400">Classes + Education</li>
//             <li className="cursor-pointer hover:text-yellow-400">Plan an Event</li>
//             <li className="cursor-pointer hover:text-yellow-400">Corporate Solutions</li>
//             <li className="cursor-pointer hover:text-yellow-400">About Us</li>
//           </ul>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Top Navbar */}
      <div className="bg-white text-black py-2 px-8 flex justify-center md:justify-between items-center text-sm border-b">
        <div className="hidden md:flex space-x-6 py-6">
          <h2 className="mx-3 font-bold text-black-600  text-xl">A Location : </h2>
          <span className="cursor-pointer text-red-600 font-bold mx-4 text-xl">CHICAGO</span>
          <span className="cursor-pointer text-red-600 font-bold mx-4 text-xl ">TORONTO</span>
          <span className="cursor-pointer text-red-600 font-bold mx-4 text-xl" >NEW YORK</span>
          <span className="cursor-pointer text-red-600 font-bold mx-4 text-xl">VIRTUAL</span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-black text-white py-4 px-8 flex justify-between items-center shadow-md relative">
        <div className="text-2xl font-bold">The Second City</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 py-6">
          <li className="cursor-pointer hover:text-yellow-400">See a Show</li>
          <li className="cursor-pointer hover:text-yellow-400">Classes + Education</li>
          <li className="cursor-pointer hover:text-yellow-400">Plan an Event</li>
          <li className="cursor-pointer hover:text-yellow-400">Corporate Solutions</li>
          <li className="cursor-pointer hover:text-yellow-400">About Us</li>
        </ul>

        <div className="text-yellow-400 font-semibold hidden md:block">1-800-896-8120</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
          ☰
        </div>

        {/* Mobile Menu */}
        <ul
          className={`absolute top-full left-0 w-full bg-black text-white flex flex-col items-center py-4 space-y-4 transition-all duration-300 ease-in-out ${
            isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"
          } z-50`}
        >
          <li className="cursor-pointer hover:text-yellow-400">See a Show</li>
          <li className="cursor-pointer hover:text-yellow-400">Classes + Education</li>
          <li className="cursor-pointer hover:text-yellow-400">Plan an Event</li>
          <li className="cursor-pointer hover:text-yellow-400">Corporate Solutions</li>
          <li className="cursor-pointer hover:text-yellow-400">About Us</li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
