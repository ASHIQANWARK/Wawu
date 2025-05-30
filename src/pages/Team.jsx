import React from "react";
import { User } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import shafiImage from "../assets/images/IMG_3596.png";
import ckImage from "../assets/images/WAWUP4.jpg";
import sharathImage from "../assets/images/sharath.jpg";
import shaleelaImage from "../assets/images/SHALEELA.jpg";

const team = [
  { name: "CK VINEETH", role: "INLL Ambassador (KERALA EDITION)", image: ckImage },
  { name: "SHALEELA K", role: "Trustee", image: shaleelaImage },
  { name: "SHARATH K", role: "Founder", image: sharathImage },
  { name: "SHAFI SHOUKATH", role: "Co-Founder", image: shafiImage },
];

const Team = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-[#07293d] mb-12 flex justify-center items-center gap-2">
          Our Team <User className="w-8 h-8 text-[#07293d]" />
        </h2>

        {/* Grid Layout for All Devices */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#07293d] rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center justify-between h-[450px] transition-all hover:scale-105"
            >
              {/* Profile Image */}
              <div className="w-full h-60 mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-md"
                  onError={(e) => (e.target.src = "https://via.placeholder.com/150")}
                />
              </div>
              {/* Name & Role */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-300 mt-1">{member.role}</p>
              </div>
              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                {[FaInstagram, FaXTwitter, FaLinkedin, FaFacebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="text-white hover:opacity-80 transition-transform transform hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
