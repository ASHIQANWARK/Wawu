import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // required for routing
import talentImg from "../assets/images2/w81.jpg";
import supportImg from "../assets/images2/w2.jpg";
import trainingImg from "../assets/images2/w18.jpg";
import mentorshipImg from "../assets/images2/w38.jpg";

// Data with route paths
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
    <section className="min-h-screen p-8 bg-white">
      {/* Heading */}
      <motion.h2
        className="text-5xl font-bold text-center text-[#11698e] mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h2>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service, index) => (
          <Link to={service.link} key={index}>
            <motion.div
              className="relative rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
              variants={cardVariant}
              whileHover={{ scale: 1.03 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/20 bg-opacity-40 flex items-end p-4">
                <h3 className="text-white text-lg font-semibold">{service.title}</h3>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
