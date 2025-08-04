import React from "react";
import { useNavigate } from "react-router-dom";
import inllBg from "../assets/images/INLL DP.jpg";

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-16 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 text-center">
          Our Events 
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
          A glimpse into our football development journey, showcasing powerful moments from training, tournaments, and community events organized by the <strong>WAWU Foundation</strong>.
        </p>

        {/* Events Box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <div
            onClick={() => navigate("/inllevents")}
            className="relative h-72 rounded-2xl shadow-lg cursor-pointer overflow-hidden group transition-transform duration-300 hover:scale-105"
            role="button"
            tabIndex={0}
            onKeyPress={(e) => e.key === "Enter" && navigate("/inllevents")}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${inllBg})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-white z-10">
              INLL Events
            </h3>
          </div>

          {/* Placeholder for future gallery cards */}
          {/* You can copy and reuse the above div to add more event gallery items */}

        </div>
      </div>
    </section>
  );
};

export default Gallery;
