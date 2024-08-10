import MainHeading from '@/components/common/MainHeading'
import React from 'react'
import AviationCarousel from './AviationCarousel'

const AviationHomeSection = () => {
  return (
    <section>
        <MainHeading
        title="AVIATION"
        subTitle="The latest news,techn, lorem, dolorem, pisus in aviation"
        heading="Interested in Aviation"
      />
      <AviationCarousel/>
    </section>
  )
}

export default AviationHomeSection