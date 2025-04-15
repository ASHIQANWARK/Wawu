import React, { useState } from "react";
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
  { src: art11, alt: "Art 11" }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="container mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-[#061428] tracking-wide uppercase">
        Gallery
      </h2>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              onClick={() => setSelectedImage(image.src)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes />
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-[90vw] max-h-[90vh] rounded-lg shadow-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
