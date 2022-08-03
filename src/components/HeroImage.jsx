import React from 'react'
import Image from 'next/image'
import { Container } from './Container'

export default function HeroImage({LandingImage}) {

  return (
    <Container>
        <div className='mb-20'>
            <Image src={LandingImage.node.mediaItemUrl} alt="heroImage" width={1200} height={800}/>
        </div>
    </Container>
    
  )
}
