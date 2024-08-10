import React from 'react'
import TalesHomeSection from './_partials/TalesHomeSection'
import AcceleratorSection from '@/components/common/AcceleratorSection'
import TalesSection from './_partials/TalesSection'

const Tales = () => {
  return (
    <main className="flex-1">
      <TalesHomeSection/>
      <TalesSection/>
      <AcceleratorSection/>
    </main>
  )
}

export default Tales