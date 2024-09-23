import axios from 'axios';

const fetchImages = async (page = 1, query = "qwe", perPage = 10) => {
  const API_KEY = "Jr_xcemO_2S3_pef-r3E2AJIg1ocVots09rMJHdNulE";
  const URL = `https://api.unsplash.com/search/photos?query${query}&page=${page}&per_page=${perPage}&client_id=${API_KEY}`;
  
  const { data } = await axios.get(URL);
  return data;
};

export default fetchImages;
