import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import About from './components/About';
import EducationWork from './components/EducationWork';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      <Navigation />
      <Hero />
      <Expertise />
      <About />
      <EducationWork />
      <Projects />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
