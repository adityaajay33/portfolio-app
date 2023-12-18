import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // Replace with your API key
const BASE_URL = 'https://www.googleapis.com/youtube/v3';

export async function getVideoInfo(videoId) {

  console.log(process.env.NEXT_PUBLIC_YOUTUBE_API_KEY);
  const url = `${BASE_URL}/videos`;
  const params = {
    id: videoId,
    key: API_KEY,
    part: 'snippet',
  };

  try {
    const response = await axios.get(url, { params });
    return response.data.items[0].snippet;
  } catch (error) {
    console.error('Error fetching video information:', error.message);
    return null;
  }
}
