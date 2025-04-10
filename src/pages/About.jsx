import React from "react";

const About = () => {
  return (
    <div id="about" className="p-12 text-center bg-[#07293d] text-white rounded-b-full">
      {/* Heading with better contrast and emphasis */}
      <h1 className="text-4xl font-extrabold text-white uppercase tracking-wide">
        About Us
      </h1>

      {/* More structured and engaging content */}
      <div className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed">
        <p className="text-gray-200">
          At <span className="font-semibold text-white">WAWU Foundation</span>, we are shaping the future of football by identifying and nurturing the next generation of stars. Our dedicated scouting team seeks out raw talent, providing young players with world-class training and life-changing opportunities.
        </p>

        <p className="text-gray-200 mt-4">
          But we go beyond training—we believe that financial barriers should never hold back a player’s dreams. Through sponsorships and fundraising, we ensure that every talented player gets the support they need to reach the global stage.
        </p>

        <p className="text-gray-200 mt-4 font-semibold">
          Join us in empowering future champions. Together, we can build a legacy of excellence.
        </p>
      </div>
    </div>
  );
};

export default About;
