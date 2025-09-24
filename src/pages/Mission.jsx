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
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Mission Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-8 bg-emerald-500 rounded-full"></div>
              <span className="text-emerald-600 font-semibold uppercase tracking-wide text-sm">Our Mission</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Empowering Young Football Talent Across India
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-semibold text-emerald-600">WAWU Foundation</span>, we are dedicated to 
              uncovering and uplifting football talent from every corner of the country.
            </p>
            <ul className="space-y-3">
              {[
                "Identifying potential in rural and underserved areas",
                "Providing full scholarships for training and gear",
                "Mentorship from experienced coaches and leaders",
                "Guiding players toward professional football careers"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 italic border-l-4 border-emerald-500 pl-4 py-2">
              We believe every child deserves a chance, no matter their background.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={missionImg}
                alt="WAWU Foundation Mission"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Video Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Video - Perfectly Fitted Small Container */}
          <div className="relative">
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl aspect-video max-w-md mx-auto lg:mx-0">
              <video
                className="w-full h-full object-contain"
                src={wawVideo}
                controls
                muted
                playsInline
                poster={missionImg}
              >
                Your browser does not support the video tag.
              </video>
            </div>
            {/* Video Label */}
            <div className="text-center mt-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                Watch Our Story
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-8 bg-blue-500 rounded-full"></div>
              <span className="text-blue-600 font-semibold uppercase tracking-wide text-sm">Our Impact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Transforming Lives Through Football
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our initiatives aren't just about football — they're about opportunity, 
              discipline, community, and dreams. Watch how we're making a difference.
            </p>
            <ul className="space-y-3">
              {[
                "Real stories from the field and inspiring journeys",
                "Comprehensive training and development programs",
                "Community building through sports initiatives",
                "Life skills and career guidance alongside football"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <p className="text-blue-800 text-sm">
                <strong>Featured:</strong> See our players in action and hear their inspiring stories of transformation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Content */}
          <div className="space-y-6 order-2 lg:order-2">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-8 bg-purple-500 rounded-full"></div>
              <span className="text-purple-600 font-semibold uppercase tracking-wide text-sm">Our Vision</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
              Building India's Football Future
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where every aspiring footballer has the tools 
              and guidance to reach global heights, irrespective of financial limitations.
            </p>
            <ul className="space-y-3">
              {[
                "Creating a pan-India grassroots football network",
                "International exposure and career opportunities",
                "Collaboration with schools and sports federations",
                "Promoting sports as a powerful life path"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-600 italic border-l-4 border-purple-500 pl-4 py-2">
              At WAWU Foundation, football becomes a gateway to dignity, education, and hope.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={visionImg}
                alt="WAWU Foundation Vision"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          ref={ref}
          className="bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl p-8 sm:p-12 shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h3>
            <p className="text-emerald-100 text-lg max-w-2xl mx-auto">
              Measurable differences we've made across communities in India
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {impactData.map((item, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 group-hover:bg-white/20 transition-all duration-300 h-full flex flex-col justify-center">
                  <div className="text-white mb-3 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white mb-2">
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
                  <p className="text-emerald-100 text-xs sm:text-sm font-medium">
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