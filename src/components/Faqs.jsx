import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'


export function Faqs({faqs}) {

  let faq = faqs.faqs
  let landing = faqs.landingPage.faq

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative py-20 overflow-hidden bg-slate-50 sm:py-32"
    >
      <h2 id="faq-title" className="sr-only">
      {landing.overview}
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
        <div className="max-w-2xl mx-auto lg:mx-0">
          <p className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl">
          {landing.title}
          </p>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {landing.overview}
          </p>
        </div>
        <ul className="grid max-w-2xl grid-cols-1 gap-8 mx-auto mt-16 lg:max-w-none lg:grid-cols-3">
          {faq.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-8">
                {column.faqRow.row.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg leading-7 font-display text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}

