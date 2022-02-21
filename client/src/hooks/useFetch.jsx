import { useEffect, useState } from 'react';
import axios from 'axios';

const APIKEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({ keyword }) => {
  const [gifUrl, setGifUrl] = useState('');

  const fetchGifs = async () => {
    try {
      const { data } = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword.split(' ').join('')}&limit=1`,
      );

      console.log(data.data[0]?.images?.downsized_medium.url);

      setGifUrl(data.data[0]?.images?.downsized_medium.url);
    } catch (error) {
      setGifUrl(
        'https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284',
      );
    }
  };

  useEffect(() => {
    if (keyword) fetchGifs();
  }, [keyword]);

  return gifUrl;
};

export default useFetch;
