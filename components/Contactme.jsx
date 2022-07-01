import React from 'react'

const Contactme = () => {
  return (
    <div id='chat' className='min-w-screen px-5 py-3 mt-10 mx-auto flex flex-col text-center
     space-y-3 items-center justify-center' >

<div className='flex flex-col space-y-2'>
<h2 className='text-orange-400 tracking-widest font-bold text-2xl md:text-3xl'>CONTACT ME</h2>
<h3 className='text-gray-600 font-semibold'>Want to find out more about my services?

Complete the form below and I ll be in touch!</h3>
</div>

{/* contact form  */}
<div className='w-full px-4 space-y-3'>

<div className='border-b-[1.5px] border-black w-full'>
<input type="text"placeholder='First Name' className='bg-white placeholder:text-gray-600 text-black outline-none  py-2  w-full'  />
</div>
<div className='border-b-[1.5px] border-black w-full'>
<input type="text"placeholder='Last Name' className='bg-white placeholder:text-gray-600 text-black outline-none  py-2  w-full'  />
</div>
<div className='border-b-[1.5px] border-black w-full'>
<input type="email"placeholder='Email' className='bg-white placeholder:text-gray-600 text-black outline-none  py-2  w-full'  />
</div>
<div className='border-b-[1.5px] border-black w-full'>
<input type="number"placeholder='Phone Number' className='bg-white placeholder:text-gray-600 text-black outline-none  py-2  w-full'  />
</div>
<div className='border-b-[1.5px] border-black w-full'>
<input type="text"placeholder='Instagram Username' className='bg-white placeholder:text-gray-600 text-black outline-none  py-2  w-full'  />
</div>
<div className='border-b-[1.5px] border-black w-full'>
<input type="text"placeholder="Service I'm Interested In " className='bg-white placeholder:text-gray-600 text-black outline-none  py-2  w-full'  />
</div>
<div className='border-b-[1.5px] border-black w-full'>
<input type="text"placeholder='Preferred Contact Method' className='bg-white placeholder:text-gray-600 text-black outline-none  py-2  w-full'  />
</div>
<div className='border-[1.5px] border-black w-full'>
<textarea rows={6} cols={30} placeholder='Type your questions here' className='bg-white placeholder:text-gray-600 text-black outline-none  py-2  w-full'  />
</div>

<button className='bg-orange-400 w-full py-2 rounded-md text-white font-bold'>Submit</button>

</div>

    </div>
  )
}

export default Contactme