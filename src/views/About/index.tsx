import NextLink from 'next/link';

import { ROUTES } from '~/constants';
import { logout } from '~/utils';

import { Meta } from '~/layouts';
import { Button, Container, H1, Row } from './styles';

const About = () => {
  return (
    <Meta title='About'>
      <Container>
        <H1>About page</H1>
        <Row>
          <NextLink href={ROUTES.HOME} passHref>
            <Button>Home Page</Button>
          </NextLink>
          <Button onClick={logout}>Logout</Button>
        </Row>
      </Container>
    </Meta>
  );
};

export default About;
