import 'focus-visible'
import '@/styles/tailwind.css'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../lib/apollo'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
