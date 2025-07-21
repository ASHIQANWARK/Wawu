import React from "react";
import { Link } from "react-router-dom";
import talentImg from "../assets/images2/w18.jpg"; // Replace with your actual image path

const Talent = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-[#11698e] text-white py-24 px-4 -mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Talent</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Identifying and nurturing hidden sports talent from across the country, especially in underserved communities.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-700">
          <Link to="/" className="hover:underline text-[#2c5364]">Home</Link> /
          <span className="font-semibold">Discover Talent</span>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-[#203a43]">Unearthing India's Future Champions</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Every child deserves a chance to shine. Our Discover Talent initiative focuses on identifying and supporting raw sports
            talent in rural and under-resourced areas. Through dedicated camps, talent scouting events, and collaborations with
            local schools and communities, we aim to provide these young athletes with the right training, mentorship, and
            exposure to excel in their sporting careers. We don't just scout talent—we nurture it, guide it, and help it rise
            to national and international levels.
          </p>
        </div>
        <div>
          <img
            src={talentImg}
            alt="Discover Talent"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default Talent;
