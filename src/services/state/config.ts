import axios from 'axios';

const baseUrl = 'http://localhost:8000/state';

const stateEndpoint = axios.create({
  baseURL: baseUrl,
});

export default stateEndpoint;
