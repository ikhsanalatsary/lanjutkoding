import '../styles/globals.css';
import 'dayjs/locale/id';

import React from 'react';

import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import Head from 'next/head';

import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../lib/apolloClient';

dayjs.locale('id');

let ScrollTop = dynamic(() => import('../components/ScrollTop'), {
  ssr: false,
});

type Props = {
  Component: React.JSXElementConstructor<Record<string, unknown>>;
  pageProps: Record<string, never>;
};
function MyApp({ Component, pageProps }: Props) {
  let apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Lanjutkoding.com</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
        {process.env.NODE_ENV === 'production' && (
          <>
            <script
              defer
              src="https://static.cloudflareinsights.com/beacon.min.js"
              data-cf-beacon={`{"token": "15a270292cfc4f5684025d07ab4fc1ab"}`}
            ></script>
            {/* <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2154910111615603"
              crossorigin="anonymous"
            ></script> */}
          </>
        )}
      </Head>
      <div className="container mt-4 mx-auto md:px-12">
        <Component {...pageProps} />
        <ScrollTop />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
