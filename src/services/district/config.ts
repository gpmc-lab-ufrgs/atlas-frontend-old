import axios from 'axios';

const districtEndpoint = axios.create({
  baseURL: 'http://localhost:8000/district',
});

export default districtEndpoint;
