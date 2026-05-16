import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FaUserFriends, FaFutbol, FaSchool, FaGlobeAsia } from "react-icons/fa";

import missionImg from "../assets/images2/w23.jpg";
import visionImg from "../assets/images2/w67.jpg";
import wawVideo from "../assets/videos/WAWU.mp4";

const MissionVision = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  const impactData = [
    { icon: <FaUserFriends className="text-2xl sm:text-3xl" />, label: "Youth Reached", count: 5000 },
    { icon: <FaFutbol className="text-2xl sm:text-3xl" />, label: "Talents Scouted", count: 200 },
    { icon: <FaSchool className="text-2xl sm:text-3xl" />, label: "Events Conducted", count: 50 },
    { icon: <FaGlobeAsia className="text-2xl sm:text-3xl" />, label: "Districts Covered", count: 14 },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Mission Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Content */}
          <div className="space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-2 h-6 bg-emerald-500 rounded-full"></div>
              <span className="text-emerald-600 font-semibold uppercase tracking-wide text-xs">Our Mission</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Transforming Indian Football
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our mission is to transform the landscape of football in India by building a structured, inclusive, and sustainable development system that nurtures talent at every level of the game.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              We are committed to identifying and developing grassroots players, particularly from underserved communities, and providing them with access to high-quality training, mentorship, and competitive opportunities.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Through our initiatives, we aim to create a strong foundation for long-term player development that aligns with global standards. We are dedicated to creating a holistic football ecosystem that not only develops skilled athletes but also fosters discipline, leadership, and social impact, ultimately contributing to the growth and global recognition of Indian football.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl w-80 sm:w-96">
              <img
                src={missionImg}
                alt="WAWU Foundation Mission"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Video/Impact Section - SAME SIZE AS MISSION */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Video - SAME SIZE AS MISSION IMAGE */}
          <div className="flex justify-center">
            <div className="relative bg-black rounded-xl overflow-hidden shadow-xl w-80 sm:w-96 aspect-[4/3]">
              <video
                className="w-full h-full object-cover"
                src={wawVideo}
                controls
                muted
                playsInline
                poster={missionImg}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>

          {/* Content - SAME STRUCTURE AS MISSION */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-2 h-6 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-xs">Our Impact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Making a Difference
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our initiatives aren't just about football — they're about opportunity, discipline, community, and dreams. Watch how we're making a difference across India.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Through our comprehensive programs, we've been able to reach thousands of young athletes and provide them with the tools they need to succeed both on and off the field.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              From rural talent identification to professional mentorship, every step of our journey is focused on creating lasting change in communities across the nation.
            </p>
          </div>
        </motion.div>

        {/* Vision Section - SAME SIZE AS MISSION */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Content - SAME STRUCTURE AS MISSION */}
          <div className="space-y-4 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 mb-2">
              <div className="w-2 h-6 bg-purple-500 rounded-full"></div>
              <span className="text-purple-600 font-semibold uppercase tracking-wide text-xs">Our Vision</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              India's Football Future
            </h2>
            <p className="text-base text-gray-700 leading-relaxed">
              Our vision is to build a sustainable, inclusive, and world-class football ecosystem in India that transforms lives through the power of sport.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              We aspire to identify and nurture talent from grassroots levels, especially from underserved and underrepresented communities, ensuring that no potential goes unnoticed or unsupported.
            </p>
            <p className="text-base text-gray-700 leading-relaxed">
              Through structured training programs, professional mentorship, and access to quality infrastructure, we aim to create a clear and accessible pathway for aspiring footballers to reach their highest potential.
            </p>
          </div>

          {/* Image - SAME SIZE AS MISSION IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative rounded-xl overflow-hidden shadow-xl w-80 sm:w-96">
              <img
                src={visionImg}
                alt="WAWU Foundation Vision"
                className="w-full h-56 sm:h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          ref={ref}
          className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-2xl p-6 sm:p-10 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Our Impact in Numbers
            </h3>
            <p className="text-emerald-100 text-base max-w-2xl mx-auto">
              Measurable differences we've made across communities in India
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 group-hover:bg-white/20 transition-all duration-300 h-full flex flex-col justify-center">
                  <div className="text-white mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={item.count}
                        duration={2.5}
                        separator=","
                      />
                    ) : (
                      0
                    )}
                    +
                  </div>
                  <p className="text-emerald-100 text-xs font-medium">
                    {item.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;