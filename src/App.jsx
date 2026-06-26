import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatsInside from './components/WhatsInside';
import TrainingLibrary from './components/TrainingLibrary';
import PackLeaders from './components/PackLeaders';
import CommunityPreview from './components/CommunityPreview';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      <Header scrollPos={scrollPos} />
      <main>
        <Hero />
        <WhatsInside />
        <TrainingLibrary />
        <PackLeaders />
        <CommunityPreview />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;