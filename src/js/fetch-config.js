import axios from 'axios';

const API_KEY = '6b1b36ecf2f3f3c0d27307e18cbffcb3';
const BASE_URL = 'https://api.themoviedb.org/3/configuration';

export async function fetchConfig() {
  const responce = await axios.get(BASE_URL, {
    params: {
      api_key: API_KEY,
    },
  });

  return responce.data;
}
