

import axios from 'axios';

const api = axios.create({
  baseURL: 'dnsbackend-production.up.railway.app/', // URL of the backend server
});

export default api;
