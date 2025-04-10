import React from "react";
import roleIMG from "../assets/images/rolemodel.jpg";
import teamimage from "../assets/images/team.jpg";
import potentialimg from "../assets/images/potential.jpg";
import team2img from "../assets/images/team2img.jpg";
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
  return (
    <section className="bg-white py-12">
      <motion.div
        className="container mx-auto text-center"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl font-bold text-gray-900"
          variants={cardVariant}
        >
          Why <span className="text-[#07293d]">WAWU Foundation?</span>
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto"
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          variants={container}
        >
          {/* Card 1 */}
          <motion.div
            className="bg-[#07293d] shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
            variants={cardVariant}
            whileHover={{ y: -8 }}
          >
            <img
              src={potentialimg}
              alt="Unlocking Potential"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg text-white">
                Unlocking Potential
              </h3>
              <p className="text-white text-sm mt-2">
                India’s youth possess raw talent and passion for football, but
                they lack structured pathways to pursue the sport professionally.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-[#07293d] shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
            variants={cardVariant}
            whileHover={{ y: -8 }}
          >
            <img
              src={teamimage}
              alt="Bridging the Gap"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg text-white">Bridging the Gap</h3>
              <p className="text-white text-sm mt-2">
                By providing access to professional coaching, financial support,
                and opportunities, WAWU fills the void in India’s football
                development ecosystem.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-[#07293d] shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
            variants={cardVariant}
            whileHover={{ y: -8 }}
          >
            <img
              src={team2img}
              alt="Transforming Lives"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg text-white">
                Transforming Lives
              </h3>
              <p className="text-white text-sm mt-2">
                Football is more than just a sport; it teaches discipline,
                teamwork, leadership, and resilience.
              </p>
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-[#07293d] shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
            variants={cardVariant}
            whileHover={{ y: -8 }}
          >
            <img
              src={roleIMG}
              alt="Creating Role Models"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg text-white">
                Creating Role Models
              </h3>
              <p className="text-white text-sm mt-2">
                We aim to develop football stars who inspire others and
                represent India on global platforms.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
