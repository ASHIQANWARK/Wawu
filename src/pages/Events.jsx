import React from "react";
import { useNavigate } from "react-router-dom";
import brochure from "../assets/images/INLLBrochure.pdf";
import { motion } from "framer-motion";
import logo from "../assets/images/INLL Logo.png";

const Events = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/inll");
  };

  const handleDownloadBrochure = () => {
    window.open(brochure, "_blank");
  };

  return (
    <div className="relative bg-[#07293d] text-white py-20 px-6 rounded-bl-full">
      {/* Heading at the Top */}
      <motion.h1
        className="text-5xl font-extrabold mb-12 text-center italic font-sans bg-gradient-to-r from-[#fa7e02] via-white to-[#1bde09] bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        India's Next Legend League 2025 [INLL]
      </motion.h1>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Left Side: Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={logo}
            alt="India's Next Legend League 2024"
            className="w-full max-w-lg rounded-3xl  hover:scale-105 transition-all duration-500"
          />
        </motion.div>

        {/* Right Side: Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          {/* Main Quote Section */}
          <motion.p
            className="text-lg leading-relaxed mt-4 text-gray-200 font-sans-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-4xl text-[#fa7e02] font-bold">❝</span>
            <strong className="text-[#ffffff]">
              The hunt for India&apos;s next football sensation begins! WAWU
              Foundation brings you the ultimate scouting event where raw talent
              meets opportunity. This is your chance to train, compete, and get
              scouted by top football academies.
            </strong>
            <span className="text-4xl text-[#fa7e02] font-bold">❞</span>
          </motion.p>

          {/* Event Details */}
          <motion.div
            className="mt-8 space-y-4 font-sans-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
          >
            <p className="text-lg font-extrabold font-sans-serif text-white">
              📍 <span className="text-[#fa7e02]">Locations:</span> Kerala
            </p>
            <p className="text-lg font-extrabold font-sans-serif  text-white">
              📅 <span className="text-white">Event Date:</span> April 2025
            </p>
            <p className="text-lg font-extrabold font-sans-serif  text-white">
              👥 <span className="text-[#1bde09]">Age Group:</span> 12 - 14
              Years
            </p>
          </motion.div>

          {/* Scholarship Section */}
          <motion.p
            className="mt-8 text-lg text-gray-200 font-sans-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <span className="text-4xl text-[#fa7e02] font-bold">❝</span>
            <strong className="text-[#ffffff]">
              Top 10 players will receive scholarships & direct academy
              placements! Don’t miss this chance to take your football dreams to
              the next level.
            </strong>
            <span className="text-4xl text-[#fa7e02] font-bold">❞</span>
          </motion.p>

          {/* Buttons Section */}
          <motion.div
            className="mt-12 flex flex-col md:flex-row justify-center md:justify-start gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button
              onClick={handleRegisterClick}
              className="bg-transparent text-[#1bde09] font-bold py-3 px-10 rounded-xl text-lg border-4 hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Register Now
            </button>

            <button
              onClick={handleDownloadBrochure}
              className="bg-transparent text-[#ffffff] font-bold py-3 px-10 rounded-xl text-lg border-2   transition-all duration-300 shadow-lg"
            >
              📄 Download Brochure
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;
