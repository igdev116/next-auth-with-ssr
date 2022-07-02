import { GetServerSidePropsContext } from 'next';

import axios, { AxiosError } from 'axios';
import cookie from 'cookie';

import { FAKE_TOKEN } from '~/constants';
import absoluteUrl from 'next-absolute-url';

const axiosServer = (ctx: GetServerSidePropsContext) => {
  const { origin } = absoluteUrl(ctx.req);
  const token = ctx.req.cookies[FAKE_TOKEN.KEY];

  const axiosInstance = axios.create({
    baseURL: `${origin}/api/`, // use absolute URL
    headers: {
      'content-type': 'application/json',
      Cookie: cookie.serialize(FAKE_TOKEN.KEY, token!),
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

  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.data) return response.data;
    },
    (error: AxiosError) => {
      if (error.response) return error.response.data;
    },
  );

  return axiosInstance;
};

export default axiosServer;
