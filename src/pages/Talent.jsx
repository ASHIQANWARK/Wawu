import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaSearch, 
  FaMapMarkerAlt, 
  FaUsers, 
  FaStar,
  FaArrowRight,
  FaMedal,
  FaHeart,
  FaGlobeAsia
} from "react-icons/fa";
import talentImg from "../assets/images2/w18.jpg";

const Talent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const stats = [
    { number: "500+", label: "Talents Discovered", icon: FaSearch },
    { number: "50+", label: "Cities Covered", icon: FaMapMarkerAlt },
    { number: "10K+", label: "Youth Reached", icon: FaUsers },
    { number: "100+", label: "Success Stories", icon: FaStar }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-5 w-6 h-6 bg-blue-400 rounded-full opacity-10"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-3/4 right-10 w-8 h-8 bg-green-400 rounded-full opacity-5"
          animate={{ ...floatingAnimation, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-orange-400 rounded-full opacity-15"
          animate={{ ...floatingAnimation, delay: 2 }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 overflow-hidden -mt-20">
        {/* Background Gradient */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#11698e] via-[#0d5a7c] to-[#0a4a6b]"
          style={{ opacity, scale }}
        />
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:40px_40px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FaGlobeAsia className="text-yellow-400 text-lg" />
              <span className="text-white font-semibold text-sm tracking-wide">
                NATIONWIDE TALENT SEARCH
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">Discover</span>
              <br />
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Talent
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl sm:text-2xl md:text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Identifying and nurturing hidden sports talent from across the country, 
              especially in{" "}
              <span className="text-yellow-400 font-semibold">underserved communities</span>
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 group-hover:border-white/40 transition-all duration-300">
                    <stat.icon className="text-2xl text-yellow-400 mx-auto mb-2" />
                    <div className="text-2xl font-black text-white">{stat.number}</div>
                    <div className="text-sm text-gray-200 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        
      </section>

      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <Link
              to="/"
              className="hover:text-[#11698e] transition-colors duration-300 flex items-center gap-1 font-medium"
            >
              <span>Home</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-[#11698e] font-semibold">Discover Talent</span>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <section className="relative py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
                  Unearthing India's{" "}
                  <span className="text-[#11698e]">Future Champions</span>
                </h2>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p className="text-xl text-gray-600 font-light">
                    Every child deserves a chance to shine. Our{" "}
                    <span className="font-semibold text-[#11698e]">Discover Talent initiative</span> focuses on 
                    identifying and supporting raw sports talent in rural and under-resourced areas.
                  </p>

                  {/* Highlight Card 1 */}
                  <motion.div
                    className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-[#11698e]"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <FaSearch className="text-[#11698e] text-2xl mt-1 flex-shrink-0" />
                      <p className="text-gray-700">
                        Through dedicated camps, talent scouting events, and collaborations with
                        local schools and communities, we aim to provide these young athletes with 
                        the right training, mentorship, and exposure to excel in their sporting careers.
                      </p>
                    </div>
                  </motion.div>

                  {/* Highlight Card 2 */}
                  <motion.div
                    className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-2xl border-l-4 border-orange-400"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start gap-4">
                      <FaHeart className="text-orange-500 text-2xl mt-1 flex-shrink-0" />
                      <p className="text-gray-700 font-semibold">
                        We don't just scout talent—we nurture it, guide it, and help it rise
                        to national and international levels.
                      </p>
                    </div>
                  </motion.div>

                  {/* Process Steps */}
                  <motion.div
                    className="grid grid-cols-3 gap-4 pt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    {[
                      { step: "01", title: "Identify", color: "blue" },
                      { step: "02", title: "Nurture", color: "green" },
                      { step: "03", title: "Elevate", color: "orange" }
                    ].map((item, index) => (
                      <div key={index} className="text-center group">
                        <div className={`bg-${item.color}-100 rounded-xl p-4 mb-2 group-hover:bg-${item.color}-200 transition-colors`}>
                          <div className={`text-2xl font-black text-${item.color}-600`}>{item.step}</div>
                        </div>
                        <div className="text-sm font-semibold text-gray-700">{item.title}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[#11698e] to-cyan-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Main Image Container */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                  <motion.img
                    src={talentImg}
                    alt="Discover Talent - India's Future Champions"
                    className="w-full h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    whileHover={{ scale: 1.02 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Image Badge */}
                  <motion.div
                    className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-[#11698e] rounded-full p-2">
                        <FaMedal className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">Future Champions Program</div>
                        <div className="text-xs text-gray-600">Nationwide Talent Hunt</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-6 right-6 bg-yellow-400 text-gray-900 px-3 py-2 rounded-full text-sm font-bold shadow-lg"
                    animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="flex items-center gap-1">
                      <FaStar className="text-xs" />
                      <span>Elite Talent</span>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Corner Elements */}
                <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#11698e] rounded-tl-lg opacity-60"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#11698e] rounded-tr-lg opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#11698e] rounded-bl-lg opacity-60"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#11698e] rounded-br-lg opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Talent;