import { carouselData } from '@/constants/CarouselData'
import React from 'react'
import HomeCarousel from './HomeCarousel'

const HomeSection = () => {
  return (
    <section className='flex max-w-screen-xl px-5 md:px-8 mx-auto'>
      <HomeCarousel
        items={carouselData}
      />
    </section>
  )
}

export default HomeSection