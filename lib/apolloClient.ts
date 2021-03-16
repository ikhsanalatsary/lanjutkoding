import { useMemo } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';

/** @type {ApolloClient<import('@apollo/client').NormalizedCacheObject>} ApolloClient<NormalizedCacheObject> instance */
let apolloClient: ApolloClient<NormalizedCacheObject>;

/**
 * @desc Create instance of apollo client
 * @return {ApolloClient<import('@apollo/client').NormalizedCacheObject>} instance of ApolloClient NormalizedCacheObject
 */
function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  let cacheOptions = {
    typePolicies: {
      studentToCourseEventsConnection: {
        merge(existing = {}, incoming) {
          return { ...existing, ...incoming };
        },
      },
    },
  };
  return new ApolloClient({
    ssrMode: true, // set to true for SSR
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI,
    }),
    cache: new InMemoryCache(),
  });
}

/**
 * @desc Initialize apollo client
 * @param {{[key: string]: any} | undefined | null} initialState - initial state object
 * @return  {ApolloClient<import('@apollo/client').NormalizedCacheObject>} ApolloClient<NormalizedCacheObject> instance
 */
export function initializeApollo(
  initialState: { [key: string]: any } | undefined | null = {}
): ApolloClient<NormalizedCacheObject> {
  /** @type {ApolloClient<import('@apollo/client').NormalizedCacheObject>} ApolloClient<NormalizedCacheObject> instance */
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client,
  // the initial state gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract();

    // Restore the cache using the data passed from
    // getStaticProps/getServerSideProps combined with the existing cached data
    _apolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  // @ts-ignore
  if (typeof window === 'undefined') return _apolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;
  return _apolloClient;
}

/**
 * @desc React hook to use apollo client instance
 * @param {{[key: string]: any} | undefined | null} initialState - initial state object
 * @return  {ApolloClient<import('@apollo/client').NormalizedCacheObject>} ApolloClient<NormalizedCacheObject> instance
 */
export function useApollo(
  initialState: { [key: string]: any } | undefined | null
): ApolloClient<NormalizedCacheObject> {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
