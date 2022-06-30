import React from 'react'
import TestimonialCard from './TestimonialCard'


const Testimonials = () => {
  return (
    <div className='px-5 w-full relative'>

<h2 className='font-bold text-center text-2xl border-b-2 tracking-wider border-black p-2 py-4 '>BENFITS OF WORKING WITH ME</h2>

<div className='gap-10 lg:gap-14 flex flex-wrap items-center p-7 justify-center'>

<TestimonialCard heading='Having Plans'  text='Go into every week and every workout with a clear plan of what you need to do to achieve your goals.'  />
<TestimonialCard heading='Having Plans'  text='Go into every week and every workout with a clear plan of what you need to do to achieve your goals.'  />
<TestimonialCard heading='Having Plans'  text='Go into every week and every workout with a clear plan of what you need to do to achieve your goals.'  />
</div>
    </div>
  )
}

export default Testimonials