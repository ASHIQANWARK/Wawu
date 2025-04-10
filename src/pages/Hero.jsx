import React from "react";
import heroBg from "../assets/images/hero3.jpg"; // Import the image

const Hero = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center  flex flex-col items-center justify-center text-white text-center px-6"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover", // Ensures full coverage
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 backdrop-brightness-60 bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 px-4 md:px-10">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
          style={{ textShadow: "2px 2px 10px rgba(0, 0, 0, 0.5)" }}
        >
          Empowering India's Football Stars of Tomorrow
        </h1>
        <p
          className="text-lg md:text-xl mb-8 leading-relaxed"
          style={{ textShadow: "1px 1px 6px rgba(0, 0, 0, 0.6)" }}
        >
          Join us in our mission to discover young football talents and support
          their dreams through donations.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
          <button className="bg-[#11698E] hover:bg-[#0D5C75] text-black font-bold py-3 px-6 rounded-lg transition duration-300">
            Donate Now
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 rounded-lg transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
