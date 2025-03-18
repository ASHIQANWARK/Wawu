import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../assets/images/wawu white.png";
import { FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#07293d] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1: Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            src={Logo}
            alt="Incubention Logo"
            className="w-32 h-auto object-contain" // Adjusted size
          />
        </div>

        {/* Column 2: Address, Email, Privacy Policy & Help Centre */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <p className="text-gray-300">
            Address: Door No: 84, 3rd Cross Rd, KHB Block, Koramangala,
            Bengaluru, Karnataka 560095
          </p>
          <p className="text-gray-300 mt-2">
            Email:{" "}
            <a
              href="mailto:support@iqueventures.com"
              className="text-[#ffab00] hover:underline"
            >
              info@wawu.foundation
            </a>
          </p>
          <p className="text-gray-300 mt-2">
            <a
              href="/privacy-policy"
              className="text-[#ffab00] hover:underline"
            >
              Privacy Policy
            </a>{" "}
            |{" "}
            <a href="/help-centre" className="text-[#ffab00] hover:underline">
              Help Centre
            </a>
          </p>
        </div>

        {/* Column 3: Social Media */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/profile.php?id=61573732888320"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] transition hover:text-blue-500"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://www.instagram.com/wawu_org?igsh=MWFjaGw0aXAzcnQ3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] transition hover:text-pink-500"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/9035140186"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] transition hover:text-green-500"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ffffff] transition hover:text-blue-700"
            >
              <FaX size={24} />
            </a>
          </div>
        </div>

        {/* Column 4: Google Maps Location */}
        <div className="w-full flex justify-center md:justify-end">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Koramangala,Bengaluru&output=embed"
            width="100%"
            height="180"
            className="rounded-lg shadow-lg max-w-md"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-[#07293d] py-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; 2025 Ique Ventures. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
