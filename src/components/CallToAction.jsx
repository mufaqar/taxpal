import Image from 'next/image'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-call-to-action.jpg'

export function CallToAction({ctaPage}) {
  return (
    <section
      id="get-started-today"
      className="relative py-32 overflow-hidden bg-blue-600"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <Image
          src={backgroundImage}
          alt=""
          width={2347}
          height={1244}
          layout="fixed"
          unoptimized
        />
      </div>
      <Container className="relative">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl tracking-tight text-white font-display sm:text-4xl">
            {ctaPage.heading}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-white">
            {ctaPage.overview}
          </p>
          <ButtonLink href={ctaPage.buttonLink} color="white" className="mt-10">
            {ctaPage.buttonText}
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
