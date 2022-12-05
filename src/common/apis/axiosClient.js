import axios from 'axios';

const config = {
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'text/plain',
  },
};
const axiosClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  https: config,
});

export default axiosClient;
