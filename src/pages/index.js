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

export default function Home({ faqs, testimonials,taxCompliances }) {
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
        <PrimaryFeatures taxCompliances={taxCompliances}/>
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials testimonialss={testimonials} />
        <Pricing />
        <Faqs faqs={faqs} />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GETFAQS {
      fAQs {
        nodes {
          title
          id
          faqRow {
            row {
              question
              answer
            }
          }
        }
      }
      testimonials {
        nodes {
          id
          title
          testimonial {
            row {
              userName
              designation
              contnet
              profileImage {
                mediaItemUrl
              }
            }
          }
        }
      }
      taxCompliances {
        nodes {
          title
          content
          id
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `
  const response = await client.query({
    query: GET_POSTS,
  })

  const faqs = response?.data?.fAQs.nodes
  const testimonials = response?.data?.testimonials.nodes
  const taxCompliances = response?.data?.taxCompliances.nodes

  return {
    props: {
      faqs,
      testimonials,
      taxCompliances,
    },
  }
}
