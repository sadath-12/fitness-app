import Head from 'next/head'
import Layout from '../components/Laytout'
import Hero from '../components/Pages/Home/Hero'
import Benefit from '../components/Pages/Home/Benefit'
import ThirdBanner from '../components/Pages/Home/ThirdBanner'
import About from '../components/Pages/Home/About'
import Contact from '../components/Pages/Home/Contact'
import Testimonial from '../components/Pages/Home/Testimonial'
import Familiar from '../components/Pages/Home/Familiar'
import AOS from 'aos'
import React from 'react'
import { BsChevronUp } from 'react-icons/bs'
import { motion } from "framer-motion"
import "aos/dist/aos.css";
import Link from 'next/link'
const Home = () => {
  React.useEffect(() => {
    AOS.init();
  }, [])

  const [lastYPos, setLastYPos] = React.useState(0);
  const [shouldShowActions, setShouldShowActions] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      const yPos = window.scrollY;
      const isScrollingUp = yPos > lastYPos;

      setShouldShowActions(isScrollingUp);
      setLastYPos(yPos);
    }

    window.addEventListener("scroll", handleScroll, false);

    return () => {
      window.removeEventListener("scroll", handleScroll, false);
    };
  }, [lastYPos]);
  return (
    <>
      <Layout>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <motion.div
          className="bg-themeYellow z-50 cursor-pointer border w-10 h-10 md:w-16 fixed right-10 bottom-10 md:h-16 rounded-full shadow-lg text-white flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: shouldShowActions ? 100 : 0 }}
          transition={{ opacity: { duration: 0.2 } }}
        >
          <Link href='#hero'>
            <BsChevronUp className='text-xl' />
          </Link>
        </motion.div>
        <section id='hero' className='absolute inset-0 w-full h-screen '>
          <Hero />
        </section>
        <div className="mt-[90vh] md:mt-[80vh] ">
          <section id='services'>
            <Benefit />
          </section>
          <ThirdBanner />
          <Familiar />
          <section id='clients'>
            <Testimonial />
          </section>
          <section id='about'>
            <About />
          </section>
          <section id='contact'>
            <Contact />
          </section>
        </div>

      </Layout>
    </>
  )
}

export default Home
