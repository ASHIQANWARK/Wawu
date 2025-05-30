import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      id="about"
      className="px-4 sm:px-6 md:px-12 py-16 sm:py-20 bg-[#07293d] text-white text-center rounded-b-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h1>

      {/* Content */}
      <motion.div
        className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-gray-200"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          At <span className="font-semibold text-white">WAWU Foundation</span>, we are shaping the future of football by identifying and nurturing the next generation of stars. Our dedicated scouting team seeks out raw talent, providing young players with world-class training and life-changing opportunities.
        </p>

        <motion.p
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
        >
          But we go beyond training—we believe that financial barriers should never hold back a player’s dreams. Through sponsorships and fundraising, we ensure that every talented player gets the support they need to reach the global stage.
        </motion.p>

        <motion.p
          className="mt-6 font-semibold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Join us in empowering future champions. Together, we can build a legacy of excellence.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;
