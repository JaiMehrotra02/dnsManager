

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dns-xdrc.onrender.com/', // URL of the backend server
});

export default api;
