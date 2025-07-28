// pages/Home.jsx
import React, { useEffect } from 'react';
import { setPageMeta } from '../seo'
import Hero from '../Components/Hero';

function Home() {
  useEffect(() => {
    setPageMeta({
      title: 'Home | Teflon Solar',
      description: 'Clean, affordable solar energy for homes and businesses. Discover how Teflon Solar can power your future.'
    });
  }, []);

  return (
    <section className="mt-8">
      <Hero />
    </section>
  );
}

export default Home;
