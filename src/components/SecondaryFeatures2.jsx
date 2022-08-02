import { useId } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'

function Feature({ fea, isActive, className, ...props }) {
  console.warn("warnnnnnn", fea)
  return (
    <div
      className={clsx(className, { 'opacity-75 hover:opacity-100': !isActive })}
      {...props}
    >
      <div
        className={clsx('w-9 rounded-lg', {
          'bg-blue-600': isActive,
          'bg-slate-500': !isActive,
        })}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          {/* <feature.icon /> */}
        </svg>
      </div>
       <h3
        className={clsx('mt-6 text-sm font-medium', {
          'text-blue-600': isActive,
          'text-slate-600': !isActive,
        })}
      >
        {fea.categories.nodes[0].name}
      </h3>
      <p className="mt-2 text-xl font-display text-slate-900">
        {fea.title}
      </p>
      <p className="mt-4 text-sm text-slate-600">{fea.content}</p> 
    </div>
  )
}

function FeaturesMobile({feature}) {
  return (
    <div className="px-4 mt-20 -mx-4 space-y-10 overflow-hidden sm:-mx-6 sm:px-6 lg:hidden">
      {feature.map((fea) => (
        <div key={fea.categories.nodes[0].name}>
          <Feature fea={fea} className="max-w-2xl mx-auto" isActive />
          <div className="relative pb-10 mt-10">
            <div className="absolute bottom-0 -inset-x-4 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                src={fea.featuredImage.node.mediaItemUrl}
                alt=""
                layout="fill"
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function FeaturesDesktop({feature}) {
  
  console.warn('feature..........////....', feature);

  return (
    <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
    
      {({ selectedIndex }) => (
        <>
          <Tab.List className="grid grid-cols-3 gap-x-8">
            {feature.map((fea, featureIndex) => (

              

              <Feature
                key={fea.categories.nodes[0].name}
                fea={{
                  ...fea,
                  name: (
                    <Tab className="[&:not(:focus-visible)]:focus:outline-none">
                      <span className="absolute inset-0" />
                      {fea.title}
                    </Tab>
                  ),
                }}
                isActive={featureIndex === selectedIndex}
                className="relative"
              />



              
            ))}
          </Tab.List>

          <Tab.Panels className="relative py-16 mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 xl:px-16">
            <div className="flex -mx-5">
              {feature.map((fea, featureIndex) => (
                <Tab.Panel
                  static
                  key={fea.categories.nodes[0].name}
                  className={clsx(
                    'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none',
                    {
                      'opacity-60': featureIndex !== selectedIndex,
                    }
                  )}
                  style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
                  aria-hidden={featureIndex !== selectedIndex}
                >
                  <div className="relative aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                    <Image
                      src={fea.featuredImage.node.mediaItemUrl}
                      alt=""
                      layout="fill"
                      sizes="52.75rem"
                    />
                  </div>
                </Tab.Panel>
              ))}
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-4xl ring-1 ring-inset ring-slate-900/10" />
          </Tab.Panels>
        </>
      )}
    </Tab.Group>
  )
}

export function SecondaryFeatures({featuresTwo}) {
  
  return (
    <section
      id="secondary-features"
      aria-labelledby="secondary-features-title"
      className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="max-w-2xl mx-auto md:text-center">
          <h2
            id="secondary-features-title"
            className="text-3xl tracking-tight font-display text-slate-900 sm:text-4xl"
          >
            Simplify everyday business tasks.
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Because you’d probably be a little confused if we suggested you
            complicate your everyday business tasks instead.
          </p>
        </div>
        <FeaturesMobile feature={featuresTwo} />
        <FeaturesDesktop feature={featuresTwo} />
      </Container>
    </section>
  )
}
