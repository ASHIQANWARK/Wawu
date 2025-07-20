import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Indian Football Academy",
    feedback:
      "WAWU Foundation helped us discover talent in places we never imagined.",
  },
  {
    name: "South United FC Academy",
    feedback:
      "We saw a 40% rise in quality players joining from Tier 2 & 3 cities.",
  },
  {
    name: "NorthEast Rising FC",
    feedback:
      "They bridged the gap between remote regions and coaching. Incredible!",
  },
  {
    name: "Kickstart Academy",
    feedback:
      "Several of our athletes got scholarships and mentorship support.",
  },
  {
    name: "Strikerz Football Club",
    feedback:
      "Their youth development commitment is unmatched in India.",
  },
  {
    name: "Grassroot Warriors Academy",
    feedback:
      "WAWU's support brought real change. More kids are dreaming big.",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white py-14 overflow-hidden">
      <div className="text-center mb-10 px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#061428] mb-4 uppercase tracking-wide">Testimonials</h2>
        <p className="text-gray-700 mt-2 max-w-xl mx-auto">
          Hear from football academies across India whose journeys were
          impacted through our platform.
        </p>
      </div>

      {/* Continuous Scrolling Cards */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[250px] h-[250px] bg-[#064f80] text-white rounded-xl shadow-lg p-4 flex flex-col justify-between flex-shrink-0"
            >
              <p className="text-sm leading-relaxed">“{item.feedback}”</p>
              <h4 className="text-xs font-semibold mt-4 text-right">
                — {item.name}
              </h4>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
