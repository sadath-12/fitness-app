import React from 'react'
import Button from '../../utils/Button'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { bannerData } from "../../dummyData";
import { motion } from "framer-motion"

const Hero = () => {
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return (
        <motion.div
            className='h-screen  overflow-hidden'
            initial="hidden"
            animate="visible"
            transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 0.7 },
            }}
            variants={variants}
        >
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {bannerData.map(({ imageUrl, btnText, heading }, i) => (
                    <SwiperSlide
                        key={i}
                    >
                        <div
                            style={{
                                backgroundImage: `linear-gradient(rgba(1,1,1,0.2),rgba(1,1,1,0.2) ), url(${imageUrl})`
                            }}
                            className='!bg-cover flex items-center justify-center !bg-center !bg-fixed h-[90vh] md:h-[80vh]'
                        >
                            <div className="flex text-center flex-col space-y-4 lg:space-y-8">
                                <h1
                                    style={{
                                        textShadow: '0 0 10px #111111'
                                    }}
                                    data-aos="fade-up"
                                    data-aos-delay="300"
                                    data-aos-duration="1000"
                                    className="text-3xl md:text-5xl lg:text-7xl font-black text-white">BUILD CONFIDENCE!</h1>
                                <p
                                    data-aos="fade-up"
                                    data-aos-delay="400"
                                    data-aos-duration="1000"
                                    className="text-white font-semibold text-lg max-w-[95%] mx-auto md:text-2xl lg:text-3xl">
                                    Helping you to feel more confident both inside and outside of the
                                    gym!
                                </p>

                                <div
                                    data-aos="fade-up"
                                    data-aos-delay="500"
                                    data-aos-duration="1000"
                                    className="mx-auto">
                                    <Button text='Start now' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}



            </Swiper>
        </motion.div >
    )
}

export default Hero