import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import art1 from "../assets/image/img1.jpg";
import art2 from "../assets/image/img2.jpg";
import art4 from "../assets/image/img3.jpg";
import art5 from "../assets/image/img4.jpg";
import art6 from "../assets/image/img5.jpg";
import art7 from "../assets/image/img6.jpg";
import art8 from "../assets/image/img7.jpg";
import art9 from "../assets/image/img8.jpg";
import art10 from "../assets/image/img9.jpg";
import art11 from "../assets/image/img10.jpg";

import heroBg from "../assets/images/WAWU DP1.jpg";

const images = [
  { src: art1, alt: "Art 1" },
  { src: art2, alt: "Art 2" },
  { src: art4, alt: "Art 4" },
  { src: art5, alt: "Art 5" },
  { src: art6, alt: "Art 6" },
  { src: art7, alt: "Art 7" },
  { src: art8, alt: "Art 8" },
  { src: art9, alt: "Art 9" },
  { src: art10, alt: "Art 10" },
  { src: art11, alt: "Art 11" },
];

const OfficeEvents = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-96 flex items-center justify-center">
        <img
          src={heroBg}
          alt="Office Events Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <h1 className="relative text-5xl md:text-6xl font-extrabold text-white uppercase drop-shadow-lg text-center">
          Office Events
        </h1>
      </div>

      {/* Breadcrumb Section */}
      <div className="w-full bg-[#07293d] px-6 py-4 text-sm text-white">
        <nav className="flex flex-wrap items-center gap-2" aria-label="Breadcrumb">
          <span className="hover:underline cursor-pointer" onClick={() => navigate("/")}>
            Home
          </span>
          <span>/</span>
          <span className="hover:underline cursor-pointer" onClick={() => navigate("/")}>
            Events
          </span>
          <span>/</span>
          <span className="text-gray-300 font-semibold">Office Events</span>
        </nav>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-6 pb-16">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-[#061428] tracking-wide uppercase">
          Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-60 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4">
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              className="absolute top-2 right-2 text-white text-3xl z-10"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-contain rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficeEvents;
