import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="col-span-1">
          <h2 className="text-2xl font-bold italic">The Second City</h2>
        </div>

        {/* Footer Links */}
        <div className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul className="space-y-1 text-gray-400">
              <li className="hover:text-white transition">Diversity & Inclusion</li>
              <li className="hover:text-white transition">Podcast</li>
              <li className="hover:text-white transition">Careers</li>
              <li className="hover:text-white transition">Auditions</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="space-y-1 text-gray-400">
              <li className="hover:text-white transition">Location Details</li>
              <li className="hover:text-white transition">Media Kit</li>
              <li className="hover:text-white transition">Gift Cards</li>
              <li className="hover:text-white transition">Merch</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="space-y-1 text-gray-400">
              <li className="hover:text-white transition">Accessibility</li>
              <li className="hover:text-white transition">Website Accessibility</li>
              <li className="hover:text-white transition">Terms of Services</li>
              <li className="hover:text-white transition">Privacy Policy</li>
              <li className="hover:text-white transition">Contact</li>
              <li className="hover:text-white transition">Contact Second City Works</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
