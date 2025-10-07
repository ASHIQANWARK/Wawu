import React, { useState, useRef } from "react";
import { FaHandHoldingUsd, FaUserFriends, FaArrowRight, FaHeart, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

import DonateImg from "../assets/images/Donate.jpg";
import VolunteerImg from "../assets/images/Volunteer.jpg";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  show: (idx) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: idx * 0.2
    }
  }),
  hover: {
    y: -15,
    scale: 1.02,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  show: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.5
    }
  },
  hover: {
    scale: 1.1,
    rotate: 5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

// Animated button component
const AnimatedButton = ({ children, bgColor, href, type, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`inline-block ${className}`}
    >
      {type === "internal" ? (
        <Link
          to={href}
          className="relative overflow-hidden group"
          aria-label={`Navigate to ${children}`}
        >
          <ButtonContent children={children} bgColor={bgColor} isHovered={isHovered} />
        </Link>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="relative overflow-hidden group"
          aria-label={`Open ${children} registration`}
        >
          <ButtonContent children={children} bgColor={bgColor} isHovered={isHovered} />
        </a>
      )}
    </motion.div>
  );
};

const ButtonContent = ({ children, bgColor, isHovered }) => (
  <>
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100"
      style={{ backgroundColor: bgColor }}
      initial={false}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    />
    
    <motion.div
      className="relative z-10 flex items-center justify-center gap-2 text-white py-3 px-8 rounded-xl font-semibold shadow-lg"
      style={{ backgroundColor: bgColor }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.div
        animate={{ x: isHovered ? 5 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        <FaArrowRight size={14} />
      </motion.div>
    </motion.div>
    
    {/* Shine effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 z-20"
      initial={{ x: "-100%" }}
      animate={{ x: isHovered ? "200%" : "-100%" }}
      transition={{ duration: 0.6 }}
    />
  </>
);

// Floating elements background
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full opacity-10"
        style={{
          width: Math.random() * 80 + 20,
          height: Math.random() * 80 + 20,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          backgroundColor: i % 2 === 0 ? "#07293d" : "#11c120",
        }}
        animate={{
          y: [0, -20, 0],
          x: [0, Math.random() * 20 - 10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15 + Math.random() * 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

const GetInvolved = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const options = [
    {
      icon: <FaHandHoldingUsd />,
      title: "Donate",
      text: "Your contributions can change the lives of young footballers by supporting training, equipment, and growth opportunities.",
      link: "/donate",
      type: "internal",
      img: DonateImg,
      button: "Donate Now",
      bg: "#11c120",
      gradient: "from-green-400 to-emerald-600",
      decoration: <FaHeart className="text-red-400" />
    },
    {
      icon: <FaUserFriends />,
      title: "Internship",
      text: "Join our mission and gain hands-on experience by contributing to exciting initiatives and campaigns.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScjJek99jPOIEXAojcHGuAQYd-C8sEwenC2MgaGYhT-HxqGRA/viewform?usp=header",
      type: "external",
      img: VolunteerImg,
      button: "Register Now",
      bg: "#07293d",
      gradient: "from-blue-800 to-cyan-700",
      decoration: <FaRocket className="text-cyan-300" />
    },
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Background elements */}
      <FloatingElements />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,41,61,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(7,41,61,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-[#07293d] to-[#11698E] bg-clip-text text-transparent mb-4"
          >
            Get Involved
          </motion.h2>
          
          <motion.p
            variants={titleVariants}
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Make a lasting impact—support our journey or become a part of it. 
            <span className="block text-[#11698E] font-medium mt-2">
              Together we can create something extraordinary.
            </span>
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {options.map((opt, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              variants={cardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100/80 backdrop-blur-sm">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={opt.img}
                    alt={opt.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${opt.gradient} opacity-90 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-8 md:p-10 lg:p-12 min-h-[400px] flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    {/* Icon with animated background */}
                    <motion.div
                      variants={iconVariants}
                      className="relative mb-6 inline-flex"
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-12" />
                      <motion.div 
                        className="relative bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-3xl" style={{ color: opt.bg }}>
                          {opt.icon}
                        </div>
                      </motion.div>
                      
                      {/* Floating decoration */}
                      <motion.div
                        className="absolute -top-2 -right-2 text-2xl"
                        animate={{
                          y: [0, -10, 0],
                          rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {opt.decoration}
                      </motion.div>
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="text-3xl md:text-4xl font-bold text-white mb-4"
                    >
                      {opt.title}
                    </motion.h3>

                    {/* Text */}
                    <motion.p
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      className="text-lg text-white/90 leading-relaxed mb-6 font-light"
                    >
                      {opt.text}
                    </motion.p>
                  </div>

                  {/* Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + idx * 0.1 }}
                    className="mt-4"
                  >
                    <AnimatedButton
                      href={opt.link}
                      type={opt.type}
                      bgColor={opt.bg}
                      className="w-full sm:w-auto"
                    >
                      {opt.button}
                    </AnimatedButton>
                  </motion.div>
                </div>

                {/* Border glow effect on hover */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating shadow effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gray-200/50 blur-xl -z-10"
                animate={{
                  y: [0, 10, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + idx,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-20"
        >
          <p className="text-gray-600 text-lg">
            Have questions?{" "}
            <Link 
              to="/contact" 
              className="text-[#11698E] font-semibold hover:underline underline-offset-4 transition-all"
            >
              Contact us
            </Link>{" "}
            to learn more about how you can contribute.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;