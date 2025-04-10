import React from "react";
import missionImg from "../assets/images/mission2.jpg"; // Replace with actual image
import visionImg from "../assets/images/vision.jpg"; // Replace with actual image

const MissionVision = () => {
  return (
    <section className=" bg-transparent bg-opacity-50 py-16 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Mission Section */}
        <div className="relative flex flex-col items-center text-center bg-[#07293d] shadow-lg rounded-tr-full rounded-bl-full p-8 transition transform hover:scale-105">
          <img
            src={missionImg}
            alt="Mission"
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="p-8 bg-[#07293d] text-center rounded-lg ">
            <h1 className="text-4xl font-extrabold text-[#fff] mb-4 uppercase tracking-wide">
              Our Mission
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              At WAVU Foundation, we believe talent knows no boundaries, but
              opportunities do. Our mission is to{" "}
              <span className="font-extrabold ">
                discover, nurture, and empower
              </span>{" "}
              young footballers through scholarships, world-class training, and
              global exposure. With strategic academy partnerships, we provide{" "}
              <span className="font-bold text-[#fff200]">
                tier coaching, mentorship, and career-building opportunities
              </span>
              . Together, we can{" "}
              <span className="font-extrabold">
                unlock potential and transform dreams into reality
              </span>
              .
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="relative flex flex-col items-center text-center bg-[#07293d] shadow-lg rounded-br-full rounded-tl-full p-8 transition transform hover:scale-105">
          <img
            src={visionImg}
            alt="Vision"
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="p-8 bg-[#07293d] text-center rounded-lg ">
            <h1 className="text-4xl font-extrabold text-[#fff] mb-4 uppercase tracking-wide">
              Our Vision
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-3xl mx-auto">
              We envision a world where{" "}
              <span className="font-extrabold">young footballers</span> get the
              chance to showcase their talent, receive{" "}
              <span className="font-extrabold text-[#fff200]">
                elite training and mentorship
              </span>{" "}
              and turn their passion into a professional career. WAVU Foundation
              is dedicated to{" "}
              <span className="font-extrabold">breaking barriers</span> and
              creating pathways for future football stars. With the right
              support, these athletes can
              <span className="font-extrabold"> inspire generations</span> and
              leave a lasting legacy in the world of football.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
