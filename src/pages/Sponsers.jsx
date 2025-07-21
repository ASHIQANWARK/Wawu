import React from "react";

// Import sponsor logos
import sponsor1 from "../assets/images/iQue Logo.png";
import sponsor2 from "../assets/images/iQue Logo.png";
import sponsor3 from "../assets/images/iQue Logo.png";

const sponsors = [
  { id: 1, image: sponsor1, name: "Sponsor 1" },
  { id: 2, image: sponsor2, name: "Sponsor 2" },
  { id: 3, image: sponsor3, name: "Sponsor 3" },
];

const Sponsors = () => {
  return (
    <div className="bg-white py-14">
      <div className="text-center mb-10 px-4">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">Our Sponsors</h2>
        <p className="text-gray-700 mt-2 max-w-xl mx-auto">
          We proudly collaborate with organizations that believe in youth empowerment through football.
        </p>
      </div>

      {/* Static Sponsor Grid */}
      <div className="flex justify-center gap-8 flex-wrap px-4">
        {sponsors.map((sponsor, index) => (
          <div
            key={index}
            className="w-[160px] h-[160px] bg-[#f0f0f0] rounded-xl shadow-md flex items-center justify-center p-4"
          >
            <img
              src={sponsor.image}
              alt={sponsor.name}
              className="object-contain max-h-full max-w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
