import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGlobe,
  FaTrophy,
  FaUserCheck,
  FaUsers,
  FaSearch,
  FaHandshake,
  FaDatabase,
  FaMoneyBillWave,
  FaUser,
  FaTeamspeak,
  FaArrowRight,
  FaStar,
  FaFutbol,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
  FaRegClock,
} from "react-icons/fa";
import bannerImage from "../assets/images/INLL Logo.png";
import wawuLogo from "../assets/images/wawu white.png";
import whyINLLImage from "../assets/images2/wawu 01.jpg";
import highlightsImage from "../assets/images2/wawu 05.jpg";
import supportImage from "../assets/images/INLL Logo.png";


const INLLBrochure = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-black overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-10 w-6 h-6 bg-yellow-400 rounded-full opacity-20"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-3/4 right-20 w-8 h-8 bg-blue-400 rounded-full opacity-15"
          animate={{ ...floatingAnimation, delay: 1 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-green-400 rounded-full opacity-25"
          animate={{ ...floatingAnimation, delay: 2 }}
        />
      </div>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-[#11698e] via-[#0d5a7c] to-[#0a4a6b] min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 overflow-hidden">
       
        
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left space-y-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full mb-4"
              >
                <FaStar className="text-yellow-400 text-sm" />
                <span className="text-white text-sm font-semibold">ELITE FOOTBALL TOURNAMENT</span>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-black leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <span className="bg-gradient-to-r from-[#fb8005] via-white to-[#138808] bg-clip-text text-transparent">
                  India's Next
                </span>
                <br />
                <span className="text-white">Legend League</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-4"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white/90">
                  Searching for India's Football Legends
                </h2>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <div className="text-center sm:text-left">
                    <p className="text-white/80 text-lg">Presented By</p>
                    <motion.img
                      src={wawuLogo}
                      alt="WAWU Logo"
                      className="h-15 sm:h-15 mt-2 mx-auto sm:mx-0 hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>
                  
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="pt-6"
              >
                <motion.button
                  className="bg-gradient-to-r from-[#fb8005] to-[#e67300] text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Register Now
                  <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Banner */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
                <motion.img
                  src={bannerImage}
                  alt="INLL Trophy"
                  className="w-full max-w-md mx-auto hover:scale-105 transition-transform duration-500"
                  whileHover={{ scale: 1.05, rotate: 1 }}
                />
                <motion.div
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#fb8005] to-[#e67300] text-white px-6 py-3 rounded-2xl shadow-xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="font-bold text-sm">SINCE 2020</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        
      </header>

      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <ul className="flex items-center space-x-2 text-sm text-white">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors duration-300 flex items-center gap-1"
              >
                <span>Home</span>
              </Link>
            </li>
            <li className="text-white/40">/</li>
            <li className="text-yellow-400 font-semibold">INLL Tournament</li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <section className="relative py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gradient-to-br from-[#07293d] to-[#0a3750] rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <motion.h2
                  className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  About the <span className="text-yellow-400">Tournament</span>
                </motion.h2>
                <motion.p
                  className="text-lg text-white/90 leading-relaxed"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  India's Next Legend League (INLL) is WAWU's flagship football tournament 
                  designed to discover and nurture the best football talents from across the nation. 
                  This premier platform empowers aspiring players to showcase their skills, 
                  gain national visibility, and receive comprehensive support to achieve their 
                  dreams of becoming professional footballers.
                </motion.p>
              </div>
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-[#fb8005] to-[#e67300] p-1 rounded-2xl shadow-2xl">
                  <div className="bg-[#07293d] rounded-xl p-6 text-center">
                    <FaTrophy className="text-6xl text-yellow-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Elite Competition</h3>
                    <p className="text-white/80">National Level Tournament</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why INLL Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Why <span className="text-[#11698e]">INLL?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover what makes INLL the ultimate platform for football excellence
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={whyINLLImage}
                  alt="Why INLL"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">Elite Scouting Network</h3>
                  <p className="text-white/80">Nationwide Talent Discovery</p>
                </div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: FaSearch,
                  title: "Scout Hidden Talents",
                  description: "Identifying promising players from grassroots levels across India.",
                  color: "blue"
                },
                {
                  icon: FaTrophy,
                  title: "Competitive Platform",
                  description: "Providing an opportunity for players to showcase their skills on a national stage.",
                  color: "yellow"
                },
                {
                  icon: FaHandshake,
                  title: "Professional Connections",
                  description: "Linking talents with professional training, mentors, and sponsors for career growth.",
                  color: "green"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group hover:border-[#11698e]/20"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-${item.color}-100 group-hover:bg-${item.color}-50 transition-colors`}>
                      <item.icon className={`text-2xl text-${item.color}-500`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tournament Highlights */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-[#11698e] to-[#0a4a6b] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              Tournament <span className="text-yellow-400">Highlights</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Experience the pinnacle of football competition with unprecedented opportunities
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Features Grid */}
            <motion.div
              className="grid md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: FaGlobe,
                  title: "Nationwide Reach",
                  description: "The tournament will be organized across India, ensuring inclusivity from villages to cities.",
                },
                {
                  icon: FaTrophy,
                  title: "Competitive Format",
                  description: "Teams will compete in a league format to provide maximum exposure to every player.",
                },
                {
                  icon: FaUserCheck,
                  title: "WAWU Representatives",
                  description: "WAWU scouts will be present at every tournament to identify and select promising talents.",
                },
                {
                  icon: FaMapMarkerAlt,
                  title: "Multiple Cities",
                  description: "Tournaments held across major cities to ensure wide participation and accessibility.",
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl mb-4 group-hover:bg-white/30 transition-colors">
                      <item.icon className="text-2xl text-yellow-400" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={highlightsImage}
                  alt="Tournament Highlights"
                  className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <div className="flex items-center gap-2 text-yellow-400 mb-2">
                    <FaFutbol className="text-xl" />
                    <span className="font-bold">Elite Competition</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">National Level Excellence</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Post-Selection Support */}
      <section className="py-20 px-4 sm:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-4">
              Post-Selection <span className="text-[#11698e]">Support</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive career development and professional guidance for selected talents
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={supportImage}
                  alt="Post-Selection Support"
                  className="w-full h-full object-fit transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </motion.div>

            {/* Benefits */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: FaDatabase,
                  title: "Continuous Tracking",
                  description: "Your journey is recorded in WAWU's database for ongoing growth and development.",
                  color: "blue"
                },
                {
                  icon: FaMoneyBillWave,
                  title: "Funding & Training",
                  description: "We provide funding support for training, accommodation, and education.",
                  color: "yellow"
                },
                {
                  icon: FaUsers,
                  title: "Professional Network",
                  description: "Gain exclusive access to mentors, clubs, and career opportunities.",
                  color: "green"
                },
                {
                  icon: FaCheckCircle,
                  title: "Career Guidance",
                  description: "Personalized career planning and professional development roadmap.",
                  color: "emerald"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-${item.color}-100 group-hover:bg-${item.color}-50 transition-colors`}>
                      <item.icon className={`text-2xl text-${item.color}-500`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                    <FaArrowRight className="text-gray-400 group-hover:text-[#11698e] group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="py-20 px-4 sm:px-8 bg-gradient-to-br from-[#07293d] to-[#0a3750] text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-4">
              Ready to <span className="text-yellow-400">Register?</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Join India's most prestigious football tournament and kickstart your legendary journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Registration Options */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              {[
                {
                  icon: FaUser,
                  title: "Individual Players",
                  description: "Register as an individual player to showcase your talent",
                  link: "https://docs.google.com/forms/d/e/1FAIpQLSfNwDFGGwMVL5MMon_m2eVasd6-ntdRy8VZuuftFwTUcSa-9w/viewform?usp=header",
                  color: "orange"
                },
                {
                  icon: FaTeamspeak,
                  title: "Individual Team",
                  description: "Register your complete team for the tournament",
                  link: "https://docs.google.com/forms/d/e/1FAIpQLSdKyREa7JdRmRtreUtJxqzbiJyln7NMYTmyFUbqxzLvfLYp8g/viewform?usp=header",
                  color: "blue"
                },
                {
                  icon: FaUsers,
                  title: "Organizing Partner",
                  description: "Partner with us to organize tournaments in your city",
                  link: "https://docs.google.com/forms/d/e/1FAIpQLSdxhOKZREb_hj-0xMmVQpxmAkxaZHDmj00LQFD2sdWUAMn3JA/viewform?usp=header",
                  color: "green"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group hover:bg-white/15"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl bg-${item.color}-500/20 group-hover:bg-${item.color}-500/30 transition-colors`}>
                      <item.icon className={`text-2xl text-${item.color}-400`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-white/80 text-sm">{item.description}</p>
                    </div>
                    <FaArrowRight className="text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Registration Info */}
            <motion.div
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <FaRegClock className="text-4xl text-yellow-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">How to Register</h3>
                <p className="text-white/80">Simple steps to join the tournament</p>
              </div>

              <div className="space-y-4">
                {[
                  "Complete the registration form online",
                  "Participation is completely free of charge",
                  "Attend the trials at your nearest city",
                  "Showcase your skills to our expert scouts",
                  "Get selected for professional training"
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheckCircle className="text-white text-sm" />
                    </div>
                    <span className="text-white/90">{step}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-4 bg-yellow-400/20 rounded-xl border border-yellow-400/30"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-2 text-yellow-400">
                  <FaCalendarAlt />
                  <span className="font-semibold">Early Registration Recommended</span>
                </div>
                <p className="text-white/80 text-sm mt-1">
                  Limited spots available. Register early to secure your participation.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-8 bg-gradient-to-r from-[#fb8005] to-[#e67300] text-white">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6">
            Ready to Become a Legend?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Don't miss this opportunity to showcase your talent on a national platform. 
            Your football journey starts here.
          </p>
          <motion.button
            className="bg-white text-[#fb8005] px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 group"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Register Your Interest
            <FaArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default INLLBrochure;