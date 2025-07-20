import React from "react";
import { User } from "lucide-react";
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#061428] mb-4 uppercase tracking-wide">
          Our Team 
        </h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#07293d] rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center transition-all hover:scale-105"
            >
              {/* Profile Image */}
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

              {/* Name & Role */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-300 mt-1 text-sm">{member.role}</p>
              </div>

              {/* Social Icons */}
             
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
