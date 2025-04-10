import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import Logo from "../assets/images/wawu white.png";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.7,
      ease: "easeOut",
    },
  }),
};

const Footer = () => {
  return (
    <footer className="bg-[#07293d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo */}
        <motion.div
          className="flex justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true }}
        >
          <img
            src={Logo}
            alt="WAWU Logo"
            className="w-32 h-auto object-contain"
          />
        </motion.div>

        {/* Column 2: Quick Links */}
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={0.2}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <p className="text-gray-300">
            Address: Door No: 84, 3rd Cross Rd, KHB Block, Koramangala,
            Bengaluru, Karnataka 560095
          </p>
          <p className="text-gray-300 mt-2">
            Email:{" "}
            <a
              href="mailto:info@wawu.foundation"
              className="text-[#ffab00] hover:underline"
            >
              info@wawu.foundation
            </a>
          </p>
          <p className="text-gray-300 mt-2">
            <a href="/privacy-policy" className="text-[#ffab00] hover:underline">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/help-centre" className="text-[#ffab00] hover:underline">
              Help Centre
            </a>
          </p>
        </motion.div>

        {/* Column 3: Social Media */}
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={0.4}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/share/1FQUm5bant/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/wawu_org?igsh=MXdvZG8xdGV5NzVvNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/wawu-foundation?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/Wawuorg?t=N0BvrzrULUw7KVHZuZ6_Hg&s=09"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <FaX size={24} />
            </a>
          </div>
        </motion.div>

        {/* Column 4: Google Map */}
        <motion.div
          className="w-full flex justify-center md:justify-end"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={0.6}
          viewport={{ once: true }}
        >
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Koramangala,Bengaluru&output=embed"
            width="100%"
            height="180"
            className="rounded-lg shadow-lg max-w-md"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="bg-[#07293d] py-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Ique Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
