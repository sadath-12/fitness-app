import Head from 'next/head'
import Image from 'next/image'
import { Banner, BookConsultation,AboutUs, Layout, Navbar, Testimonials, Contactme } from '../components'




export default function Home() {
  return (
    <div className='min-w-full  h-auto ' >
      <Head>
        <title>SINGHSFIT</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

<div className='space-y-2'>

   <Layout>
    <div className='flex flex-col space-y-4'>
<Banner/>
<div className=' flex flex-col items-center justify-center py-3' >
<Testimonials/>
<AboutUs/>
<BookConsultation/>


<Contactme/>

</div>
    </div>
   </Layout>
    </div>
</div>
  )
}
