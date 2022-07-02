import { FAKE_USER } from '~/constants';

const isCorrectUsernameAndPassword = (username: string, password: string) => {
  return username === FAKE_USER.NAME && password === FAKE_USER.PASSWORD;
};

export default isCorrectUsernameAndPassword;
