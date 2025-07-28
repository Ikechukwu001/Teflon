// App.jsx
import React from 'react';
import Navbar from './Components/Navbar'
import AppRoutes from './Routes/AppRoutes'
import './index.css'; // Ensure Tailwind CSS is imported

function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 md:px-10 lg:px-20">
        <AppRoutes />
      </main>
    </>
  );
}

export default App;
