import Router from 'next/router';
import axiosClient from '~/apis/axiosClient';
import { ROUTES } from '~/constants';

interface LogoutData {
  success: boolean;
  message: string;
}

const logout = async () => {
  const data: LogoutData = await axiosClient.post('logout');

  if (data.success) Router.push(ROUTES.LOGIN);
};

export default logout;
