import React from "react";
import { motion } from "framer-motion";
import impactBg from "../assets/images2/w91.jpg";

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ImpactSection = () => {
  const impacts = [
    "Identified and supported hundreds of young football players across India.",
    "Facilitated access to professional coaching and training for underprivileged athletes.",
    "Built strong partnerships with academies, clubs, and sponsors to amplify our efforts.",
    "Inspired communities by showcasing the transformative power of football.",
  ];

  return (
    <section
      className="relative bg-cover bg-center text-white pt-20 sm:pt-28 md:pt-32 lg:pt-36 pb-16 lg:pb-20 overflow-hidden"
      style={{ backgroundImage: `url(${impactBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center px-4 z-10">
        {/* Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#fb8005] via-white to-[#138808] bg-clip-text text-transparent animate-gradient"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Our Impact
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Since its inception, WAWU Foundation has:
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {impacts.map((text, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <p className="font-semibold text-gray-100 text-lg">{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Glow Effects */}
      <div className="absolute -bottom-20 left-0 w-48 h-48 bg-[#fb8005] rounded-full opacity-20 blur-3xl z-0"></div>
      <div className="absolute -top-20 right-0 w-48 h-48 bg-[#138808] rounded-full opacity-20 blur-3xl z-0"></div>
    </section>
  );
};

export default ImpactSection;
