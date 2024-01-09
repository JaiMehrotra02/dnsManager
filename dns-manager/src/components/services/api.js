

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dns-manager.vercel.app/', // URL of the backend server
});

export default api;
