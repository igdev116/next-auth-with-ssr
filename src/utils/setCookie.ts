import { NextApiResponse } from 'next';

import { ServerResponse } from 'http';
import cookie from 'cookie';

import { cookieConfig } from '~/configs';

interface Payload {
  key: string;
  value: string;
}

const setCookie = (res: NextApiResponse | ServerResponse, { key, value }: Payload) => {
  res.setHeader('Set-Cookie', cookie.serialize(key, value, cookieConfig));
};

export default setCookie;
