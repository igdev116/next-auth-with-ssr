import { NextApiRequest, NextApiResponse } from 'next';

import { FAKE_TOKEN } from '~/constants';
import { deleteCookie } from '~/utils';

type Data = {
  success: boolean;
  message: string;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  deleteCookie(res, FAKE_TOKEN.KEY);

  res.json({ success: true, message: 'Logout successfully' });
}
