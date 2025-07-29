// src/components/Footer.jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#fefce8] text-gray-800 pt-16">
      {/* CTA Banner */}
      <div className="max-w-6xl mx-auto px-6 py-12 rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-50 shadow-lg text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Go Solar?
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Let Teflon Solar help you switch to clean, reliable energy. Reach out today!
        </p>
        <a
          href="https://wa.me/2347065418938"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition duration-300"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 py-6 border-t border-yellow-300 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Teflon Solar. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-yellow-600">Home</Link>
          <Link to="/about" className="hover:text-yellow-600">About</Link>
          <Link to="/contact" className="hover:text-yellow-600">Contact</Link>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/2347065418938"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;
