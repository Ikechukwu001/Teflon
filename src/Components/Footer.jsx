import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-gray-800 pt-12 bg-white border-t">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to Go Solar?
        </h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Let Teflon Solar help you switch to clean, reliable energy.
          Get in touch and take your first step toward sustainable power.
        </p>
        <a
          href="https://wa.me/2347065418938"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full transition"
        >
          <MessageCircle size={20} />
          Chat on WhatsApp
        </a>
      </div>

      {/* Main Footer Links & Info */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Teflon Solar. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/" className="hover:text-green-600">Home</Link>
            <Link to="/product" className="hover:text-green-600">Product</Link>
            <Link to="/contact" className="hover:text-green-600">Contact</Link>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp CTA */}
      <a
        href="https://wa.me/2347065418938"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg z-50 transition"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
};

export default Footer;
