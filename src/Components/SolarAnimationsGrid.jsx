// src/components/SolarAnimationsGrid.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

import homeInspect from '../assets/Home.json'
//import panelAnim from '../assets/solar-panel.json';
//import batteryAnim from '../assets/battery.json';
//import bulbAnim from '../assets/lightbulb.json';

const animations = [
  { data: homeInspect, title: 'We inspect your site' },
  { data: homeInspect, title: 'We design your system' },
  { data: homeInspect, title: 'We install plus maintain' },
  { data: homeInspect, title: 'You enjoy 24/7 light' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const SolarAnimationsGrid = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Why Go Solar?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {animations.map((anim, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <Lottie animationData={anim.data} loop style={{ height: 200 }} />
            <h3 className="mt-4 font-semibold text-lg text-gray-700">
              {anim.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SolarAnimationsGrid;
