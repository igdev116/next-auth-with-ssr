import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  Redirect,
} from 'next';

import { ROUTES, FAKE_TOKEN, PREV_URL_KEY } from '~/constants';
import { deleteCookie, setCookie, isTokenValid } from '~/utils';

interface WrapperOptions {
  isProtected: boolean;
}

type WithRouteProps = <P extends Record<string, unknown> = Record<string, unknown>>(
  options: WrapperOptions,
) => (
  callback?: GetServerSideProps<P>,
) => (context: GetServerSidePropsContext) => Promise<GetServerSidePropsResult<P>>;

const withRoute: WithRouteProps = (options) => (callback) => {
  return async (ctx) => {
    const { req, res, resolvedUrl } = ctx;

    const { isProtected } = options;
    const { token, prev_url } = req.cookies;

    const redirectResult: { redirect: Redirect } = {
      redirect: {
        destination: ROUTES.LOGIN,
        permanent: false,
      },
    };

    // Missing token
    if (!token) {
      deleteCookie(res, PREV_URL_KEY);

      // Try to protected page when unauthenticated
      if (isProtected) return redirectResult;

      // Default at login page
      return {
        props: {},
      };
    }

    // Redirect back if try to login when authenticated
    if (!isProtected && token)
      return {
        redirect: {
          destination: prev_url ?? ROUTES.HOME,
          permanent: false,
        },
      };

    if (isProtected) {
      // Invalid token
      if (!isTokenValid(token)) {
        deleteCookie(res, FAKE_TOKEN.KEY);

        return redirectResult;
      }

      setCookie(res, {
        key: PREV_URL_KEY,
        value: resolvedUrl,
      });
    }

    if (!callback)
      return {
        props: {},
      } as any;

    const result = await callback(ctx);

    if ('props' in result)
      return {
        ...result,
        props: {
          ...result.props,
        },
      };

    return {
      ...result,
      props: {},
    };
  };
};

export default withRoute;
