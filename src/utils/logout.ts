import Router from 'next/router';

import { ROUTES } from '~/constants';
import { axiosClient } from '~/apis';

interface LogoutData {
  success: boolean;
  message: string;
}

const logout = async () => {
  const data: LogoutData = await axiosClient.get('logout');

  if (data.success) Router.push(ROUTES.LOGIN);
};

export default logout;
