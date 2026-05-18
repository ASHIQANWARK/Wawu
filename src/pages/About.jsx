import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/WAWU DP1.jpg";

const About = () => {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#about") {
      const section = document.getElementById("about");

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  }, []);

  return (
    <section
      id="about"
      className="relative bg-white py-16 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-20 overflow-hidden"
    >
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#11698d]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#0B1F33]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Small Label */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1 rounded-full bg-[#11698d]/10 text-[#11698d] text-sm font-semibold tracking-wide">
                Since 2017
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0B1F33] leading-tight mb-6">
              About <span className="text-[#11698d]">Us</span>
            </h2>

            {/* Decorative Line */}
            <div className="w-24 h-1 bg-[#11698d] rounded-full mb-8"></div>

            {/* Paragraphs */}
            <div className="space-y-6">
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Founded in 2017,{" "}
                <span className="font-semibold text-[#11698d]">
                  WAWU Foundation
                </span>{" "}
                is a purpose-driven non-profit organisation dedicated to
                advancing Indian football by unlocking opportunities for
                talented youth from underserved communities.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We operate across the full football ecosystem—identifying and
                nurturing grassroots talent, developing qualified coaches,
                strengthening infrastructure, and establishing structured
                pathways for progression.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Through high-quality training programs, competitive platforms,
                and international exposure initiatives, we enable young athletes
                to grow not only as footballers but as disciplined, confident
                individuals prepared for long-term success.
              </p>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                Guided by a vision to build a sustainable and globally
                competitive football ecosystem in India, WAWU Foundation is
                actively shaping the future of the sport by empowering every
                stakeholder—from players and coaches to communities and
                institutions.
              </p>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
              <div className="bg-[#f8fafc] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-3xl font-bold text-[#11698d]">2017</h3>
                <p className="text-gray-500 text-sm mt-1">Founded</p>
              </div>

              <div className="bg-[#f8fafc] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-3xl font-bold text-[#11698d]">100+</h3>
                <p className="text-gray-500 text-sm mt-1">Young Talents</p>
              </div>

              <div className="bg-[#f8fafc] rounded-2xl p-5 shadow-sm hover:shadow-md transition">
                <h3 className="text-3xl font-bold text-[#11698d]">India</h3>
                <p className="text-gray-500 text-sm mt-1">Football Vision</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-xl">
              
              {/* Background Shape */}
              <div className="absolute -top-5 -left-5 w-full h-full rounded-[30px] border-2 border-[#11698d]/20"></div>

              {/* Image */}
              <div className="relative overflow-hidden rounded-[30px] shadow-2xl">
                <img
                  src={aboutImage}
                  alt="WAWU Foundation"
                  className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-6 py-4">
                <h4 className="text-xl font-bold text-[#0B1F33]">
                  Empowering Youth
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Building the future of Indian football
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;