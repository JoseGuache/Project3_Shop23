import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: '/graphql', // This will be proxied to port 3001
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client; 