import  { ApolloClient, InMemoryCache } from '@apollo/client';


export const client = new ApolloClient({
  uri: 'http://localhost:200', // Your Apollo Server URL
  cache: new InMemoryCache(),
  // Optional: Add default options
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all'
    }
  }
});