import { NextApiRequest, NextApiResponse } from 'next';

import { FAKE_TOKEN } from '~/constants';
import { deleteCookie } from '~/utils';

type Data = {
  success: boolean;
  message: string;
};

export default function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
  try {
    deleteCookie(res, FAKE_TOKEN.KEY);

    res.json({ success: true, message: 'Logout successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}
