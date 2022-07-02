import React from 'react'
import Button from '../../utils/Button'

const ThirdBanner = () => {
    const imageUrl = '/images/banner-3.jpg'
    return (
        <div
            className='h-full flex space-y-4  overflow-hidden lg:space-y-8 opacity-90 items-center flex-col justify-center min-h-[35rem] !bg-cover !bg-fixed w-full !bg-no-repeat'
            style={{
                backgroundImage: `linear-gradient(rgba(1,1,1,0.4),rgba(1,1,1,0.4) ), url(${imageUrl})`
            }}
        >
            <h1
                style={{
                    textShadow: '0 0 10px #111111'
                }}
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                className="text-2xl md:text-3xl  text-center lg:text-4xl font-black text-white uppercase">Lives Transformed Everyday - Are You Next?</h1>
            <p
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="1000"
                className="text-white max-w-[50rem] text-center font-semibold text-lg mx-auto md:text-xl lg:text-2xl">
                I help women build strength with my proven programme that gives you the knowledge, strategies and accountability to unlock your full potential.
            </p>
            <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                className="mx-auto">
                <Button text='Start now' />
            </div>
        </div>
    )
}

export default ThirdBanner