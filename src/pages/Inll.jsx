import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
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
} from "react-icons/fa";
import bannerImage from "../assets/images/INLL Logo.png";
import wawuLogo from "../assets/images/wawu white.png";
import whyINLLImage from "../assets/images/hero4.jpg";
import highlightsImage from "../assets/images/hero5.jpg";
import supportImage from "../assets/images/WAWU P3.jpg";
import registrationImage from "../assets/images/INLL Logo.png";

const INLLBrochure = () => {
  const googleFormLink = "https://forms.google.com"; // Replace with your actual Google Form link

  return (
    <div className=" text-black">
      {/* Hero Section */}
      <header className="relative bg-[#07293d] bg-cover bg-center h-auto flex flex-col items-center rounded-tr-full rounded-bl-full justify-between px-4 sm:px-8 py-8 sm:py-12 z-10">
        <div className="w-full max-w-screen-lg">
          {/* Content Block */}
          <div className="p-4 sm:p-8 rounded-lg text-center md:text-left">
            {/* Main Heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold italic mb-6 bg-gradient-to-r from-[#fb8005] via-white to-[#138808] bg-clip-text text-transparent animate-gradient">
              India’s Next Legend League{" "}
              <span className="tracking-wide">(INLL)</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white">
              Searching for India’s Football Legends
            </h2>

            {/* Presented By Section */}
            <div className="flex flex-col items-center md:items-start space-y-2 mb-4">
              <p className="text-white text-base sm:text-lg">Presented By</p>
              <img
                src={wawuLogo}
                alt="WAWU Logo"
                className="h-24 sm:h-24 md:h-28 lg:h-32 w-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Association Info */}
            <p className="text-base sm:text-lg md:text-2xl font-semibold text-emerald-500">
              In association with Ofioh Sporty Private Limited
            </p>
          </div>

          {/* Banner Image */}
          <div className="w-full flex justify-center mt-8">
            <img
              src={bannerImage}
              alt="Hero"
              className="rounded-lg h-[120px] sm:h-[150px] md:h-[250px] lg:h-[150px] w-auto object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="bg-[#000000] py-3">
        <div className="max-w-6xl mx-auto px-4">
          <ul className="flex space-x-2 text-xs sm:text-sm text-white">
            <li>
              <Link
                to="/"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-yellow-400">INLL</li>
          </ul>
        </div>
      </nav>

      {/* About Section */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
        <motion.div
          className="bg-[#07293d] p-6 sm:p-8 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-6 sm:gap-8 transform hover:scale-102 transition-transform duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-4 sm:mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-white">
              About the Tournament
            </h2>
            <p className="text-sm sm:text-lg text-white">
              India's Next Legend League (INLL) is WAWU's flagship football
              tournament designed to discover and nurture the best football
              talents from across the nation. This tournament is a platform for
              aspiring players to showcase their skills, gain visibility, and
              receive support to achieve their dreams of becoming professional
              footballers.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why INLL Section */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-black tracking-wider uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Why INLL?
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Left Side: Image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-50 rounded-lg blur-lg"></div>
            <img
              src={whyINLLImage}
              alt="Why INLL"
              className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right Side: Timeline Features */}
          <motion.div
            className="w-full md:w-1/2 bg-gradient-to-b from-[#1A1A2E] to-[#0F3460] p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-800 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 bottom-0 w-1 bg-blue-500"></div>

            {[
              {
                icon: <FaSearch className="text-2xl text-blue-400" />,
                title: "Scout Hidden Talents",
                description:
                  "Identifying promising players from grassroots levels across India.",
              },
              {
                icon: <FaTrophy className="text-2xl text-yellow-400" />,
                title: "Competitive Platform",
                description:
                  "Providing an opportunity for players to showcase their skills on a national stage.",
              },
              {
                icon: <FaHandshake className="text-2xl text-green-400" />,
                title: "Professional Connections",
                description:
                  "Linking talents with professional training, mentors, and sponsors for career growth.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 sm:space-x-6 relative py-4"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Icon */}
                <div className="flex-shrink-0 z-10 bg-gray-900 p-3 rounded-full border-2 border-gray-600 shadow-lg">
                  {item.icon}
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-lg text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tournament Highlights */}
      <section className="max-w-6xl mx-auto py-12 sm:py-20 px-4 sm:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 sm:mb-12 text-center text-black tracking-wide uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tournament Highlights
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          {/* Left Side: Feature Cards */}
          <motion.div
            className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {[
              {
                icon: (
                  <FaGlobe className="text-3xl sm:text-4xl text-blue-400" />
                ),
                title: "Nationwide Reach",
                description:
                  "The tournament will be organized across India, ensuring inclusivity from villages to cities.",
              },
              {
                icon: (
                  <FaTrophy className="text-3xl sm:text-4xl text-yellow-400" />
                ),
                title: "Competitive Format",
                description:
                  "Teams will compete in a league format to provide maximum exposure to every player.",
              },
              {
                icon: (
                  <FaUserCheck className="text-3xl sm:text-4xl text-green-400" />
                ),
                title: "WAWU Representatives",
                description:
                  "WAWU scouts will be present at every tournament to identify and select promising talents.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 bg-opacity-80 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-2xl border border-gray-700 transition-all duration-300 hover:scale-105 transform"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-center text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 text-center mt-2">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side: Image */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-40 rounded-lg blur-lg"></div>
            <img
              src={highlightsImage}
              alt="Tournament Highlights"
              className="rounded-lg shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* Post-Selection Support */}
      <section className="max-w-6xl mx-auto py-16 sm:py-24 px-6 sm:px-12">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Post-Selection Support
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={supportImage}
              alt="Post-Selection Support"
              className="rounded-2xl shadow-2xl max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right: Benefits List */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {[
              {
                icon: <FaDatabase className="text-4xl text-blue-500" />,
                title: "Continuous Tracking",
                description:
                  "Your journey is recorded in WAWU’s database for ongoing growth and development.",
              },
              {
                icon: <FaMoneyBillWave className="text-4xl text-yellow-500" />,
                title: "Funding & Training",
                description:
                  "We provide funding support for training, accommodation, and education.",
              },
              {
                icon: <FaUsers className="text-4xl text-green-500" />,
                title: "Professional Network",
                description:
                  "Gain exclusive access to mentors, clubs, and career opportunities.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-6 p-4 rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-4 rounded-full shadow-md">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-6 sm:px-12 lg:px-16">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-12 text-center text-gray-900 tracking-wide uppercase"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Registration
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left Side: Image */}
          <motion.div
            className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={registrationImage}
              alt="Registration"
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Right Side: Registration Options */}
          <motion.div
            className="w-full md:w-2/3 lg:w-1/2 mx-auto bg-gradient-to-r from-[#0F3460] to-[#16213E] p-8 sm:p-12 rounded-xl shadow-xl text-center border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-semibold text-white mb-6">
              Choose Your Registration Type
            </h3>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
              {/* Individual Player */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfNwDFGGwMVL5MMon_m2eVasd6-ntdRy8VZuuftFwTUcSa-9w/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110">
                  <FaUser className="text-xl" /> Individual Players
                </button>
              </a>

              {/* Individual Team */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdKyREa7JdRmRtreUtJxqzbiJyln7NMYTmyFUbqxzLvfLYp8g/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110">
                  <FaTeamspeak className="text-xl" /> Individual Team
                </button>
              </a>

              {/* Organizing Partner */}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdxhOKZREb_hj-0xMmVQpxmAkxaZHDmj00LQFD2sdWUAMn3JA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110">
                  <FaUsers className="text-xl" /> Organizing Partner
                </button>
              </a>
            </div>
          </motion.div>
        </div>

        {/* How to Register Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#0F3460] to-[#16213E] p-8 sm:p-10  shadow-lg text-center border border-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-5">
            How to Register
          </h3>
          <div className="space-y-3 text-lg text-white">
            <p>✅ Complete the registration form online.</p>
            <p>✅ Participation is free of charge.</p>
            <p>✅ Attend the trials at your nearest city.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default INLLBrochure;
