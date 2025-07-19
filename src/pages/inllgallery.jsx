// src/components/InllGallery.jsx
import React from "react";
import { Link } from "react-router-dom";

// Import all 94 images manually (w1.jpg to w94.jpg)
import w1 from "../assets/images2/w1.jpg";
import w2 from "../assets/images2/w2.jpg";
import w3 from "../assets/images2/w3.jpg";
import w4 from "../assets/images2/w4.jpg";
import w5 from "../assets/images2/w5.jpg";
import w6 from "../assets/images2/w6.jpg";
import w7 from "../assets/images2/w7.jpg";
import w8 from "../assets/images2/w8.jpg";
import w9 from "../assets/images2/w9.jpg";
import w10 from "../assets/images2/w10.jpg";
import w11 from "../assets/images2/w11.jpg";
import w12 from "../assets/images2/w12.jpg";

import w14 from "../assets/images2/w14.jpg";
import w15 from "../assets/images2/w15.jpg";
import w16 from "../assets/images2/w16.jpg";
import w17 from "../assets/images2/w17.jpg";
import w18 from "../assets/images2/w18.jpg";
import w19 from "../assets/images2/w19.jpg";
import w20 from "../assets/images2/w20.jpg";
import w21 from "../assets/images2/w21.jpg";
import w22 from "../assets/images2/w22.jpg";
import w23 from "../assets/images2/w23.jpg";
import w24 from "../assets/images2/w24.jpg";
import w25 from "../assets/images2/w25.jpg";
import w26 from "../assets/images2/w26.jpg";
import w27 from "../assets/images2/w27.jpg";
import w28 from "../assets/images2/w28.jpg";
import w29 from "../assets/images2/w29.jpg";
import w30 from "../assets/images2/w30.jpg";
import w31 from "../assets/images2/w31.jpg";
import w32 from "../assets/images2/w32.jpg";
import w33 from "../assets/images2/w33.jpg";
import w34 from "../assets/images2/w34.jpg";
import w35 from "../assets/images2/w35.jpg";
import w36 from "../assets/images2/w36.jpg";
import w37 from "../assets/images2/w37.jpg";
import w38 from "../assets/images2/w38.jpg";
import w39 from "../assets/images2/w39.jpg";
import w40 from "../assets/images2/w40.jpg";
import w41 from "../assets/images2/w41.jpg";
import w42 from "../assets/images2/w42.jpg";
import w43 from "../assets/images2/w43.jpg";
import w44 from "../assets/images2/w44.jpg";
import w45 from "../assets/images2/w45.jpg";
import w46 from "../assets/images2/w46.jpg";
import w47 from "../assets/images2/w47.jpg";
import w48 from "../assets/images2/w48.jpg";
import w49 from "../assets/images2/w49.jpg";
import w50 from "../assets/images2/w50.jpg";
import w51 from "../assets/images2/w51.jpg";
import w52 from "../assets/images2/w52.jpg";
import w53 from "../assets/images2/w53.jpg";
import w54 from "../assets/images2/w54.jpg";
import w55 from "../assets/images2/w55.jpg";
import w56 from "../assets/images2/w56.jpg";
import w57 from "../assets/images2/w57.jpg";
import w58 from "../assets/images2/w58.jpg";
import w59 from "../assets/images2/w59.jpg";
import w60 from "../assets/images2/w60.jpg";
import w61 from "../assets/images2/w61.jpg";
import w62 from "../assets/images2/w62.jpg";
import w63 from "../assets/images2/w63.jpg";
import w64 from "../assets/images2/w64.jpg";
import w65 from "../assets/images2/w65.jpg";
import w66 from "../assets/images2/w66.jpg";
import w67 from "../assets/images2/w67.jpg";
import w68 from "../assets/images2/w68.jpg";
import w69 from "../assets/images2/w69.jpg";
import w70 from "../assets/images2/w70.jpg";
import w71 from "../assets/images2/w71.jpg";
import w72 from "../assets/images2/w72.jpg";
import w73 from "../assets/images2/w73.jpg";
import w74 from "../assets/images2/w74.jpg";
import w75 from "../assets/images2/w75.jpg";
import w76 from "../assets/images2/w76.jpg";
import w77 from "../assets/images2/w77.jpg";
import w78 from "../assets/images2/w78.jpg";
import w79 from "../assets/images2/w79.jpg";
import w80 from "../assets/images2/w80.jpg";
import w81 from "../assets/images2/w81.jpg";
import w82 from "../assets/images2/w82.jpg";
import w83 from "../assets/images2/w83.jpg";
import w84 from "../assets/images2/w84.jpg";
import w85 from "../assets/images2/w85.jpg";
import w86 from "../assets/images2/w86.jpg";
import w87 from "../assets/images2/w87.jpg";
import w88 from "../assets/images2/w88.jpg";
import w89 from "../assets/images2/w89.jpg";
import w90 from "../assets/images2/w90.jpg";
import w91 from "../assets/images2/w91.jpg";
import w92 from "../assets/images2/w92.jpg";
import w93 from "../assets/images2/w93.jpg";
import w94 from "../assets/images2/w94.jpg";


// Create an array of imported images
const images = [
  w1, w2, w3, w4, w5, w6, w7, w8, w9, w10,
  w11, w12,  w14, w15, w16, w17, w18, w19, w20,
  w21, w22, w23, w24, w25, w26, w27, w28, w29, w30,
  w31, w32, w33, w34, w35, w36, w37, w38, w39, w40,
  w41, w42, w43, w44, w45, w46, w47, w48, w49, w50,
  w51, w52, w53, w54, w55, w56, w57, w58, w59, w60,
  w61, w62, w63, w64, w65, w66, w67, w68, w69, w70,
  w71, w72, w73, w74, w75, w76, w77, w78, w79, w80,
  w81, w82, w83, w84, w85, w86, w87, w88, w89, w90,
  w91, w92, w93, w94
];


const InllGallery = () => {
  return (
    <div className="min-h-screen bg-white text-[#07293d]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 py-16 text-center text-white">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">INLL Tournament Gallery</h1>
        <p className="text-lg text-white/80">Glimpses from India’s Next Legend League</p>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 mt-6 text-sm text-[#11698E]">
        <Link to="/" className="hover:underline">Home</Link> / <span className="font-medium">Gallery</span>
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto px-4 mt-6 text-center text-gray-700">
        <p>
          Explore the journey of young legends across India! This gallery showcases incredible moments from talent hunts,
          grassroots camps, and INLL events organized by the WAWU Foundation.
        </p>
      </div>

      {/* Gallery with Variable Tile Sizes */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images.map((img, index) => {
          const isLarge = index % 7 === 0 || index % 11 === 0; // Vary pattern
          const tileClass = isLarge ? "row-span-2 col-span-2" : "";

          return (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl shadow-md group ${tileClass}`}
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InllGallery;