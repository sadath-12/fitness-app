import React from 'react'
import Slider from "react-slick";
import Stars from "../../utils/Stars";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Testimonial = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const imageUrl = '/images/testimonial-bg.jpg'

    return (
        <div
            className='h-full flex space-y-4 lg:space-y-8 opacity-90 items-center flex-col justify-center min-h-[35rem] !bg-cover !bg-fixed w-full !bg-no-repeat'
            style={{
                backgroundImage: `linear-gradient(rgba(1,1,1,0.8),rgba(1,1,1,0.8) ), url(${imageUrl})`
            }}
        >
            <div className="overflow-x-hidden !text-white w-full container">
                <div className='lg:container  my-12  flex flex-col space-y-6 '>
                    <div className="flex flex-col items-center">
                        <h1
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="800"
                            className='text-xl md:text-3xl lg:text-[35px] text-center font-semibold'>
                            What Clients Say About Working With Me ?
                        </h1>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="800"
                            className='bg-themeYellow mt-3 h-1 w-[7rem]'></div>
                    </div>
                    <Slider {...settings}>
                        <TestimonialItem />
                        <TestimonialItem />
                        <TestimonialItem />
                        <TestimonialItem />
                    </Slider>
                </div>
            </div>
        </div>
    )
}
const TestimonialItem = () => {
    return (
        <div className='text-center  overflow-hidden py-6 lg:py-12 flex flex-col items-center space-y-4'>
            <div
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="800"
                className='border rounded-full p-2 w-full h-full overflow-hidden max-w-[12rem] max-h-[12rem]'>
                <img src='/images/girl.png' className='rounded-full' />
            </div>
            <div
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-duration="800"
            >
                <Stars count={4} />
            </div>
            <p
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-duration="800"
                className='!text-white text-sm md:text-base  md:max-w-[40rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In sequi excepturi cupiditate id distinctio nulla culpa maiores iste obcaecati. Atque a deleniti alias dolorem rerum, ducimus tenetur eius itaque libero!
            </p>
            <p

                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="800"
                className='text-base md:text-lg font-semibold  md:max-w-[40rem]'>
                MAISIE
            </p>

        </div>
    )
}

export default Testimonial