import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/WAWU DP1.jpg";

const About = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#about") {
      const section = document.getElementById("about");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <section
      id="about"
      className="relative px-4 sm:px-6 md:px-10 lg:px-20 py-16 sm:py-20 md:py-28 bg-gradient-to-br from-gray-50 to-white text-black overflow-hidden"
    >
     
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: About Content */}
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="inline-block px-4 py-1 bg-[#11698d] text-white text-sm font-semibold rounded-full mb-4 tracking-wide">
                Transforming Talents
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6">
                Shaping <span className="text-[#11698d]">Future</span> Stars
              </h2>
            </motion.div>

            <div className="space-y-5">
              <motion.p 
                className="text-lg sm:text-xl text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                At <span className="font-bold text-[#11698d]">WAWU Foundation</span>, we're revolutionizing football development by identifying and nurturing the next generation of elite talent through cutting-edge methodologies.
              </motion.p>

              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#11698d] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Our elite scouting network discovers raw talent and creates life-changing opportunities through structured training programs.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#11698d] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    International exposure and professional development pathways for aspiring athletes.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#11698d] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Comprehensive grassroots tournaments, development camps, and mentorship programs nationwide.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-xl font-semibold  bg-[#11698d] bg-clip-text text-transparent">
                  Join us in building a legacy of excellence and empowering the champions of tomorrow.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="relative group">
              {/* Main Image Container */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src={aboutImage}
                  alt="WAWU Foundation - Developing Future Football Stars"
                  className="w-full h-[500px] sm:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
             
              
              {/* Floating Badge */}
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-[#11698d] text-white px-6 py-3 rounded-full shadow-xl z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold tracking-wide">SINCE 2024</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;