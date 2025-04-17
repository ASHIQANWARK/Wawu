import React from "react";
import { motion } from "framer-motion";
import missionImg from "../assets/images/mission2.jpg";
import visionImg from "../assets/images/vision.jpg";

const MissionVision = () => {
  return (
    <section className="bg-transparent bg-opacity-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mission Section */}
        <motion.div
          className="relative flex flex-col items-center text-center bg-[#07293d] shadow-lg rounded-tr-full rounded-bl-full p-8 hover:scale-105 transition transform"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={missionImg}
            alt="Mission"
            className="w-full h-64 object-cover rounded-t-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="p-8 bg-[#07293d] text-center rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
              Our Mission
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              At <span className="font-semibold text-white">WAWU Foundation</span>, we believe talent knows no boundaries, but opportunities do. Our mission is to{" "}
              <span className="font-extrabold">discover, nurture, and empower</span> young footballers through scholarships, world-class training, and global exposure. With strategic academy partnerships, we provide{" "}
              <span className="font-bold text-[#fff200]">tier coaching, mentorship, and career-building opportunities</span>. Together, we can{" "}
              <span className="font-extrabold">unlock potential and transform dreams into reality</span>.
            </p>
          </motion.div>
        </motion.div>

        {/* Vision Section */}
        <motion.div
          className="relative flex flex-col items-center text-center bg-[#07293d] shadow-lg rounded-br-full rounded-tl-full p-8 hover:scale-105 transition transform"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={visionImg}
            alt="Vision"
            className="w-full h-64 object-cover rounded-t-2xl"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          />
          <motion.div
            className="p-8 bg-[#07293d] text-center rounded-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-4xl font-extrabold text-white mb-4 uppercase tracking-wide">
              Our Vision
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              We envision a world where{" "}
              <span className="font-extrabold">young footballers</span> get the
              chance to showcase their talent, receive{" "}
              <span className="font-extrabold text-[#fff200]">
                elite training and mentorship
              </span>{" "}
              and turn their passion into a professional career. WAWU Foundation
              is dedicated to{" "}
              <span className="font-extrabold">breaking barriers</span> and
              creating pathways for future football stars. With the right
              support, these athletes can
              <span className="font-extrabold"> inspire generations</span> and
              leave a lasting legacy in the world of football.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
