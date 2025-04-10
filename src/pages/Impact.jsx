import React from "react";
import impactBg from "../assets/images/impact.jpg";

const ImpactSection = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 overflow-hidden"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 backdrop-blur-sm"></div>

      <div className="relative max-w-5xl mx-auto text-center px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#fb8005] via-white to-[#138808] bg-clip-text text-transparent animate-gradient">
          Our Impact
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          Since its inception, WAWU Foundation has:
        </p>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {[
            "Identified and supported hundreds of young football players across India.",
            "Facilitated access to professional coaching and training for underprivileged athletes.",
            "Built strong partnerships with academies, clubs, and sponsors to amplify our efforts.",
            "Inspired communities by showcasing the transformative power of football.",
          ].map((text, index) => (
            <div
              key={index}
              className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <p className="font-semibold text-gray-100 text-lg">{text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -bottom-20 left-0 w-48 h-48 bg-[#fb8005] rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -top-20 right-0 w-48 h-48 bg-[#138808] rounded-full opacity-20 blur-3xl"></div>
    </section>
  );
};

export default ImpactSection;