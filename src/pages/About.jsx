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
                Empowering Through Football
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight mb-6">
                Uplifting <span className="text-[#11698d]">Young Talents</span>
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
                <span className="font-bold text-[#11698d]">WAWU Foundation</span> is a dedicated non-profit organization focused on the upliftment and empowerment of young, talented football players from underprivileged and marginalized backgrounds. Founded in 2017, our aim is to bridge the gap between raw talent and real opportunity, enabling aspiring athletes to overcome barriers and realize their full potential on and off the field.
              </motion.p>

              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our mission is simple: to identify promising youth footballers and equip them with world-class training, holistic support, and mentorship. We believe that sporting talent should never be held back by circumstance, and we strive to ensure that every deserving player gets the resources and platform they need to excel. 
              </motion.p>

              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                Our vision is to nurture a new generation of sports leaders — individuals who inspire positive change within their communities.
              </motion.p>

              <motion.div
                className="space-y-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#11698d] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Talent identification camps and high-quality coaching programs that uncover and shape potential.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#11698d] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Scholarships that cover both athletic and educational needs to ensure holistic growth.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[#11698d] rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Life skills training, health awareness, and ethical guidance embedded into every program.
                  </p>
                </div>
              </motion.div>

              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                To date, our initiatives have enabled many young players to join academic institutions, club teams, and even represent at state and national levels. At the heart of our work are the values of inclusivity, integrity, and dedication.
              </motion.p>

              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <p className="text-xl font-semibold bg-[#11698d] bg-clip-text text-transparent">
                  Together, we can nurture talent, build character, and uplift communities — transforming lives through the universal language of football.
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
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  src={aboutImage}
                  alt="WAWU Foundation - Empowering Youth Through Football"
                  className="w-full h-[500px] sm:h-[600px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <motion.div
                className="absolute -bottom-6 -right-6 bg-[#11698d] text-white px-6 py-3 rounded-full shadow-xl z-20"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <span className="text-sm font-bold tracking-wide">SINCE 2017</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
