// src/pages/ComingSoon.jsx
import React, { useEffect } from 'react';
import { Construction } from 'lucide-react';
import { setPageMeta } from '../seo';

const Contact = () => {
  useEffect(() => {
    setPageMeta({
      title: 'Contact | Teflon Solar',
      description:
        'This page is currently under construction. Ikechukwu is actively working on it — check back shortly for updates.'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 flex items-center justify-center px-4">
      <div className="text-center space-y-4 max-w-md">
        <div className="flex justify-center">
          <Construction size={64} className="text-blue-600 animate-bounce" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Page Under Construction
        </h1>
        <p className="text-lg text-gray-600">
          Ikechukwu is currently working on this page. Please check back soon!
        </p>
        <p className="text-sm text-gray-400 italic">
          Thank you for your patience 🙏
        </p>
      </div>
    </div>
  );
};

export default Contact;
