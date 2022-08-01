import Image from 'next/image'
import { gql } from '@apollo/client'
import { client } from '../../lib/apollo'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

export default function Test({ jobs }) {
  console.log(jobs)
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
        Frequently asked questions
      </h2>
      <div className="absolute top-0 left-1/2 -translate-x-[30%] -translate-y-[25%]">
        <Image
          src={backgroundImage}
          alt=""
          width={1558}
          height={946}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            If you can’t find what you’re looking for, email our support team
            and if you’re lucky someone will get back to you.
          </p>
        </div>
        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {jobs.map((job) => (
            <div>
              <h2 key={job.id}>{job.title}</h2>
              <p>{job.content}</p>
            </div>
          ))}
        </ul>
      </Container>
    </section>
  )
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query faqQuery {
      fAQs {
        nodes {
          id
          title
          content
        }
      }
    }
  `
  const response = await client.query({
    query: GET_POSTS,
  })

  const jobs = response?.data?.fAQs.nodes
  return {
    props: {
      jobs,
    },
  }
}
