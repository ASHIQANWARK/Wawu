import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Mission from './pages/Mission';
import Testimonials from './pages/Testimonials';
import Team from './pages/Team';
import Events from './pages/Events';
import Inll from './pages/Inll';
import Contacts from './pages/Contact';
import Donate from './pages/Donate';

import InllEvents from './pages/inllgallery';
import Talent from './pages/Talent';
import CompSupport from './pages/CompSupport';
import ProfessionalTraining from './pages/Pf';
import Mentorship from './pages/Mentor';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/inll" element={<Inll />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/donate" element={<Donate />} />
       
        <Route path="/inllevents" element={<InllEvents />} />
        <Route path="/talent" element={<Talent />} />
       <Route path="/compsupport" element={<CompSupport/>} />
       <Route path="/pf" element={<ProfessionalTraining />} />
       <Route path="/mentor" element={<Mentorship />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
