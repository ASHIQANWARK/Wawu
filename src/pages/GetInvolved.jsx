import React from "react";
import { FaHandHoldingUsd, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import DonateImg from "../assets/images/Donate.jpg";
import VolunteerImg from "../assets/images/Volunteer.jpg";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const GetInvolved = () => {
  const options = [
    {
      icon: <FaHandHoldingUsd className="text-[#07293d] text-5xl" />,
      title: "Donate",
      text: "Your contributions can change the lives of young footballers.",
      link: "/donate",
      type: "internal",
      img: DonateImg,
      button: "Donate Now",
      bg: "#11c120",
    },
    {
      icon: <FaUserFriends className="text-[#07293d] text-5xl" />,
      title: "Internship",
      text: "Join our team",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScjJek99jPOIEXAojcHGuAQYd-C8sEwenC2MgaGYhT-HxqGRA/viewform?usp=header",
      type: "external",
      img: VolunteerImg,
      button: "Register Now",
      bg: "#07293d",
    },
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold text-[#07293d] text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Get Involved
        </motion.h2>
        <motion.p
          className="text-[#11698E] mt-2 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get Involved With Us.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 mt-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {options.map((opt, idx) => (
            <motion.div
              key={idx}
              variants={card}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center relative overflow-hidden flex flex-col items-center justify-center"
            >
              <img
                src={opt.img}
                alt={opt.title}
                className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-xl"
              />
              <div className="relative z-10">{opt.icon}</div>
              <h3 className="text-xl font-semibold mt-4 relative z-10">{opt.title}</h3>
              <p className="mt-2 relative z-10 text-[#11698E]">{opt.text}</p>
              {opt.type === "internal" ? (
                <Link
                  to={opt.link}
                  className="inline-block mt-4 text-white py-2 px-6 rounded-md transition relative z-10"
                  style={{ backgroundColor: opt.bg }}
                >
                  {opt.button}
                </Link>
              ) : (
                <a
                  href={opt.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-white py-2 px-6 rounded-md transition relative z-10"
                  style={{ backgroundColor: opt.bg }}
                >
                  {opt.button}
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default GetInvolved;
