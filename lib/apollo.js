import { ApolloClient, InMemoryCache } from '@apollo/client';
export const client = new ApolloClient({
  // uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
  uri: 'https://miniodoo.com/graphql',
  cache: new InMemoryCache(),
});
