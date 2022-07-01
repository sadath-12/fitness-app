import React from 'react'

const Footer = () => {
  return (
    <div className='relative    min-w-full px-5 py-14 md:py-3 flex justify-between items-center bg-orange-300'>

{/* logo */}
<div>
<h1 className="font-extrabold absolute top-[20px] left-[20px]   text-2xl drop-shadow-lg text-black">
          SINGHS<span className="text-red-500">FIT</span>{" "}
        </h1>
</div>

{/* services  */}
<div className='flex flex-col items-start space-y-3 cursor-pointer'>

<h2 className='text-xl text-white font-bold border-b-2 border-white p-1'>Services</h2>
<div className='flex text-white font-normal flex-col space-y-2 items-start'>
<p>service1</p>
<p>service1</p>
<p>service1</p>
<p>service1</p>
</div>
</div>


{/* timings  */}
<div className='flex flex-col items-start space-y-3 cursor-pointer'>

<h2 className='text-xl text-white font-bold border-b-2 border-white p-1'>Services</h2>
<div className='flex text-white font-normal flex-col space-y-2 items-start'>
<p>service1</p>
<p>service1</p>
<p>service1</p>
<p>service1</p>
</div>
</div>

{/* social links  */}
<div className='flex flex-col items-start space-y-3 cursor-pointer'>

<h2 className='text-xl text-white font-bold border-b-2 border-white p-1'>Services</h2>
<div className='flex text-white font-normal flex-col space-y-2 items-start'>
<p>service1</p>
<p>service1</p>
<p>service1</p>
<p>service1</p>
</div>
</div>

    </div>
  )
}

export default Footer