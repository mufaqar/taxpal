import Image from 'next/image'
import { Container } from '@/components/Container'



export function Testimonials({testimonials}) {

  let testimonial = testimonials.testimonials
  let landing = testimonials.landingPage.testimonial

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="py-20 bg-slate-50 sm:py-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto md:text-center">
          <h2
            id="testimonials-title"
            className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl"
          >
            {landing.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {landing.overview}
          </p>
        </div>
        <ul className="grid max-w-2xl grid-cols-1 gap-6 mx-auto mt-16 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {testimonial.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
                {column.testimonial.row.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative p-6 bg-white shadow-xl rounded-2xl shadow-slate-900/10">
                      <svg
                        aria-hidden="true"
                        width={105}
                        height={78}
                        className="absolute top-6 left-6 fill-slate-100"
                      >
                        <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
                      </svg>
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">
                          {testimonial.contnet}
                        </p>
                      </blockquote>
                      <figcaption className="relative flex items-center justify-between pt-6 mt-6 border-t border-slate-100">
                        <div>
                          <div className="text-base font-display text-slate-900">
                            {testimonial.userName}
                          </div>
                          <div className="mt-1 text-sm text-slate-500">
                            {testimonial.designation}
                          </div>
                        </div>
                        <div className="overflow-hidden rounded-full h-14 w-14 bg-slate-50">
                          <Image src={testimonial.profileImage.mediaItemUrl} alt="" width={60} height={60} />
                        </div>
                      </figcaption>
                    </figure>
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
