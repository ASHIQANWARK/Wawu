import React from "react";
import Hero from "../pages/Hero";
import About from "../pages/About";
import MissionVision from "../pages/Mission";
import Testimonials from "../pages/Testimonials";
import Team from "../pages/Team";
import Events from "../pages/Events";
import Chatbot from "../pages/Chatbot";
import Whyus from "../pages/Whyus";
import Service from "../pages/Service";
import Impact from "../pages/Impact";
import GetInvolved from "./GetInvolved";

const Home = () => {
  return (
    <div>
      <Hero />

      <About />
      <MissionVision />
      <Events />
      <Whyus />
      <Service />
      <Impact />
      <GetInvolved />
      <Team />
      <Testimonials />
      <Chatbot />
    </div>
  );
};

export default Home;
