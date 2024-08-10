import React from 'react'
import AviationHomeSection from './_partials/AviationHomeSection'
import AviationSection from './_partials/AviationSection'
import AcceleratorSection from '@/components/common/AcceleratorSection'

const Aviations = () => {
  return (
    <main className='flex-1' >
        <AviationHomeSection/>
        <AviationSection/>
        <AcceleratorSection/>
    </main>
  )
}

export default Aviations