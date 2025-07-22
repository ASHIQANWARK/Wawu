import React from "react";
import heroBg from "../assets/images2/w24.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-white text-center px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-5xl w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Tagline */}
        <motion.h1
          className="text-lg sm:text-xl md:text-4xl font-extrabold italic tracking-wide mb-4 text-[#ffffff] drop-shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <span className="font-playfair italic">We Are With You (WAWU)</span>
        </motion.h1>

        {/* Main Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-3xl xl:text-5xl font-extrabold leading-snug mb-4 text-white drop-shadow-2xl"
          style={{ textShadow: "2px 2px 10px rgba(0,0,0,0.7)" }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empowering India's Football Stars of Tomorrow
        </motion.h2>

        {/* Sub Text */}
        <motion.p
          className="text-base sm:text-lg md:text-xl xl:text-2xl mb-8 leading-relaxed text-white/90"
          style={{ textShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Join our mission to discover and nurture young football talent from every corner of India.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Link to="/donate">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#11c120] hover:bg-[#0da117] text-white font-semibold py-3 px-6 rounded-xl transition duration-300 w-full sm:w-auto"
            >
              Donate Now
            </motion.button>
          </Link>

          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold py-3 px-6 rounded-xl transition duration-300 w-full sm:w-auto"
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
