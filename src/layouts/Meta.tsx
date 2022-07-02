import { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
  title: string;
  children: ReactNode;
}

function Meta({ title, children }: Props) {
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Next auth with SSR' />
        <title>{title}</title>
      </Head>

      {children}
    </>
  );
}

export default Meta;
