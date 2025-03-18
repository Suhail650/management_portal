import axios from 'axios';

import { API_URL } from '../../constants/api-url';

const api = axios.create({ baseURL: API_URL });

api.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }
});

export default api;
