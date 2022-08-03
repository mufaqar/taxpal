import { useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'

export function SecondaryFeatures({ featuresTwo }) {
  let feature_two = featuresTwo.featuresTwo
  let landing = featuresTwo.landingPage.featureTwo

  const [index, setindex] = useState(0)
  console.log('index', index)

  const handleChange = (name, featureIndex) => {
    setindex(featureIndex)
    if (name === 'Contacts') {
      var m1 = document.querySelector('.feature_image')
      var icon0 = document.querySelector('.icon0')
      var icon1 = document.querySelector('.icon1')
      var icon2 = document.querySelector('.icon2')
      var iconText0 = document.querySelector('.icon-text0')
      var iconText1 = document.querySelector('.icon-text1')
      var iconText2 = document.querySelector('.icon-text2')
      var opacity0 = document.querySelector('.opacity0')
      var opacity1 = document.querySelector('.opacity1')
      var opacity2 = document.querySelector('.opacity2')
      m1.classList.remove('inventoryImg')
      m1.classList.remove('reportingImg')
      m1.classList.add('contactsImg')
      icon0.classList.add('iconbg')
      icon1.classList.remove('iconbg')
      icon2.classList.remove('iconbg')
      iconText0.classList.add('textcolor')
      iconText1.classList.remove('textcolor')
      iconText2.classList.remove('textcolor')
      opacity0.classList.add('opacity')
      opacity1.classList.remove('opacity')
      opacity2.classList.remove('opacity')
    }
    if (name === 'Inventory') {
      var m1 = document.querySelector('.feature_image')
      var icon0 = document.querySelector('.icon0')
      var icon1 = document.querySelector('.icon1')
      var icon2 = document.querySelector('.icon2')
      var iconText0 = document.querySelector('.icon-text0')
      var iconText1 = document.querySelector('.icon-text1')
      var iconText2 = document.querySelector('.icon-text2')
      var opacity0 = document.querySelector('.opacity0')
      var opacity1 = document.querySelector('.opacity1')
      var opacity2 = document.querySelector('.opacity2')
      m1.classList.remove('contactsImg')
      m1.classList.remove('reportingImg')
      m1.classList.add('inventoryImg')
      icon0.classList.remove('iconbg')
      icon1.classList.add('iconbg')
      icon2.classList.remove('iconbg')
      iconText0.classList.remove('textcolor')
      iconText1.classList.add('textcolor')
      iconText2.classList.remove('textcolor')
      opacity0.classList.remove('opacity')
      opacity1.classList.add('opacity')
      opacity2.classList.remove('opacity')
    }
    if (name === 'Reporting') {
      var m1 = document.querySelector('.feature_image')
      var icon0 = document.querySelector('.icon0')
      var icon1 = document.querySelector('.icon1')
      var icon2 = document.querySelector('.icon2')
      var iconText0 = document.querySelector('.icon-text0')
      var iconText1 = document.querySelector('.icon-text1')
      var iconText2 = document.querySelector('.icon-text2')
      var opacity0 = document.querySelector('.opacity0')
      var opacity1 = document.querySelector('.opacity1')
      var opacity2 = document.querySelector('.opacity2')
      m1.classList.remove('inventoryImg')
      m1.classList.remove('contactsImg')
      m1.classList.add('reportingImg')
      icon0.classList.remove('iconbg')
      icon1.classList.remove('iconbg')
      icon2.classList.add('iconbg')
      iconText0.classList.remove('textcolor')
      iconText1.classList.remove('textcolor')
      iconText2.classList.add('textcolor')
      opacity0.classList.remove('opacity')
      opacity1.classList.remove('opacity')
      opacity2.classList.add('opacity')
    }
  }

  return (
    <section
      id="secondary-features"
      aria-labelledby="secondary-features-title"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2
            id="secondary-features-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            {landing.title}
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            {landing.overview}
          </p>
        </div>

        <div className="-mx-4 mt-20 space-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">
          {feature_two.map((feature, index) => (
            <div key={feature.title}>
              <div>
                <div className="_icon w-9 rounded-lg">
                  <div
                    aria-hidden="true"
                    className={`h-10 w-10 rounded-xl bg-[#2563EB] p-1 `}
                    fill="none"
                  >
                    <Image
                      src={feature.featureTwo.icon.mediaItemUrl}
                      alt=""
                      width={36}
                      height={36}
                      className="iconImg"
                    />
                  </div>
                </div>
                <h3
                  className={` mt-6 text-sm font-medium`}
                >
                  {feature.categories.nodes[0].name}
                </h3>
                <p className="mt-2 font-display text-xl text-slate-900">
                  {feature.title}
                </p>
                <div
                  className="mt-4 text-sm text-slate-600"
                  dangerouslySetInnerHTML={{ __html: feature.content }}
                ></div>
              </div>

              <div className="relative mt-10 pb-10">
                <div className="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
                <div className="relative mx-auto aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <Image
                    src={feature.featuredImage.node.mediaItemUrl}
                    alt=""
                    layout="fill"
                    sizes="52.75rem"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
          {({ selectedIndex }) => (
            <>
              <Tab.List className="grid grid-cols-3 gap-x-8">
                {feature_two.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className={`opacity-75 hover:opacity-100 opacity${featureIndex}`}
                    onClick={() =>
                      handleChange(
                        feature.categories.nodes[0].name,
                        featureIndex
                      )
                    }
                  >
                    <div className="_icon w-9 rounded-lg">
                      <div
                        aria-hidden="true"
                        className={`h-10 w-10 rounded-xl bg-[#8B97A8] p-1 icon${featureIndex} `}
                        fill="none"
                      >
                        <Image
                          src={feature.featureTwo.icon.mediaItemUrl}
                          alt=""
                          width={36}
                          height={36}
                          className="iconImg"
                        />
                      </div>
                    </div>
                    <h3
                      className={` mt-6 text-sm font-medium icon-text${featureIndex} `}
                    >
                      {feature.categories.nodes[0].name}
                    </h3>
                    <p className="mt-2 font-display text-xl text-slate-900">
                      {feature.title}
                    </p>
                    <div
                      className="mt-4 text-sm text-slate-600"
                      dangerouslySetInnerHTML={{ __html: feature.content }}
                    ></div>
                  </div>
                ))}
              </Tab.List>

              <Tab.Panels className="relative mt-20 overflow-hidden rounded-4xl bg-slate-200 py-16 px-14 xl:px-16 ">
                <div className="feature_image -mx-5 flex">
                  {feature_two.map((feature, featureIndex) => (
                    <div
                      static
                      key={feature.title}
                      className={clsx(
                        '_img px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none '
                      )}
                      style={{
                        transform: `translateX(-${selectedIndex * 100}%)`,
                      }}
                      aria-hidden={featureIndex !== selectedIndex}
                    >
                      <div className="relative aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                        <Image
                          src={feature.featuredImage.node.mediaItemUrl}
                          alt=""
                          layout="fill"
                          sizes="52.75rem"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
