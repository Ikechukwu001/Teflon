import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Sun, Phone, FileText } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { to: '/', icon: <Home size={18} />, label: 'Home' },
  { to: '/services', icon: <Sun size={18} />, label: 'Services' },
  { to: '/contact', icon: <Phone size={18} />, label: 'Contact' },
  { to: '/cv', icon: <FileText size={18} />, label: 'CV' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-center py-8">
      <div className="bg-white border border-gray-200 shadow-lg rounded-full flex items-center px-4 py-4 gap-3">
        {/* Icon Links */}
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className={clsx(
              'text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-all',
              location.pathname === item.to && 'bg-gray-200 text-black'
            )}
          >
            {item.icon}
          </Link>
        ))}

        {/* CTA Button */}
        <Link
          to="/blog"
          className="bg-yellow-500 text-white px-4 py-1.5 rounded-full ml-3 text-sm font-semibold hover:bg-yellow-600 transition"
        >
          Solar Blog
        </Link>
      </div>
    </nav>
  );
}
