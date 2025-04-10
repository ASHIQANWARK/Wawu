import React from "react";
import { FaHandHoldingUsd, FaHandshake, FaUserFriends } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import DonateImg from "../assets/images/Donate.jpg";
import PartnerImg from "../assets/images/partnership.jpeg";
import VolunteerImg from "../assets/images/Volunteer.jpg";

// Reusable animation variants
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
      icon: <FaHandshake className="text-[#07293d] text-5xl" />,
      title: "Partner with Us",
      text: "Collaborate with WAWU to expand opportunities for players.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfNBVR6FfWGeUCBCVLjXpW0KvXR_bcbhCyoicimhFZAUtXItw/viewform?pli=1",
      type: "external",
      img: PartnerImg,
      button: "Become a Partner",
      bg: "#07293d",
    },
    {
      icon: <FaUserFriends className="text-[#07293d] text-5xl" />,
      title: "Volunteer",
      text: "Join our team and make a direct impact on the next generation of Indian football stars.",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfJzL7aBuZdw-GSbLtiYcx99QqjGFuaQN2eKeFnqIhBiyL9Hg/viewform?usp=header",
      type: "external",
      img: VolunteerImg,
      button: "Volunteer Now",
      bg: "#07293d",
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
    <section className="py-16 text-center">
      <motion.h2
        className="text-3xl font-bold text-[#07293d]"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        Get Involved
      </motion.h2>
      <motion.p
        className="text-[#11698E] mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get Involved With Us.
      </motion.p>

      <motion.div
        className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto px-4"
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
            className="bg-white shadow-lg rounded-lg p-6 text-center relative overflow-hidden"
          >
            <img
              src={opt.img}
              alt={opt.title}
              className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-lg"
            />
            <div className="relative z-10 flex justify-center">{opt.icon}</div>
            <h3 className="text-xl font-semibold mt-4 relative z-10">{opt.title}</h3>
            <p className="mt-2 relative z-10 text-[#11698E]">{opt.text}</p>
            {opt.type === "internal" ? (
              <Link
                to={opt.link}
                className="inline-block mt-4 text-white py-2 px-4 rounded-md transition relative z-10"
                style={{ backgroundColor: opt.bg }}
              >
                {opt.button}
              </Link>
            ) : (
              <a
                href={opt.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-white py-2 px-4 rounded-md transition relative z-10"
                style={{ backgroundColor: opt.bg }}
              >
                {opt.button}
              </a>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default GetInvolved;
