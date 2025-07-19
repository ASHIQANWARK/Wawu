import React from "react";
import { FaUserCheck, FaSchool, FaRunning, FaHandsHelping, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import talentImg from "../assets/images2/w88.jpg"; // Replace with actual image path

const services = [
  {
    icon: <FaUserCheck className="text-4xl text-[#11698E]" />,
    title: "Talent Identification",
    description:
      "We travel across regions to scout hidden sports talents from underrepresented communities and schools.",
  },
  {
    icon: <FaSchool className="text-4xl text-[#11698E]" />,
    title: "Educational Support",
    description:
      "Providing deserving children with access to quality education, tutoring, and academic mentoring.",
  },
  {
    icon: <FaRunning className="text-4xl text-[#11698E]" />,
    title: "Training & Development",
    description:
      "Structured coaching programs and physical training camps to polish athletic skills and boost performance.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-[#11698E]" />,
    title: "Mentorship & Life Skills",
    description:
      "Guiding youth with mentorship in discipline, mental health, nutrition, and career development in sports.",
  },
];

const Talent = () => {
  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-white to-[#f0fdf4] px-4 py-12 sm:px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Hero Section */}
      <div className="bg-[#11698E] text-white rounded-xl py-10 px-6 sm:px-12 text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">Discovering India's Hidden Talent</h1>
        <p className="text-md sm:text-lg max-w-3xl mx-auto">
          We believe potential lies in every corner. WAWU is committed to unlocking that potential through sports and education.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-12 max-w-6xl mx-auto">
        <ol className="flex space-x-2">
          <li><a href="/" className="hover:underline text-[#11698E] font-medium">Home</a></li>
          <li className="text-gray-400"><FaChevronRight /></li>
          <li className="text-gray-700 font-semibold">Get Talent</li>
        </ol>
      </nav>

      {/* Services */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 flex items-start space-x-4"
          >
            <div>{service.icon}</div>
            <div>
              <h3 className="text-xl font-bold text-[#11698E] mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Description Section */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-[#11698E] mb-4">Why It Matters</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          In India, thousands of children with extraordinary talent go unnoticed every year due to lack of access, opportunity, and support. At WAWU, we bridge this gap. 
          By connecting grassroots-level talent with professional guidance and structured programs, we turn dreams into possibilities. Our mission is to ensure that no talent goes wasted,
          and every deserving child gets a chance to shine — not just on the field, but in life.
        </p>
        <p className="mt-6 text-gray-700 text-lg leading-relaxed">
          From small towns to remote villages, we run talent discovery camps, partner with local organizations, and create a support ecosystem that transforms raw potential 
          into world-class achievers. It's not just about sports — it's about changing lives through a pathway of discipline, education, and holistic growth.
        </p>
      </section>

      {/* Image Section */}
      <section className="max-w-6xl mx-auto mb-12">
        <img
          src={talentImg}
          alt="Discover Talent"
          className="rounded-2xl w-full shadow-lg object-cover"
        />
        <p className="text-center text-sm text-gray-500 mt-2">Talent Hunt Camp – Kerala 2025</p>
      </section>
    </motion.div>
  );
};

export default Talent;
