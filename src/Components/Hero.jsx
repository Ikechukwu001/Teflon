import React from 'react';
import heroBg from '../assets/Teflon.png'
import { ArrowRight } from 'lucide-react';

function Hero() {
  return (
    <section
      className="relative w-full h-[90vh] bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >

      {/* Text Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col gap-4">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Na Sun Go  <br /> Light Your House Now
        </h1>
        <p className="max-w-xl text-lg text-gray-200">
          We sabi set you up with better solar system wey go help you save money, cut NEPA wahala, and give you steady light 24/7.
          Join people wey don already switch to solar and no dey look back.
        </p>
      </div>

      {/* CTA Bubble Button */}
      <button className="absolute bottom-10 right-10 z-10 bg-white text-black px-6 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition">
        Join us power your own house
        <ArrowRight size={18} />
      </button>
    </section>
  );
}

export default Hero;
