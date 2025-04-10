import React from "react";
import talentImg from "../assets/images/talent.webp";
import supportImg from "../assets/images/support.webp";
import trainingImg from "../assets/images/training.jpg";
import exposureImg from "../assets/images/INLL DP.jpg";
import mentorshipImg from "../assets/images/mentorship.jpg";

const services = [
  { title: "Talent Identification", image: talentImg },
  { title: "Comprehensive Support", image: supportImg },
  { title: "Professional Training", image: trainingImg },
  { title: "Tournaments and Exposure", image: exposureImg },
  { title: "Mentorship and Guidance", image: mentorshipImg },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 min-h-screen p-8">
      <h2 className="text-3xl font-bold text-center text-[#07293d]mb-8">Our Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative rounded-xl shadow-lg overflow-hidden group"
          >
            <img src={service.image} alt={service.title} className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-300" />
            <div className="absolute inset-0  bg-opacity-40 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
