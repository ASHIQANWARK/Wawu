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
      <div className="absolute inset-0 bg-black/70 bg-opacity-50 backdrop-brightness-60"></div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10 max-w-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Top Title */}
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl font-semibold uppercase tracking-widest text-[#108595] mb-4 itallic"
          style={{ textShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          We Are With You (WAWU)
        </motion.h2>

        {/* Main Title */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-snug"
          style={{ textShadow: "2px 2px 8px rgba(0, 0, 0, 0.6)" }}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Empowering India's Football Stars of Tomorrow
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed text-white"
          style={{ textShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Join us in our mission to discover young football talents and support
          their dreams through donations.
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
              className="bg-[#11698E] hover:bg-[#0D5C75] text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto"
            >
              Donate Now
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg transition duration-300 w-full sm:w-auto"
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
