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
      className="relative px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="mb-4">
              <span className="inline-block px-3 py-0.5 bg-[#11698d]/10 text-[#11698d] text-xs font-semibold rounded-full tracking-wide">
                Since 2017
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-4xl sm:text-4xl font-bold tracking-tight mb-4">
              Uplifting <span className="text-[#11698d]">Young Talents</span>
            </h2>

            {/* Content - Short paragraphs */}
            <div className="space-y-3">
              <p className="text-md text-gray-600 leading-relaxed">
                <span className="font-semibold text-[#11698d]">WAWU Foundation</span> is a purpose-driven non-profit dedicated to advancing Indian football by unlocking opportunities for talented youth from underserved communities.
              </p>

              <p className="text-md text-gray-600 leading-relaxed">
                We operate across the full football ecosystem—identifying grassroots talent, developing coaches, strengthening infrastructure, and creating structured pathways for progression.
              </p>

              <p className="text-md text-gray-600 leading-relaxed">
                Through quality training, competitive platforms, and international exposure, we help young athletes grow as disciplined, confident individuals ready for long-term success.
              </p>

              <p className="text-md text-gray-600 leading-relaxed">
                Our vision: a sustainable, globally competitive football ecosystem in India—empowering players, coaches, communities, and institutions.
              </p>
            </div>
          </motion.div>

          {/* Right: Image - Smaller height */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-xl overflow-hidden shadow-md w-full max-w-md">
              <img
                src={aboutImage}
                alt="WAWU Foundation - Indian Football"
                className="w-full h-64 sm:h-72 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;