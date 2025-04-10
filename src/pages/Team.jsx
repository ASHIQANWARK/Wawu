import React from "react";
import { User } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import shafiImage from "../assets/images/IMG_3596.png";
import ckImage from "../assets/images/WAWUP4.jpg";
import abidImage from "../assets/images/abid.jpg";
import sharathImage from "../assets/images/sharath.jpg";
import shaleelaImage from "../assets/images/SHALEELA.jpg"

const team = [
  { name: "CK VINEETH", role: "INLL Ambassador (KERALA EDITION)", image: ckImage },
  { name: "SHALEELA K", role: "Trustee", image: shaleelaImage },
  { name:"SHARATH K", role:"Founder", image:sharathImage },
  { name: "SHAFI SHOUKATH", role: "Co-Founder", image: shafiImage },
  { name: "SAINUL ABID K.A", role: "CEO", image:abidImage },
];

const Team = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold text-center text-[#07293d] mb-12">
          Our Team
          <User className="inline-block w-8 h-8 ml-2 text-[#07293d]" />
        </h2>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#07293d] rounded-lg shadow-lg overflow-hidden p-6 flex flex-col items-center transition-all hover:shadow-xl hover:scale-105 w-full h-[450px]"
            >
              {/* Profile Image (Full Width & Height in Card) */}
              <div className="w-full h-60 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold text-white text-center">{member.name}</h3>
              <p className="text-gray-300 text-center">{member.role}</p>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                <a href="https://instagram.com" className="text-white hover:text-[#E1306C] transition" target="_blank" rel="noopener noreferrer">
                  <FaInstagram size={22} />
                </a>
                <a href="https://twitter.com" className="text-white hover:text-[#1DA1F2] transition" target="_blank" rel="noopener noreferrer">
                  <FaXTwitter size={22} />
                </a>
                <a href="https://linkedin.com" className="text-white hover:text-[#0077B5] transition" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={22} />
                </a>
                <a href="https://facebook.com" className="text-white hover:text-[#1877F2] transition" target="_blank" rel="noopener noreferrer">
                  <FaFacebook size={22} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
