import { ApolloClient, InMemoryCache } from '@apollo/client'
export const client = new ApolloClient({
  // uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`,
  uri: 'http://demo.mufaqar.com/dev4/graphql',
  cache: new InMemoryCache(),
})
