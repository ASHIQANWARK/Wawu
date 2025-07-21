import React from "react";
import { Link } from "react-router-dom";
import trainingImg from "../assets/images/training.jpg";

const ProfessionalTraining = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-[#11698e]  text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Professional Training
          </h1>
          <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto">
            Empowering future footballers with elite-level training, mentorship, and performance development.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-700">
          <Link to="/" className="hover:underline text-[#004e92] font-medium">
            Home
          </Link>{" "}
          / <span className="font-semibold">Professional Training</span>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 py-16 px-6 md:px-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#002244] mb-6">
            Elevating Performance Through Elite Coaching
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our Professional Training initiative is designed to meet global standards. We partner with reputed coaches,
            experienced physiotherapists, and top football academies to craft personalized, high-intensity training
            modules.
            <br /><br />
            Every athlete is exposed to techniques that focus on agility, tactical awareness, strength, and conditioning—
            ensuring holistic player development. The curriculum adapts to different age groups and skill levels, whether a
            beginner or a rising star.
            <br /><br />
            The training also includes game analysis sessions, nutritional planning, and injury prevention strategies to
            help players stay at their physical peak.
            <br /><br />
            More than just drills and matches, this program builds discipline, work ethic, and competitive spirit—key traits
            that define successful professionals. We aim to prepare each athlete not only for national recognition but also
            for international trials, ensuring they step into global arenas with confidence and excellence.
          </p>
        </div>
        <div>
          <img
            src={trainingImg}
            alt="Professional Training"
            className="w-full rounded-2xl shadow-xl object-cover"
          />
          <p className="text-center text-sm text-gray-500 mt-2">
            High-Performance Camp – Maharashtra 2025
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProfessionalTraining;
