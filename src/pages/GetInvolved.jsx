import React from "react";
import { FaHandHoldingUsd, FaHandshake, FaUserFriends } from "react-icons/fa";
import DonateImg from "../assets/images/Donate.jpg";
import PartnerImg from "../assets/images/partnership.jpeg";
import VolunteerImg from "../assets/images/Volunteer.jpg";

const GetInvolved = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-[#07293d]">Get Involved</h2>
      <p className="text-[#11698E] mt-2">Get Involved With Us.</p>

      <div className="grid md:grid-cols-3 gap-8 mt-10 max-w-6xl mx-auto px-4">
        {/* Donate Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center relative">
          <img
            src={DonateImg}
            alt="Donate"
            className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-lg"
          />
          <div className="relative z-10 flex justify-center">
            <FaHandHoldingUsd className="text-[#07293d] text-5xl" />
          </div>
          <h3 className="text-xl font-semibold mt-4 relative z-10">Donate</h3>
          <p className="text-[#07293d] mt-2 relative z-10">
            Your contributions can change the lives of young footballers.
          </p>
          <a
            href="https://your-donation-link.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#11c120] text-white py-2 px-4 rounded-md hover:bg-[#11698E] transition relative z-10"
          >
            Donate Now
          </a>
        </div>

        {/* Partner with Us Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center relative">
          <img
            src={PartnerImg}
            alt="Partner with Us"
            className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-lg"
          />
          <div className="relative z-10 flex justify-center">
            <FaHandshake className="text-[#07293d] text-5xl" />
          </div>
          <h3 className="text-xl font-semibold mt-4 relative z-10">
            Partner with Us
          </h3>
          <p className="text-[#07293d] mt-2 relative z-10">
            Collaborate with WAWU to expand opportunities for players.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfNBVR6FfWGeUCBCVLjXpW0KvXR_bcbhCyoicimhFZAUtXItw/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#07293d] text-white py-2 px-4 rounded-md hover:bg-[#11698E] transition relative z-10"
          >
            Become a Partner
          </a>
        </div>

        {/* Volunteer Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center relative">
          <img
            src={VolunteerImg}
            alt="Volunteer"
            className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-lg"
          />
          <div className="relative z-10 flex justify-center">
            <FaUserFriends className="text-[#07293d] text-5xl" />
          </div>
          <h3 className="text-xl font-semibold mt-4 relative z-10">Volunteer</h3>
          <p className="text-[#11698E] mt-2 relative z-10">
            Join our team and make a direct impact on the next generation of
            Indian football stars.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfJzL7aBuZdw-GSbLtiYcx99QqjGFuaQN2eKeFnqIhBiyL9Hg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#07293d] text-white py-2 px-4 rounded-md hover:bg-[#11698E] transition relative z-10"
          >
            Volunteer Now
          </a>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center relative">
          <img
            src={VolunteerImg}
            alt="Volunteer"
            className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-lg"
          />
          <div className="relative z-10 flex justify-center">
            <FaUserFriends className="text-[#07293d] text-5xl" />
          </div>
          <h3 className="text-xl font-semibold mt-4 relative z-10">Internship</h3>
          <p className="text-[#11698E] mt-2 relative z-10">
            Join our team 
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScjJek99jPOIEXAojcHGuAQYd-C8sEwenC2MgaGYhT-HxqGRA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-[#07293d] text-white py-2 px-4 rounded-md hover:bg-[#11698E] transition relative z-10"
          >
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
