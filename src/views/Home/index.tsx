import NextLink from 'next/link';

import { ROUTES } from '~/constants';
import { logout } from '~/utils';

import { Meta } from '~/layouts';
import { Button, Container, H1, Row } from './styles';

interface Props {
  username: string;
}

const Home = ({ username }: Props) => {
  return (
    <Meta title='Home'>
      <Container>
        <H1>
          Welcome <span>{username}</span> to the Home page 🏠
        </H1>
        <Row>
          <NextLink href={ROUTES.ABOUT} passHref>
            <Button>About Page</Button>
          </NextLink>
          <Button onClick={logout}>Logout</Button>
        </Row>
      </Container>
    </Meta>
  );
};

export default Home;
