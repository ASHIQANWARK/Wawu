import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import talentImg from "../assets/images2/w81.jpg";
import supportImg from "../assets/images2/w2.jpg";
import trainingImg from "../assets/images2/w18.jpg";
import mentorshipImg from "../assets/images2/w38.jpg";

// Data
const services = [
  { title: "Talent Identification", image: talentImg, link: "/talent" },
  { title: "Comprehensive Support", image: supportImg, link: "/compsupport" },
  { title: "Professional Training", image: trainingImg, link: "/pf" },
  { title: "Mentorship and Guidance", image: mentorshipImg, link: "/mentor" },
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
    <section className="bg-white pt-10 pb-6 px-4 sm:px-6 md:px-10">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-900"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Subheading */}
      <motion.p
        className="mt-3 text-center text-gray-600 max-w-2xl mx-auto text-base sm:text-lg"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        We offer end-to-end support to help young talents realize their potential —
        from discovery to development.
      </motion.p>

      {/* Cards Grid */}
      <motion.div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <Link to={service.link} key={index}>
            <motion.div
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              variants={cardVariant}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 sm:h-72 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold drop-shadow-md">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
