import React from "react";
import Hero from "../pages/Hero";
import About from "../pages/About";
import MissionVision from "../pages/Mission";

import Team from "../pages/Team";
import Events from "../pages/Events";
import Chatbot from "../pages/Chatbot";
import Whyus from "../pages/Whyus";
import Service from "../pages/Service";
import Impact from "../pages/Impact";
import GetInvolved from "./GetInvolved";
import Gallery from "../pages/Gallery";

const Home = () => {
  return (
    <div>
      <Hero />

      <About />
      <MissionVision />
      <Whyus />
      <Events />
      <Service />
      <Impact />
      <GetInvolved />
      <Gallery />
      <Team />
      
      <Chatbot />
    </div>
  );
};

export default Home;
