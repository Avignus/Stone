import axios, {
  AxiosError,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from 'axios';
// import Config from 'react-native-config';

const baseURL = 'https://api.unsplash.com';
const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: 'Client-ID flJcexVO8pTEE_OoEXY0qcGCVV-v0GYvHNuj2wlm6As',
  'X-Ratelimit-Limit': 1000,
  'X-Ratelimit-Remaining': 999,
};

console.log('baseURL: ', baseURL);

const API = axios.create({
  baseURL,
  timeout: 30000,
  headers,
  transformResponse: data => {
    try {
      return JSON.parse(data);
    } catch (error) {
      throw Error(
        `[requestClient] Error parsing response JSON data - ${JSON.stringify(
          error,
        )}`,
      );
    }
  },
});

API.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // config.headers
    config.headers.set(headers);
    return config;
  },
  (error: any) => {
    console.log('request error: ', error);
    Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  async (error: AxiosError) => {
    console.log('response error: ', error);
    // const originalRequest = error.config;
    return Promise.reject(error);
  },
);

export default API;
