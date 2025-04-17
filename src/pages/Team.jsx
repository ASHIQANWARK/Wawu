import React from "react";
import { User } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

import shafiImage from "../assets/images/IMG_3596.png";
import ckImage from "../assets/images/WAWUP4.jpg";
import abidImage from "../assets/images/abid.jpg";
import sharathImage from "../assets/images/sharath.jpg";
import shaleelaImage from "../assets/images/SHALEELA.jpg";

const team = [
  { name: "CK VINEETH", role: "INLL Ambassador (KERALA EDITION)", image: ckImage },
  { name: "SHALEELA K", role: "Trustee", image: shaleelaImage },
  { name: "SHARATH K", role: "Founder", image: sharathImage },
  { name: "SHAFI SHOUKATH", role: "Co-Founder", image: shafiImage },
  { name: "SAINUL ABID K.A", role: "CEO", image: abidImage },
];

const Team = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Heading Animation */}
        <motion.h2
          className="text-4xl font-bold text-center text-[#07293d] mb-12 flex justify-center items-center gap-2"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Our Team <User className="w-8 h-8 text-[#07293d]" />
        </motion.h2>

        {/* Auto-Scrolling Row */}
        <motion.div
          className="flex space-x-8"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30,
          }}
        >
          {/* Duplicate the team list for seamless loop */}
          {[...team, ...team].map((member, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[250px] bg-[#07293d] rounded-2xl shadow-lg overflow-hidden p-6 flex flex-col items-center justify-between h-[450px] transition-all"
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

              {/* Info Text */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-gray-300 mt-1">{member.role}</p>
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 mt-4">
                {[FaInstagram, FaXTwitter, FaLinkedin, FaFacebook].map((Icon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.3, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-white hover:opacity-80"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={22} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
