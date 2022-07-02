import { withRoute } from '~/core';

export { default } from '~/views/Login';

export const getServerSideProps = withRoute({ isProtected: false })();
