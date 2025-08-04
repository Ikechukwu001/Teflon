import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
  visible: (direction) => ({
    opacity: 1,
    x: direction === 'left' ? 0 : direction === 'right' ? 0 : 0,
    y: direction === 'up' ? 0 : direction === 'down' ? 0 : 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }),
  hidden: (direction) => ({
    opacity: 0,
    x: direction === 'left' ? -80 : direction === 'right' ? 80 : 0,
    y: direction === 'up' ? -80 : direction === 'down' ? 80 : 0,
  }),
};

export default function FadeInWhenVisible({ children, direction = 'up' }) {
  const { ref, inView } = useInView({
    triggerOnce: false, // 👈 Keep watching visibility
    threshold: 0.2,      // 👈 Trigger when 20% of the section is in view
  });

  return (
    <motion.div
      ref={ref}
      custom={direction}
      variants={variants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}
