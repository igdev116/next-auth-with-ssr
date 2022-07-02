import { NextApiRequest, NextApiResponse } from 'next';

import { FAKE_TOKEN } from '~/constants';
import { setCookie, isCorrectUsernameAndPassword } from '~/utils';

interface Data {
  success: boolean;
  message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { username, password } = req.body;

  if (isCorrectUsernameAndPassword(username, password)) {
    setCookie(res, { key: FAKE_TOKEN.KEY, value: FAKE_TOKEN.VALUE });

    res.json({ success: true, message: 'Login successfully' });
  } else {
    res.status(400).json({ success: false, message: 'Incorrect username or password' });
  }
}
