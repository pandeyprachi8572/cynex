import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok } from "react-icons/fa";

const SocialSection = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Follow us on Social</h2>
        
        {/* Social Icons */}
        <div className="flex justify-center space-x-4 md:space-x-6 mb-6">
          {[FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTiktok].map((Icon, index) => (
            <div key={index} className="p-3 border border-gray-600 rounded-full hover:bg-white hover:text-black transition">
              <Icon className="text-xl md:text-2xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex overflow-x-auto scrollbar-hide space-x-2 px-2 md:px-2">
        {[
          "/src/assets/download.jpg",
          "/src/assets/download (3).jpg",
          "/src/assets/download (2).jpg",
          "/src/assets/download (1).jpg",
          "/src/assets/images.jpg",
        ].map((img, index) => (
          <img key={index} src={img} alt={`Gallery ${index}`} className="w-30 h-40 object-cover rounded-lg shadow-lg"/>
        ))}
      </div>
    </section>
  );
};

export default SocialSection;
