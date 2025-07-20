import React from "react";
import { Link } from "react-router-dom";
import mentorshipImg from "../assets/images/mentorship.jpg";

const Mentorship = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Mentorship & Guidance
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            Connecting young talents with experienced mentors to shape their journey both on and off the field.
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-100 py-4 px-6">
        <div className="max-w-6xl mx-auto text-sm text-gray-700">
          <Link to="/" className="hover:underline text-[#2c5364] font-medium">
            Home
          </Link>{" "}
          / <span className="font-semibold">Mentorship & Guidance</span>
        </div>
      </div>

      {/* Content Section */}
      <section className="max-w-6xl mx-auto py-16 px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-[#203a43] mb-6">
            Empowering Athletes Through Real-World Experience
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            At the heart of every successful athlete lies strong guidance. Our Mentorship and Guidance program connects
            young footballers with seasoned professionals—former players, coaches, sports psychologists, and industry
            veterans.
            <br /><br />
            These mentors provide crucial support ranging from goal setting and performance advice to handling
            pressure and career planning. Through regular check-ins, motivational sessions, and workshops, mentees are
            empowered to tackle setbacks and stay focused on their long-term aspirations.
            <br /><br />
            Our mentors also help navigate the less-visible aspects of the sports industry—contract negotiations,
            brand building, and maintaining mental health. We believe that mentorship not only develops better
            players but also responsible individuals equipped for life beyond football.
            <br /><br />
            Whether it’s choosing the right academy or dealing with performance anxiety, our
            network ensures no athlete feels alone in their journey.
          </p>
        </div>
        <div>
          <img
            src={mentorshipImg}
            alt="Mentorship and Guidance"
            className="rounded-2xl shadow-xl w-full object-cover"
          />
          <p className="text-center text-sm text-gray-500 mt-2">
            Mentor Session – Delhi Camp 2025
          </p>
        </div>
      </section>
    </div>
  );
};

export default Mentorship;
