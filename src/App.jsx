// App.jsx
import React from 'react';
import Navbar from './Components/Navbar'
import AppRoutes from './Routes/AppRoutes'
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen md:px-5 lg:px-10">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
