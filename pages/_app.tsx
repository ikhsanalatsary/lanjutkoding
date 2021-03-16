import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';

type Props = {
  Component: import('react').JSXElementConstructor<Record<string, any>>;
  pageProps: Record<string, any>;
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
      </Head>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
