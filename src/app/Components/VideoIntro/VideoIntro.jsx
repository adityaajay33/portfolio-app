// VideoIntro.js
"use client";
import React, { useEffect, useRef } from 'react';
import styles from './VideoIntro.module.css'; // Update with your CSS module file
import YouTubeVideo from '../YoutubeComponent/YoutubeVideo';

const VideoIntro = () => {
  const videoIntroRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add a class or take any action when the VideoIntro is in view
          videoIntroRef.current.classList.add(styles.visible);
        } else {
          // You can handle the case when the VideoIntro is not in view
          videoIntroRef.current.classList.remove(styles.visible);
        }
      });
    }, options);

    // Start observing the target element
    observer.observe(videoIntroRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={videoIntroRef} className={`${styles.videoIntro} overallVideo`}>
      <div className={styles.videoTitle}>Message</div>
      <div className={styles.spacer}>
        <YouTubeVideo videoId={'g8IvO7OwdaM'} />
      </div>
    </div>
  );
};

export default VideoIntro;
