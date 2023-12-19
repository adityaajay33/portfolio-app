
import React from 'react';
import './VideoIntro.css'; // Update with your CSS module file
import YouTubeVideo from '../YoutubeComponent/YoutubeVideo';
import ScrollMessage from '../ScrollMessage/ScrollMessage';

const VideoIntro = () => {

  return (
    <div className='overallVideo'>
      <div className='videoTitle'>Message</div>
      <div className="spacer">
        <ScrollMessage />
      </div>
    </div>
  );
};

export default VideoIntro;
