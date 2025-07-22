import React from "react";
import { Link } from "react-router-dom";
import supportImg from "../assets/images2/w10.jpg";

const CompSupport = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#11698e] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Comprehensive Support
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Beyond training—our holistic ecosystem nurtures every young athlete
            through nutrition, gear, academics, and mental health.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-700">
          <Link to="/" className="hover:underline text-[#005e63] font-medium">
            Home
          </Link>
          / <span className="font-semibold">Comprehensive Support</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-6 md:px-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#022b30] mb-6">
            Empowering Athletes On and Off the Field
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At WAWU Foundation, we believe that excellence in sports stems from balance.
            Our Comprehensive Support program goes beyond traditional coaching to provide
            an all-rounded structure that takes care of every young athlete’s needs.
            <br /><br />
            From personalized nutrition plans and access to fitness equipment, to emotional wellness
            and academic counseling, we ensure players grow as individuals—not just performers.
            We also support travel arrangements, injury recovery, and psychological mentoring.
            <br /><br />
            This 360-degree ecosystem helps unlock potential, build resilience, and empower children
            to manage their lives and careers more confidently. We aim to raise not only champions,
            but balanced and aware individuals who excel on and off the field.
          </p>
        </div>
        <div>
          <img
            src={supportImg}
            alt="Comprehensive Support"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
          <p className="text-center text-sm text-gray-500 mt-2">
            Support Session – Tamil Nadu 2025
          </p>
        </div>
      </section>
    </div>
  );
};

export default CompSupport;
