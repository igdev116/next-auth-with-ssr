import { NextApiRequest, NextApiResponse } from 'next';

import { FAKE_TOKEN } from '~/constants';

type Data = {
  success: boolean;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { token } = req.cookies;

  res.json({ success: token === FAKE_TOKEN.VALUE });
}
