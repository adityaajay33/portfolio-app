"use client";

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import YouTubeVideo from '../YoutubeComponent/YoutubeVideo';

const ScrollMessage = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;

    controls.start({
      opacity: scrollY >= 400 ? 1 : 0, // Fade out when scrollY is greater than or equal to 400
      y: scrollY >= 400 ? -50 : -scrollY / 8, // Gradually move up when scrollY is less than 400
    });
  };

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <YouTubeVideo videoId={'g8IvO7OwdaM'} />
      
    </motion.div>
  );
};

export default ScrollMessage;