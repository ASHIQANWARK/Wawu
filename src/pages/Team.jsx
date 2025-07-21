import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

import shafiImage from "../assets/images/shafi.jpg";
import ckImage from "../assets/images/WAWUP4.jpg";
import sharathImage from "../assets/images/sharath.jpg";
import shaleelaImage from "../assets/images/SHALEELA.jpg";

const team = [
  {
    name: "CK VINEETH",
    role: "INLL Ambassador (KERALA EDITION)",
    image: ckImage,
  },
  { name: "SHALEELA K", role: "Trustee", image: shaleelaImage },
  { name: "SHARATH K", role: "Founder", image: sharathImage },
  { name: "SHAFI SHOUKATH", role: "Co-Founder", image: shafiImage },
];

const Team = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center">
          Our Team
        </h2>
        <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          Meet the passionate individuals driving our mission forward with leadership, vision, and dedication.
        </p>

        {/* Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#07293d] rounded-2xl shadow-md overflow-hidden p-5 flex flex-col items-center hover:scale-105 transition-all"
            >
              {/* Image */}
              <div className="w-full aspect-[3/4] mb-4 rounded-md overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/300x400")
                  }
                />
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {member.name}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mt-1">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
