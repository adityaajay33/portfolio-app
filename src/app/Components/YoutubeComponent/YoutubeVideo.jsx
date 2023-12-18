"use client";
import { getVideoInfo } from '../../youtube';
import { useEffect, useState } from 'react';


const YouTubeVideo = ({ videoId }) => {
  const [videoInfo, setVideoInfo] = useState(null);

  useEffect(() => {
    const fetchVideoInfo = async () => {
      const info = await getVideoInfo(videoId);
      setVideoInfo(info);
    };

    fetchVideoInfo();
  }, [videoId]);

  if (!videoInfo) {
    return <div>Loading...</div>;
  }

  const { title } = videoInfo;

  return (
    <div>
      <iframe
        width="800"
        height="450"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
