import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
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
    <footer className="bg-[#11698e] text-white">
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
            className="w-42 h-auto object-contain"
          />
        </motion.div>

        {/* Column 2: Navigation Links */}
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={0.2}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/inll" className="hover:underline">INLL</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/donate" className="hover:underline">Donate</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </motion.div>

        {/* Column 3: Address and Policies */}
        <motion.div
          className="text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={0.3}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-gray-300 text-sm">
            Door No: 84, 3rd Cross Rd, KHB Block, Koramangala,<br />
            Bengaluru, Karnataka 560095
          </p>
          <p className="mt-2 text-gray-300 text-sm">
            Email:{" "}
            <a
              href="mailto:info@wawu.foundation"
              className="text-[#ffab00] hover:underline"
            >
              info@wawu.foundation
            </a>
          </p>
          <p className="mt-2 text-sm">
            <Link to="/privacy-policy" className="text-[#ffab00] hover:underline">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link to="/help-centre" className="text-[#ffab00] hover:underline">
              Help Centre
            </Link>
          </p>
        </motion.div>

        {/* Column 4: Social Media + Map */}
        <motion.div
          className="flex flex-col items-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          custom={0.4}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-5 mb-4">
            <a
              href="https://www.facebook.com/share/1FQUm5bant/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              <FaFacebookF size={22} />
            </a>
            <a
              href="https://www.instagram.com/wawu_org?igsh=MXdvZG8xdGV5NzVvNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition"
            >
              <FaInstagram size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/wawu-foundation?utm_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://x.com/Wawuorg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition"
            >
              <FaX size={22} />
            </a>
          </div>
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Koramangala,Bengaluru&output=embed"
            width="100%"
            height="160"
            className="rounded-lg shadow-lg max-w-xs"
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
