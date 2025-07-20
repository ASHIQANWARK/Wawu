import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  FaUserFriends,
  FaFutbol,
  FaSchool,
  FaGlobeAsia,
} from "react-icons/fa";

import missionImg from "../assets/images2/w23.jpg";
import visionImg from "../assets/images2/w67.jpg";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const impactData = [
  { icon: <FaUserFriends />, label: "Youth Reached", count: 15000 },
  { icon: <FaFutbol />, label: "Talents Scouted", count: 1200 },
  { icon: <FaSchool />, label: "Scholarships Given", count: 350 },
  { icon: <FaGlobeAsia />, label: "States Covered", count: 25 },
];

const MissionVision = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

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
            <h2 className="text-4xl font-bold text-[#11698e] mb-4 uppercase">
              Our Mission
            </h2>
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
            <h2 className="text-4xl font-bold text-[#11698e] mb-4 uppercase">
              Our Vision
            </h2>
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

        {/* Impact */}
        <div
          ref={ref}
          className="text-center bg-[#ffffff] py-16 px-6 rounded-2xl shadow-inner"
        >
          <p className="text-gray-700 max-w-3xl mx-auto text-lg mb-12">
            Through dedication and community engagement, WAWU Foundation is
            transforming lives and shaping the future of football in India.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="text-[#11698e] text-5xl mb-4">{item.icon}</div>
                <div className="text-3xl font-bold text-gray-800">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={item.count}
                      duration={2}
                      separator=","
                    />
                  ) : (
                    0
                  )}
                  +
                </div>
                <p className="text-gray-600 text-sm mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
