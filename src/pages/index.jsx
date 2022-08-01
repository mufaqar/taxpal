import Head from 'next/head'
import { gql } from '@apollo/client'
import { client } from '../../lib/apollo'
import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home({fAQs}) {
  console.log('faqs', fAQs)
  return (
    <>
      <Head>
        <title>TaxPal - Accounting made simple for small businesses</title>
        <meta
          name="description"
          content="Most bookkeeping software is accurate, but hard to use. We make the opposite trade-off, and hope you don’t get audited."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}




export async function getStaticProps() {
  const GET_FAQs = gql`
    query GETFAQS {
      fAQs {
        nodes {
          id
          title
        }
      }
    }
  `
  const response = await client.query({
    query: GET_FAQs,
  })
  const fAQs = response?.data
  return {
    props: {
      fAQs,
    },
  }
}
