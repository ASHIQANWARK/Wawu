import React, { useEffect } from "react";
import { motion } from "framer-motion";
import aboutImage from "../assets/images/WAWU DP1.jpg"; // <-- import your image

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
      className="px-4 sm:px-6 md:px-10 lg:px-20 py-12 sm:py-16 md:py-20 bg-white text-black"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: About Content */}
        <motion.div
          className="space-y-5 sm:space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide">
            About Us
          </h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            At <span className="font-semibold">WAWU Foundation</span>, we are
            shaping the future of football by identifying and nurturing the next
            generation of stars.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Our dedicated scouting team seeks out raw talent and provides
            life-changing opportunities through structured training and
            international exposure.
          </p>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            We also conduct grassroots tournaments, player development camps,
            and mentor programs across the country.
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold">
            Join us in empowering future champions. Together, we can build a
            legacy of excellence.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          className="border border-gray-300 rounded-xl overflow-hidden shadow-lg bg-gray-50 flex items-center justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImage}
            alt="WAWU Foundation"
            className="w-full h-450px object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;