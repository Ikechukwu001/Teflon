// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { setPageMeta } from '../seo';
import Hero from '../Components/Hero';
import SolarAnimationsGrid from '../Components/SolarAnimationsGrid';
import SolarCalculator from '../Components/SolarCalculator';
import Footer from '../Components/Footer';

function Home() {
  useEffect(() => {
    setPageMeta({
      title: 'Home | Teflon Solar',
      description: 'Clean, affordable solar energy for homes and businesses. Discover how Teflon Solar can power your future.'
    });
  }, []);

  return (
    <main className="bg-gradient-to-br from-[#fffef8] via-[#fefce8] to-[#fcfacc] text-gray-800">
      {/* Apply consistent container padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 pt-6 pb-12">
        <Hero />
        <SolarAnimationsGrid />
        <SolarCalculator />
      </div>
      <Footer />
    </main>
  );
}

export default Home;
