// Same imports...
import React, { useEffect } from 'react';
import { setPageMeta } from '../seo';
import Hero from '../Components/Hero';
import SolarCalculator from '../Components/SolarCalculator';
import Footer from '../Components/Footer';
import TeflonLogo from '../assets/TefonLogo.png';
import Bulb from '../assets/BUlb.jpg';
import FadeInWhenVisible from '../Components/FadeInWhenVisible';


function Home() {
  useEffect(() => {
    setPageMeta({
      title: 'Home | Teflon Solar',
      description: 'Clean, affordable solar energy for homes and businesses. Discover how Teflon Solar can power your future.'
    });
  }, []);

  return (
    <main className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 pt-8 pb-16">
        
        {/* Hero */}
        <FadeInWhenVisible>
          <Hero />
        </FadeInWhenVisible>

        {/* About Section */}
        <FadeInWhenVisible direction="left">
          <section className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Who We Be
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We na Teflon Solar — we dey help Sapele people and nearby areas move to clean, steady solar light wey no go fail you when NEPA disappoint.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether na for house or business, we go calculate wetin fit work for you, fix am sharp-sharp, and make sure say your bill go reduce wella. Our engineers sabi the work.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={TeflonLogo}
                alt="Teflon Solar Team"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </section>
        </FadeInWhenVisible>

        {/* Calculator Section */}
        <FadeInWhenVisible direction="right">
          <section className="flex flex-col md:flex-row gap-10 items-center md:items-start">
            <div className="md:w-1/2 space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                Run Quick Solar Calculator
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Just use this simple calculator to check how much light you go need and how much e go cost — no story. Everything na based on your power usage and lifestyle.
              </p>
              <img
                src={Bulb}
                alt="Solar Bulb"
                className="rounded-xl shadow-md w-full max-h-[300px] object-cover mt-4"
              />
            </div>
            <div className="md:w-1/2">
              <SolarCalculator />
            </div>
          </section>
        </FadeInWhenVisible>

      </div>

      <Footer />
    </main>
  );
}

export default Home;
