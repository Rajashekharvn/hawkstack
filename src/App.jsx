import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrainingSection from './components/TrainingSection';
import RHCSASection from './components/RHCSASection';
import ApproachSection from './components/ApproachSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-dark-gradient">
      <Navbar />
      <Hero />
      <TrainingSection />
      <RHCSASection />
      <ApproachSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
