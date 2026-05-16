import React, { useState, useRef } from "react";
import { FaHandHoldingUsd, FaUserFriends, FaArrowRight, FaHeart, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

import DonateImg from "../assets/images/Donate.jpg";
import VolunteerImg from "../assets/images/Volunteer.jpg";

// Enhanced animation variants - Smaller animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  show: (idx) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.46, 0.45, 0.94],
      delay: idx * 0.15
    }
  }),
  hover: {
    y: -8,
    scale: 1.01,
    transition: {
      duration: 0.3,
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
      delay: 0.4
    }
  },
  hover: {
    scale: 1.05,
    rotate: 3,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

// Animated button component - Smaller
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
      className="relative z-10 flex items-center justify-center gap-2 text-white py-2 px-5 rounded-lg font-semibold shadow-md text-sm"
      style={{ backgroundColor: bgColor }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      <motion.div
        animate={{ x: isHovered ? 3 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 20 }}
      >
        <FaArrowRight size={12} />
      </motion.div>
    </motion.div>
    
    {/* Shine effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 z-20"
      initial={{ x: "-100%" }}
      animate={{ x: isHovered ? "200%" : "-100%" }}
      transition={{ duration: 0.5 }}
    />
  </>
);

// Floating elements background - Smaller and subtler
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full opacity-5"
        style={{
          width: Math.random() * 50 + 15,
          height: Math.random() * 50 + 15,
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          backgroundColor: i % 2 === 0 ? "#07293d" : "#11c120",
        }}
        animate={{
          y: [0, -15, 0],
          x: [0, Math.random() * 15 - 7, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12 + Math.random() * 8,
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
      className="relative py-12 md:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden"
    >
      {/* Background elements */}
      <FloatingElements />
      
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(7,41,61,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(7,41,61,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Smaller */}
        <motion.div
          className="text-center mb-10 lg:mb-12"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.h2
            variants={titleVariants}
            className="text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-gray-900 via-[#07293d] to-[#11698E] bg-clip-text text-transparent mb-3"
          >
            Get Involved
          </motion.h2>
          
          <motion.p
            variants={titleVariants}
            className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Make a lasting impact—support our journey or become a part of it. 
            <span className="block text-[#11698E] font-medium mt-1">
              Together we can create something extraordinary.
            </span>
          </motion.p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
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
              {/* Main Card - Smaller */}
              <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100/80 backdrop-blur-sm">
                {/* Background Image with Gradient Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={opt.img}
                    alt={opt.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${opt.gradient} opacity-85 mix-blend-multiply`} />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                
                {/* Content - Smaller padding */}
                <div className="relative z-10 p-6 md:p-8 min-h-[320px] flex flex-col justify-between">
                  {/* Top Section */}
                  <div>
                    {/* Icon with animated background - Smaller */}
                    <motion.div
                      variants={iconVariants}
                      className="relative mb-4 inline-flex"
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-xl transform rotate-6" />
                      <motion.div 
                        className="relative bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-md"
                        whileHover={{ scale: 1.03 }}
                      >
                        <div className="text-2xl" style={{ color: opt.bg }}>
                          {opt.icon}
                        </div>
                      </motion.div>
                      
                      {/* Floating decoration - Smaller */}
                      <motion.div
                        className="absolute -top-1 -right-1 text-lg"
                        animate={{
                          y: [0, -8, 0],
                          rotate: [0, 8, -8, 0],
                        }}
                        transition={{
                          duration: 3.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {opt.decoration}
                      </motion.div>
                    </motion.div>

                    {/* Title - Smaller */}
                    <motion.h3
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + idx * 0.1 }}
                      className="text-2xl md:text-3xl font-bold text-white mb-3"
                    >
                      {opt.title}
                    </motion.h3>

                    {/* Text - Smaller */}
                    <motion.p
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      className="text-sm text-white/90 leading-relaxed mb-4"
                    >
                      {opt.text}
                    </motion.p>
                  </div>

                  {/* Button - Smaller */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + idx * 0.1 }}
                    className="mt-3"
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
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
              </div>

              {/* Floating shadow effect - Subtler */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-gray-200/40 blur-md -z-10"
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.2, 0.4, 0.2],
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

        {/* Bottom CTA - Smaller */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 lg:mt-16"
        >
          <p className="text-gray-600 text-sm">
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