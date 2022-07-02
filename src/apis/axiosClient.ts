import axios, { AxiosError } from 'axios';

const axiosClient = axios.create({
  baseURL: 'api/', // next api page
  headers: {
    'content-type': 'application/json',
  },
  withCredentials: true,
});

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosClient.interceptors.response.use(
  (response) => {
    if (response.data) return response.data;
  },
  (error: AxiosError) => {
    if (error.response) return error.response.data;
  },
);

export default axiosClient;
