import React from 'react'

const Familiar = () => {
    const lines = [
        `You struggle to feel confident when you walk into the gym`,
        `You don’t feel comfortable in the gym with people watching you.`,
        `You walk into the gym without a clear plan and don’t know what to do.`,
        `You struggle to balance your social life with making progress with your weight loss.`
    ]
    return (
        <div className='w-full  overflow-hidden bg-[#EBF0F1] py-12 flex flex-col items-center'>
            <h1
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="800"
                className='text-xl md:text-3xl lg:text-[35px] text-center font-semibold'>
                Do These Sound Familiar?
            </h1>
            <div
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="800"
                className='bg-themeYellow mt-4 h-1 w-[15rem]'></div>
            <div className="flex flex-col max-w-[50rem] px-6 mx-auto mt-12 space-y-4">
                {lines.map((line, i) => (
                    <div
                        data-aos="fade-up"
                        data-aos-delay={`${i + 5}00`}
                        data-aos-duration="800"
                    >
                        <ListItem key={i}>
                            {line}
                        </ListItem>
                    </div>
                ))}
            </div>
        </div>
    )
}
const ListItem = ({ children }) => {
    return (
        <>
            <div className="flex space-x-3 md:space-x-6 items-center">
                <div className="h-[8px] bg-themeYellow  w-[8px]"></div>
                <p className="text-base md:text-lg lg:text-xl">
                    {children}
                </p>
            </div>
        </>
    )
}
export default Familiar