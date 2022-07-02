import type { NextPage } from 'next';

import { FAKE_USER } from '~/constants';
import { withRoute } from '~/core';

import HomeView from '~/views/Home';

const Home: NextPage<{ username: string }> = ({ username }) => {
  return <HomeView username={username} />;
};

export default Home;

export const getServerSideProps = withRoute({ isProtected: true })(async () => {
  return {
    props: {
      username: FAKE_USER.NAME,
    },
  };
});
