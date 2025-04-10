import React from "react";
import roleIMG from "../assets/images/rolemodel.jpg";
import teamimage from "../assets/images/team.jpg";
import potentialimg  from "../assets/images/potential.jpg";
import team2img from "../assets/images/team2img.jpg";
const AboutSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900">
          Why <span className="text-[#07293d]">WAWU Foundation?</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          India’s youth possess raw talent and passion for football, but they
          lack structured pathways to pursue the sport professionally. The
          current sports ecosystem is predominantly cricket-focused, leaving
          football players with limited avenues to showcase and hone their
          skills.
        </p>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-[#07293d] shadow-lg rounded-2xl overflow-hidden">
            <img
              src={potentialimg}
              alt="Unlocking Potential"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg text-white">
                Unlocking Potential
              </h3>
              <p className="text-white text-sm mt-2">
                India’s youth possess raw talent and passion for football, but
                they lack structured pathways to pursue the sport professionally.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#07293d] shadow-lg rounded-2xl overflow-hidden">
            <img
              src={teamimage}
              alt="Bridging the Gap"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg text-white">
                Bridging the Gap
              </h3>
              <p className="text-white text-sm mt-2">
                By providing access to professional coaching, financial support,
                and opportunities, WAWU fills the void in India’s football
                development ecosystem.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#07293d] shadow-lg rounded-2xl overflow-hidden">
            <img
              src={team2img}
              alt="Transforming Lives"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg text-white">
                Transforming Lives
              </h3>
              <p className="text-white text-sm mt-2">
                Football is more than just a sport; it teaches discipline,
                teamwork, leadership, and resilience.
              </p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-[#07293d] shadow-lg rounded-2xl overflow-hidden">
            <img
              src={roleIMG}
              alt="Creating Role Models"
              className="w-full h-52 object-cover"
            />
            <div className="p-6 text-center">
              <h3 className="font-bold text-lg text-white">
                Creating Role Models
              </h3>
              <p className="text-white text-sm mt-2">
                We aim to develop football stars who inspire others and represent
                India on global platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
