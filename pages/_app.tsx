import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import dayjs from 'dayjs';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';
import 'dayjs/locale/id';

dayjs.locale('id');

type Props = {
  Component: import('react').JSXElementConstructor<Record<string, unknown>>;
  pageProps: Record<string, never>;
};
function MyApp({ Component, pageProps }: Props) {
  let apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Head>
        <title>Lanjutkoding.com</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div className="container mt-4 mx-auto px-4 md:px-12">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
