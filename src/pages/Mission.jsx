import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUserFriends, FaFutbol, FaSchool, FaGlobeAsia } from "react-icons/fa";

import missionImg from "../assets/images2/w23.jpg";
import visionImg from "../assets/images2/w67.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const impactData = [
  { icon: <FaUserFriends />, label: "Youth Reached", count: 5000 },
  { icon: <FaFutbol />, label: "Talents Scouted", count: 200 },
  { icon: <FaSchool />, label: "Scholarships Given", count: 50 },
  { icon: <FaGlobeAsia />, label: "States Covered", count: 3 },
];

const MissionVision = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12 font-sans">
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
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-xl"
          />
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#11698e] uppercase mb-4">
              Our Mission
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              At <strong>WAWU Foundation</strong>, we are dedicated to uncovering and uplifting football talent across India. Our mission includes:
            </p>
            <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Identifying potential in rural and underserved areas</li>
              <li>Providing full scholarships for training and gear</li>
              <li>Mentorship from experienced coaches and leaders</li>
              <li>Guiding players toward professional football careers</li>
            </ul>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              We believe every child deserves a chance, no matter their background.
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
            <h2 className="text-3xl sm:text-4xl font-bold text-[#11698e] uppercase mb-4">
              Our Vision
            </h2>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We envision a future where every aspiring footballer has the tools and guidance to reach global heights, irrespective of financial limitations.
            </p>
            <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-700 text-sm sm:text-base">
              <li>Creating a pan-India grassroots football network</li>
              <li>International exposure and career opportunities</li>
              <li>Promoting sports as a powerful life path</li>
              <li>Collaboration with schools and federations</li>
            </ul>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
              At <strong>WAWU Foundation</strong>, football becomes a gateway to dignity, education, and hope.
            </p>
          </div>
          <img
            src={visionImg}
            alt="Vision"
            className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Impact Stats */}
        <div
          ref={ref}
          className="bg-gray-50 py-14 px-4 rounded-2xl shadow-inner text-center"
        >
          <p className="text-gray-700 max-w-3xl mx-auto text-base sm:text-lg mb-10">
            Our ongoing efforts have made measurable differences across India.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-[#11698e] text-4xl mb-3">{item.icon}</div>
                <div className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {inView ? <CountUp start={0} end={item.count} duration={2} separator="," /> : 0}+
                </div>
                <p className="text-sm sm:text-base text-gray-600 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
