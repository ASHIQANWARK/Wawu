import React from "react";
import { motion } from "framer-motion";
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
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  { 
    name: "SHALEELA K", 
    role: "Trustee", 
    image: shaleelaImage,
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  { 
    name: "SHARATH K", 
    role: "Founder", 
    image: sharathImage,
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  { 
    name: "SHAFI SHOUKATH", 
    role: "Co-Founder", 
    image: shafiImage,
    social: {
      instagram: "#",
      facebook: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
];

const Team = () => {
  const socialIcons = [
    { icon: FaInstagram, color: "hover:text-pink-500", bg: "bg-pink-500" },
    { icon: FaFacebook, color: "hover:text-blue-600", bg: "bg-blue-600" },
    { icon: FaLinkedin, color: "hover:text-blue-500", bg: "bg-blue-500" },
    { icon: FaXTwitter, color: "hover:text-black", bg: "bg-black" },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-3 h-10 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
              Our Leadership
            </span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Dream Team</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The passionate visionaries and dedicated professionals driving our mission forward 
            with exceptional leadership, innovation, and commitment to excellence.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" }
                }
              }}
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 h-full flex flex-col">
                
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <div className="aspect-[3/4] relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                      onError={(e) => (e.target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400")}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Social Icons Overlay */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      {socialIcons.map((SocialIcon, idx) => (
                        <motion.a
                          key={idx}
                          href={member.social[Object.keys(member.social)[idx]]}
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:scale-110 transition-transform duration-200"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <SocialIcon.icon className="text-sm" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  {/* Special Badge for Founder/Co-Founder */}
                  {(member.role === "Founder" || member.role === "Co-Founder") && (
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium mb-3 ${
                      member.role === "Founder" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-emerald-100 text-emerald-800"
                    }`}>
                      <div className={`w-2 h-2 rounded-full ${
                        member.role === "Founder" ? "bg-blue-500" : "bg-emerald-500"
                      }`}></div>
                      {member.role}
                    </div>
                  )}

                  {/* Contact Button */}
                  <motion.button
                    className="mt-auto w-full bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 py-3 rounded-xl font-medium hover:from-blue-50 hover:to-cyan-50 hover:text-blue-600 transition-all duration-300 border border-gray-200 group-hover:border-blue-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Connect
                  </motion.button>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-2xl transition-all duration-300 pointer-events-none"></div>
              </div>

              {/* Floating Background Effect */}
              <div className="absolute -z-10 -inset-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 lg:p-12 border border-blue-100 max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Join Our Mission
            </h3>
            <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
              Ready to be part of something extraordinary? Connect with our team and discover how you can contribute to our vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Team
              </motion.button>
              <motion.button
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Openings
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;