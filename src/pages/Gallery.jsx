import React from "react";
import { useNavigate } from "react-router-dom";
import officeBg from "../assets/images/WAWU DP1.jpg";
import inllBg from "../assets/images/INLL DP.jpg";

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-16 ">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#061428] tracking-wide uppercase">
        Our Events Gallery
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Office Events Box */}
        <div
          onClick={() => navigate("/officeevents")}
          className="relative h-80 rounded-2xl shadow-lg cursor-pointer overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${officeBg})` }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white z-10">
            Office Events
          </h3>
        </div>

        {/* Inll Events Box */}
        <div
          onClick={() => navigate("/inllevents")}
          className="relative h-80 rounded-2xl shadow-lg cursor-pointer overflow-hidden group"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundImage: `url(${inllBg})` }}
          ></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <h3 className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-white z-10">
            Inll Events
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
