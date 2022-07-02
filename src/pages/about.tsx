import { withRoute } from '~/core';

export { default } from '~/views/About';

export const getServerSideProps = withRoute({ isProtected: true })();
