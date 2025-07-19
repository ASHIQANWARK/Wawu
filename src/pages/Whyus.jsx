import React from "react";
import roleIMG from "../assets/images2/w84.jpg";
import teamimage from "../assets/images2/w10.jpg";
import potentialimg from "../assets/images2/w47.jpg";
import team2img from "../assets/images2/w30.jpg";
import { motion } from "framer-motion";

// Animation Variants
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const AboutSection = () => {
  const cards = [
    {
      src: potentialimg,
      title: "Unlocking Potential",
      desc: "India’s youth possess raw talent and passion for football, but they lack structured pathways to pursue the sport professionally.",
    },
    {
      src: teamimage,
      title: "Bridging the Gap",
      desc: "By providing access to professional coaching, financial support, and opportunities, WAWU fills the void in India’s football development ecosystem.",
    },
    {
      src: team2img,
      title: "Transforming Lives",
      desc: "Football is more than just a sport; it teaches discipline, teamwork, leadership, and resilience.",
    },
    {
      src: roleIMG,
      title: "Creating Role Models",
      desc: "We aim to develop football stars who inspire others and represent India on global platforms.",
    },
  ];

  return (
    <section className="bg-white py-8 md:py-12 lg:py-16">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900"
          variants={cardVariant}
        >
          Why <span className="text-[#11698e]">WAWU Foundation?</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
          variants={cardVariant}
        >
          India’s youth possess raw talent and passion for football, but they
          lack structured pathways to pursue the sport professionally. The
          current sports ecosystem is predominantly cricket-focused, leaving
          football players with limited avenues to showcase and hone their
          skills.
        </motion.p>

        {/* Cards Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          variants={container}
        >
          {cards.map(({ src, title, desc }) => (
            <motion.div
              key={title}
              className="bg-[#11698e] shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
              variants={cardVariant}
              whileHover={{ y: -8 }}
            >
              <img
                src={src}
                alt={title}
                className="w-full h-48 sm:h-52 md:h-56 lg:h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-bold text-lg text-white">{title}</h3>
                <p className="text-white text-sm mt-2">{desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
