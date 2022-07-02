import { NextApiResponse } from 'next';

import { ServerResponse } from 'http';
import cookie from 'cookie';

import { cookieConfig } from '~/configs';

const deleteCookie = (res: NextApiResponse | ServerResponse, key: string) => {
  res.setHeader(
    'Set-Cookie',
    cookie.serialize(key, '', {
      ...cookieConfig,
      expires: new Date(0),
    }),
  );
};

export default deleteCookie;
