import React from "react";

const Services = () => {
  const services = [
    { title: "Comedy Shows", desc: "Enjoy live comedy performances", img: "/images/show.jpg" },
    { title: "Classes & Education", desc: "Learn improv and acting", img: "/images/class.jpg" },
    { title: "Corporate Events", desc: "Book team-building sessions", img: "/images/event.jpg" }
  ];

  return (
    <div className="container mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <img src={service.img} alt={service.title} className="rounded-lg mb-4" />
            <h3 className="text-xl font-bold">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
