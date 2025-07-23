import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Header from './components/Header';
import Skills from './components/Skills';

const HomePage = () => {
  return (
    <main>
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;
