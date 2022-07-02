import React from 'react'
import { benefitData } from '../../dummyData'

const Benefit = () => {
    return (
        <div
            className='bg-[#EBF0F1]  overflow-hidden flex flex-col items-center min-h-[40vh] py-12'
        >
            <h1
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
                className='text-xl md:text-3xl lg:text-[35px] text-center font-semibold'>
                Benefits of working with me
            </h1>
            <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                className='bg-themeYellow mt-4 h-1 w-[15rem]'></div>
            <div className="grid max-w-[80rem] py-12 w-fit mx-auto grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 justify-center ">
                {benefitData.map(({ heading, icon, smallText }, i) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={`${i + 5}00`}
                        data-aos-duration="800"
                        className={`w-[100%] col-span-3 ${i === 2 ? 'md:col-span-2' : 'md:col-span-1'} lg:col-span-1 !text-white mx-auto max-w-[20rem] md:max-w-[23rem] space-y-3 h-full text-center bg-themeYellow p-8 rounded-md flex flex-col items-center`}>
                        {icon}
                        <h1 className='text-lg md:text-xl lg:text-2xl font-semibold'>{heading}</h1>
                        <p className="text-base lg:text-lg">{smallText}</p>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default Benefit