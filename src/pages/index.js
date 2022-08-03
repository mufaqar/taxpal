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
import HeroImage from '@/components/HeroImage'

export default function Home({
  faqs,
  testimonials,
  taxCompliances,
  featuresTwo,
  pricingTables,
  ctaPage,
  landingPage,
  LandingImage,
}) {
  // console.warn('landingPage', landingPage)
  let featureOne = {
    taxCompliances,
    landingPage,
  }
  let featureTwo = {
    featuresTwo,
    landingPage,
  }
  let testimonial = {
    testimonials,
    landingPage,
  }
  let faq = {
    faqs,
    landingPage,
  }
  let pricing_table = {
    pricingTables,
    landingPage,
  }

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
        <Hero landingPage={landingPage} />
        <HeroImage LandingImage={LandingImage} />
        <PrimaryFeatures taxCompliances={featureOne} />
        <SecondaryFeatures featuresTwo={featureTwo} />
        <CallToAction ctaPage={ctaPage} />
        <Testimonials testimonials={testimonial} />
        <Pricing pricingTables={pricing_table} />
        <Faqs faqs={faq} />
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
      featuresTwo {
        nodes {
          categories {
            nodes {
              name
            }
          }
          title
          content
          id
          featureTwo {
            icon {
              mediaItemUrl
            }
          }
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
      pricingTables {
        nodes {
          title
          id
          pricingTable {
            planPrice
            planType
            shortDiscription
            getStartedLink
            featuredType
            featuresList {
              feature
            }
          }
        }
      }
      page(id: "74", idType: DATABASE_ID) {
        # CTA PAGE
        cta {
          buttonLink
          buttonText
          heading
          overview
        }
      }
      pageBy(pageId: 80) {
        #Landing Page
        landing {
          buttonLink
          buttonText
          headingBeforeSpan
          headingSpan
          overview
          faq {
            title
            overview
          }
          featureOne {
            overview
            title
          }
          featureTwo {
            overview
            title
          }
          pricingTable {
            overview
            titleAfterSpan
            titleInSpan
          }
          testimonial {
            overview
            title
          }
        }
        featuredImage {
          node {
            mediaItemUrl
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
  const featuresTwo = response?.data?.featuresTwo.nodes
  const pricingTables = response?.data?.pricingTables.nodes
  const ctaPage = response?.data?.page.cta
  const landingPage = response?.data?.pageBy.landing
  const LandingImage = response?.data?.pageBy.featuredImage

  return {
    props: {
      faqs,
      testimonials,
      taxCompliances,
      featuresTwo,
      pricingTables,
      ctaPage,
      landingPage,
      LandingImage,
    },
  }
}
