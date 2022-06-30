import React from 'react'

const TestimonialCard = ({heading,text}) => {
  return (
    <div className='px-3 flex flex-col relative space-y-4 rounded-lg w-[300px] bg-orange-400 h-[250px] justify-center shadow-lg'>
        <h2 className='font-semibold py-3 absolute top-2 left-[22%]  border-b-2  border-white text-2xl text-white'>{heading}</h2>
        <p className='text-white text-center'>{text}

</p>
    </div>
  )
}

export default TestimonialCard