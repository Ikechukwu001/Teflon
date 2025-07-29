// routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import Product from '../Pages/Product';
import Contact from '../Pages/Contact';
import Teflon from '../Pages/Teflon';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Teflon" element={<Teflon />} />
    </Routes>
  );
}

export default AppRoutes;
