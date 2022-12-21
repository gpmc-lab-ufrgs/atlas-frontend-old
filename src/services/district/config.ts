import axios from 'axios';
const baseUrl = 'http://localhost:8000/district';
const districtEndpoint = axios.create({
  baseURL: baseUrl,
});

export default districtEndpoint;
