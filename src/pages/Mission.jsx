import React from "react";
import { motion } from "framer-motion";
import missionImg from "../assets/images2/w23.jpg";
import visionImg from "../assets/images2/w67.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const MissionVision = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Mission */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <img
            src={missionImg}
            alt="Mission"
            className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-lg"
          />
          <div>
            <h2 className="text-4xl font-bold text-[#11698e] mb-4 uppercase">Our Mission</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>WAWU Foundation</strong>, we are committed to uncovering and nurturing football talent from every corner of India. Our goal is to create a platform that empowers youth through:
            </p>
            <ul className="list-disc ml-5 mt-4 text-gray-700 text-base space-y-2">
              <li>Talent scouting in rural and underrepresented communities</li>
              <li>Providing full scholarships for training and equipment</li>
              <li>Connecting players with certified coaches and mentors</li>
              <li>Helping players build professional careers in sports</li>
            </ul>
            <p className="mt-4 text-gray-700 text-base">
              We believe that passion and talent should never be limited by background or finances.
            </p>
          </div>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <div className="order-last md:order-first">
            <h2 className="text-4xl font-bold text-[#11698e] mb-4 uppercase">Our Vision</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our vision is to see every talented young footballer in India realize their full potential, regardless of their social or economic status.
            </p>
            <ul className="list-disc ml-5 mt-4 text-gray-700 text-base space-y-2">
              <li>Build a nationwide grassroots football ecosystem</li>
              <li>Offer international exposure and trials for top players</li>
              <li>Raise awareness about sports as a career option</li>
              <li>Collaborate with schools, academies, and federations</li>
            </ul>
            <p className="mt-4 text-gray-700 text-base">
              <strong>WAWU Foundation</strong> envisions a future where football is not just a game but a gateway to dignity, education, and success.
            </p>
          </div>
          <img
            src={visionImg}
            alt="Vision"
            className="w-full h-72 sm:h-96 object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
