import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Masthead from './components/Masthead';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Navigation />

      <Masthead />

      <AboutSection />

      <PortfolioSection />

      <ContactSection />

      <Footer />
    </>
  );
}

export default App;
