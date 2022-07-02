import Image from 'next/image'
import React from 'react'
import Button from '../../utils/Button'

const About = () => {
    const imageUrl = '/images/about.jpg'
    return (
        <div className='flex overflow-hidden flex-col items-center py-12 bg-[#EBF0F1]'>
            <h1
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
                className='text-xl md:text-3xl lg:text-[35px] text-center font-semibold'>
                So What are you waiting for?
            </h1>
            <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                className='bg-themeYellow mt-4 h-1 w-[15rem]'></div>
            <div className="container mt-12 gap-6 lg:gap-8 grid grid-cols-1 md:grid-cols-2 items-center ">
                <div className='w-full h-full relative max-w-[30rem] md:max-w-[50rem] mx-auto px-6'
                    data-aos="fade-left"
                    data-aos-delay="500"
                    data-aos-duration="800"
                >
                    <img src={imageUrl} />
                </div>
                <div className="flex flex-col space-y-6 justify-center max-w-[30rem] md:max-w-[50rem] mx-auto px-6">
                    <div className="flex flex-col">
                        <h1
                            data-aos="fade-right"
                            data-aos-delay="500"
                            data-aos-duration="800"
                            className='text-xl md:text-3xl lg:text-[35px] text-left font-semibold'>
                            My Story
                        </h1>
                        <div
                            data-aos="fade-right"
                            data-aos-delay="600"
                            data-aos-duration="800"
                            className='bg-themeYellow mt-3 h-1 w-[7rem]'></div>
                    </div>
                    <p
                        data-aos="fade-right"
                        data-aos-delay="700"
                        data-aos-duration="800"
                        className='text-base md:text-lg'>
                        When you re trying to make a change, having the right people in your corner can make all the difference. I get out of bed every day to help people become healthier versions of themselves. I decided to become a personal trainer because I used to walk into the gym and not know what I was doing. I d wander round from machine to machine following instructions, with no clear direction or knowledge.. I want to help other women learn how to use free weights and empower them with the strength and confidence to achieve the results they want, it s a passion truly close to my heart.
                    </p>
                    <div
                        data-aos="fade-right"
                        data-aos-delay="800"
                        data-aos-duration="800"
                    >

                        <Button text='Book Consultation' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About