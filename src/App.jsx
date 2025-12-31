import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Features from './pages/Features';
import Faculty from './pages/Faculty';
import TrustCredibility from './pages/TrustCredibility';
import FinalCTA from './pages/FinalCTA';
import { BookingProvider } from './context/BookingContext';
import BookingModal from './components/BookingModal';

function App() {
  return (
    <BookingProvider>
      <div className="bg-brand-primary min-h-screen overflow-x-hidden relative">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="faculty">
          <Faculty />
        </div>
        <div id="success-stories">
          <TrustCredibility />
        </div>
        <FinalCTA />
        <Footer />
        <BookingModal />
      </div>
    </BookingProvider>
  );
}

export default App;
