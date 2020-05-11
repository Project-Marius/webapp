import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { InMemoryCache } from "apollo-cache-inmemory";
import withApollo from "next-with-apollo";

const uri = "http://localhost:8080";

let apolloClient = null;

function create(initialState) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== "undefined";
  return new ApolloClient({
    cache: new InMemoryCache().restore(initialState || {}),
    connectToDevTools: isBrowser,
    link: createHttpLink({
      credentials: "include", // Additional fetch() options like `credentials` or `headers`
      fetch: !isBrowser && fetch, // Use fetch() polyfill on the server
      // headers: initialState.headers,
      uri // Server URL (must be absolute)
    }),
    ssrMode: !isBrowser // Disables forceFetch on the server (so queries are only run once)
  });
}

function initApollo({ initialState }) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === "undefined") {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}

export default withApollo(initApollo);