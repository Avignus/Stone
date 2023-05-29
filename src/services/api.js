import axios from 'axios';

const api = axios.create({
  baseUrl: 'supermarket.chef.io/api/v1/',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json',
  },
});

export default api;
