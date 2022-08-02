import { useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { Container } from '@/components/Container'

export function SecondaryFeatures({ featuresTwo }) {
  
  console.log('feature2', featuresTwo);
  
  const handleChange = (name) =>{
    if(name === 'Contacts'){
      var m1 = document.querySelector('.feature_image');
      var img = document.querySelector('._img');
      m1.classList.remove('inventoryImg');
      m1.classList.remove('reportingImg');
      m1.classList.add('contactsImg');
     
    }
    if(name === 'Inventory'){
      var m1 = document.querySelector('.feature_image');
      var img = document.querySelector('._img');
      m1.classList.remove('contactsImg');
      m1.classList.remove('reportingImg');
      m1.classList.add('inventoryImg');
      

    }
    if(name === 'Reporting'){
      var m1 = document.querySelector('.feature_image');
      var img = document.querySelector('._img');
      m1.classList.remove('inventoryImg');
      m1.classList.remove('contactsImg');
      m1.classList.add('reportingImg');
      
    }
    
  }

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


        <div className="px-4 mt-20 -mx-4 space-y-10 overflow-hidden sm:-mx-6 sm:px-6 lg:hidden">
          {featuresTwo.map((feature) => (
            <div key={feature.name}>
              {/* <Feature feature={feature} className="max-w-2xl mx-auto" isActive />
          <div className="relative pb-10 mt-10">
            <div className="absolute bottom-0 -inset-x-4 top-8 bg-slate-200 sm:-inset-x-6" />
            <div className="relative mx-auto aspect-[844/428] w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <Image
                src={feature.image}
                alt=""
                layout="fill"
                sizes="52.75rem"
              />
            </div>
          </div> */}
            </div>
          ))}
        </div>

        <Tab.Group as="div" className="hidden lg:mt-20 lg:block">
          {({ selectedIndex }) => (
            <>
              <Tab.List className="grid grid-cols-3 gap-x-8">
                {featuresTwo.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="opacity-75 hover:opacity-100"
                    onClick={()=>handleChange(feature.categories.nodes[0].name)}
                  >
                    <div className="rounded-lg w-9 _icon">
                      <div aria-hidden="true" className="h-10 w-10 rounded-xl p-1 bg-[#8B97A8]" fill="none" >
                        <Image src={feature.featureTwo.icon.mediaItemUrl} alt="" width={36} height={36}/>
                      </div>
                    </div>
                    <h3 className="mt-6 text-sm font-medium">
                      {feature.categories.nodes[0].name}
                    </h3>
                    <p className="mt-2 text-xl font-display text-slate-900">
                      {feature.title}
                    </p>
                    <div
                      className="mt-4 text-sm text-slate-600"
                      dangerouslySetInnerHTML={{ __html: feature.content }}
                    ></div>
                  </div>
                ))}
              </Tab.List>

              <Tab.Panels className="relative py-16 mt-20 overflow-hidden rounded-4xl bg-slate-200 px-14 xl:px-16 ">
                <div className="flex -mx-5 feature_image">
                  {featuresTwo.map((feature, featureIndex) => (
                    <div
                      static
                      key={feature.title}
                      className={clsx(
                        'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none _img '
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
                <div className="absolute inset-0 pointer-events-none rounded-4xl ring-1 ring-inset ring-slate-900/10" />
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
