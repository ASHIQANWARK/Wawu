import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Users, Trophy } from "lucide-react";
import { FaHandshake } from "react-icons/fa";
// Import sponsor logos
import sponsor1 from "../assets/images/iQue Logo.png";
import sponsor2 from "../assets/images2/ofioh.png";
import sponsor3 from "../assets/images/decathlonlogo.png"; // Add Decathlon logo import
import sponsor4 from "../assets/images/azzezia.jpg";
const sponsors = [
  { 
    id: 1, 
    image: sponsor1, 
    name: "iQue", 
    tier: "platinum",
    description: "Technology Innovation Partner"
  },
  { 
    id: 2, 
    image: sponsor2, 
    name: "Ofioh", 
    tier: "gold",
    description: "Community Development Partner"
  },
  { 
    id: 3, 
    image: sponsor3, 
    name: "Decathlon", 
    tier: "platinum", // or "gold" depending on their tier
    description: "Sports Equipment Partner"
  },
  { 
    id: 4, 
    image: sponsor4, 
    name: "Azeezia Health City", 
    tier: "gold", // or "gold" depending on their tier
    description: "Health Equipment Partner"
  },
];

const Sponsors = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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

  const sponsorCardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 40
    },
    show: (index) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15
      }
    }),
    hover: {
      y: -10,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const floatingElementVariants = {
    float: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 bg-gradient-to-br from-slate-50 via-white to-blue-50/50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(7,41,61,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(7,41,61,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Floating Shapes */}
        <motion.div
          variants={floatingElementVariants}
          animate="float"
          className="absolute top-20 left-10 w-6 h-6 bg-[#11c120]/20 rounded-full"
        />
        <motion.div
          variants={floatingElementVariants}
          animate="float"
          transition={{ delay: 1 }}
          className="absolute top-40 right-20 w-8 h-8 bg-[#07293d]/20 rounded-lg"
        />
        <motion.div
          variants={floatingElementVariants}
          animate="float"
          transition={{ delay: 2 }}
          className="absolute bottom-32 left-20 w-10 h-10 bg-[#11698E]/20 rounded-full"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerVariants}
        >
          <motion.div
            variants={titleVariants}
            className="inline-flex items-center gap-3 mb-4 bg-gradient-to-r from-[#07293d] to-[#11698E] text-white px-6 py-2 rounded-full text-sm font-medium"
          >
            <FaHandshake className="w-4 h-4" />
            Strategic Partnerships
          </motion.div>

          <motion.h2
            variants={titleVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-[#07293d] to-[#11698E] bg-clip-text text-transparent mb-6"
          >
            Our Valued Sponsors
          </motion.h2>

          <motion.p
            variants={titleVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We proudly collaborate with visionary organizations that believe in youth empowerment 
            through football and community development.
          </motion.p>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.id}
              custom={index}
              variants={sponsorCardVariants}
              whileHover="hover"
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-xl border border-gray-100/80 backdrop-blur-sm overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  sponsor.tier === "platinum" 
                    ? "from-blue-50 to-cyan-50" 
                    : "from-amber-50 to-yellow-50"
                } opacity-60`} />
                
                {/* Tier Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                  sponsor.tier === "platinum" 
                    ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white" 
                    : "bg-gradient-to-r from-amber-500 to-yellow-500 text-white"
                }`}>
                  {sponsor.tier.charAt(0).toUpperCase() + sponsor.tier.slice(1)}
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 lg:p-10 flex flex-col items-center text-center">
                  {/* Logo Container */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-white/80 rounded-2xl transform rotate-6 blur-sm" />
                    <motion.div 
                      className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                      whileHover={{ 
                        scale: 1.05,
                        rotate: 1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="w-32 h-32 object-contain  hover:grayscale-0 transition-all duration-300"
                      />
                    </motion.div>
                    
                    {/* Hover Effect Ring */}
                    <div className="absolute inset-0 border-2 border-transparent rounded-2xl group-hover:border-[#11c120]/30 transition-all duration-300" />
                  </div>

                  {/* Sponsor Info */}
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {sponsor.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 font-medium">
                    {sponsor.description}
                  </p>

                  {/* Tier Icon */}
                  <div className={`p-3 rounded-full ${
                    sponsor.tier === "platinum" ? "bg-blue-100" : "bg-amber-100"
                  }`}>
                    {sponsor.tier === "platinum" ? (
                      <Trophy className="w-6 h-6 text-blue-600" />
                    ) : (
                      <Star className="w-6 h-6 text-amber-600" />
                    )}
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Shadow */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gray-200/40 blur-xl -z-10"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;