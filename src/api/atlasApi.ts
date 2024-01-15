import axios from 'axios';

const APIAtlasV2 = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    Expires: '0',
  },
});

export default APIAtlasV2;
