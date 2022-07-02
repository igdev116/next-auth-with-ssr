import { FAKE_TOKEN } from '~/constants';

const isTokenValid = (token: string) => token === FAKE_TOKEN.VALUE;

export default isTokenValid;
