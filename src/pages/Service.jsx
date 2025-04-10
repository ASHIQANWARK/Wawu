import React from "react";
import { motion } from "framer-motion";
import talentImg from "../assets/images/talent.webp";
import supportImg from "../assets/images/support.webp";
import trainingImg from "../assets/images/training.jpg";
import exposureImg from "../assets/images/INLL DP.jpg";
import mentorshipImg from "../assets/images/mentorship.jpg";

// Data
const services = [
  { title: "Talent Identification", image: talentImg },
  { title: "Comprehensive Support", image: supportImg },
  { title: "Professional Training", image: trainingImg },
  { title: "Tournaments and Exposure", image: exposureImg },
  { title: "Mentorship and Guidance", image: mentorshipImg },
];

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
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ServicesSection = () => {
  return (
    <section className="min-h-screen p-8 ">
      {/* Heading */}
      <motion.h2
        className="text-3xl font-bold text-center text-[#07293d] mb-8"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="relative rounded-xl shadow-lg overflow-hidden group"
            variants={cardVariant}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
            />
            <div className="absolute inset-0  bg-opacity-40 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">
                {service.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
