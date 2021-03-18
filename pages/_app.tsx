import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import dayjs from 'dayjs';
import { useApollo } from '../lib/apolloClient';
import '../styles/globals.css';
import 'dayjs/locale/id';
import Link from 'next/link';

dayjs.locale('id');

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
      <div className="container mt-4 mx-auto px-4 md:px-12">
        <div className="max-w-screen-xl flex flex-wrap justify-between items-baseline py-2 pl-3 mx-auto">
          <div className="font-bold text-xl">
            <Link href="/">
              <a className="text-gray-800">Lanjutkoding.com</a>
            </Link>
          </div>
          <nav>
            <ul className="flex items-center font-extrabold">
              <li className="mr-3">
                <a
                  className="text-gray-800 hover:border-b-2 hover:border-primary-500"
                  href="#"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
