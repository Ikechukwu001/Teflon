import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Sun, Phone } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { to: '/', icon: <Home size={18} />, label: 'Home' },
  { to: '/Product', icon: <Sun size={18} />, label: 'Product' },
  { to: '/Contact', icon: <Phone size={18} />, label: 'Contact' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="flex justify-center py-6 bg-[#fffef8]">
      <div className="bg-white border border-yellow-50 shadow-md rounded-full flex items-center px-5 py-3 gap-4">
        {/* Icon Links */}
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.to}
            className={clsx(
              'text-gray-500 p-2 rounded-full hover:bg-yellow-100 transition-all',
              location.pathname === item.to && 'bg-yellow-200 text-yellow-700'
            )}
            title={item.label}
          >
            {item.icon}
          </Link>
        ))}

        {/* CTA Button */}
        <Link
          to="/Teflon"
          className="bg-green-600 text-white px-4 py-1.5 rounded-full ml-3 text-sm font-semibold hover:bg-green-700 transition"
        >
          Teflon Solar
        </Link>
      </div>
    </nav>
  );
}
