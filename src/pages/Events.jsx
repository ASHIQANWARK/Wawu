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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.div
      className="relative bg-[#07293d] text-white py-20 px-6 rounded-bl-full"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {/* Heading */}
      <motion.h1
        className="text-5xl font-extrabold mb-12 text-center italic font-sans bg-gradient-to-r from-[#fa7e02] via-white to-[#1bde09] bg-clip-text text-transparent"
        variants={fadeUp}
      >
        India's Next Legend League 2025 [INLL]
      </motion.h1>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          variants={fadeUp}
        >
          <motion.img
            src={logo}
            alt="India's Next Legend League 2024"
            className="w-full max-w-lg rounded-3xl hover:scale-105 transition-all duration-500"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

        {/* Text Content */}
        <motion.div className="md:w-1/2 w-full text-center md:text-left space-y-6">
          {/* Quote */}
          <motion.p
            className="text-lg leading-relaxed text-gray-200 font-sans-serif"
            variants={fadeUp}
          >
            <span className="text-4xl text-[#fa7e02] font-bold">❝</span>
            <strong className="text-white">
              The hunt for India&apos;s next football sensation begins! WAWU
              Foundation brings you the ultimate scouting event where raw talent
              meets opportunity. This is your chance to train, compete, and get
              scouted by top football academies.
            </strong>
            <span className="text-4xl text-[#fa7e02] font-bold">❞</span>
          </motion.p>

          

          {/* Scholarship */}
          <motion.p
            className="text-lg text-gray-200 font-sans-serif"
            variants={fadeUp}
          >
            <span className="text-4xl text-[#fa7e02] font-bold">❝</span>
            <strong className="text-white">
              Top 10 players will receive scholarships & direct academy
              placements! Don’t miss this chance to take your football dreams to
              the next level.
            </strong>
            <span className="text-4xl text-[#fa7e02] font-bold">❞</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="mt-8 flex flex-col md:flex-row justify-center md:justify-start gap-6"
            variants={fadeUp}
          >
            <motion.button
              onClick={handleRegisterClick}
              className="bg-transparent text-[#1bde09] font-bold py-3 px-10 rounded-xl text-lg border-4 hover:scale-105 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>

            <motion.button
              onClick={handleDownloadBrochure}
              className="bg-transparent text-white font-bold py-3 px-10 rounded-xl text-lg border-2 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              📄 Download Brochure
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Events;
