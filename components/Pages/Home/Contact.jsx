import React from 'react'

const Contact = () => {
    const imageUrl = '/images/contact.webp'
    const inputFields = [
        {
            label: 'First Name',
            type: 'text'
        },
        {
            label: 'Last Name',
            type: 'text'
        },
        {
            label: 'Email Address',
            type: 'email'
        },
        {
            label: 'Phone Number',
            type: 'number'
        },
        {
            label: 'Instagram Username',
            type: 'text'
        },
        {
            type: 'options',
            options: [
                `Service I'm interested in`,
                `1:1 Online Coaching`,
                `Group Coaching`,
                `Face to Face Coaching`,
                `Online Group Classes`,
                `I'm not Sure`,
            ]
        },
        {
            type: 'options',
            options: [
                `Preffered Contact Method`,
                `Instagram`,
                `Email`,
                `WhatsApp`,
                `Phone Call`,
            ]
        },
        {
            label: 'Type Your questions here',
            type: 'textarea'
        },
    ]
    return (
        <div
            className='h-full  overflow-hidden py-12 flex space-y-4 lg:space-y-8   items-center flex-col justify-center min-h-[35rem] !bg-cover !bg-fixed w-full !bg-no-repeat'
            style={{
                backgroundImage: `linear-gradient(rgba(1,1,1,0.5),rgba(1,1,1,0.5) ), url(${imageUrl})`
            }}
        >

            <div className="max-w-[40rem] py-6 lg:py-8 px-4 md:px-8 shadow-3xl w-full border bg-white min-h-[80vh]">
                <div className="flex flex-col items-center">
                    <h1
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="600"
                        className='text-xl md:text-3xl lg:text-[35px] text-center font-semibold'>
                        Contact Me
                    </h1>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="400"
                        data-aos-duration="600"
                        className='bg-themeYellow mt-3 h-1 w-[7rem]'></div>
                </div>
                <p
                    data-aos="fade-up"
                    data-aos-delay="500"
                    data-aos-duration="600"
                    className='text-sm text-center max-w-[30rem] mx-auto mt-4'>
                    Want to find out more about my services?
                    Complete the form below and I’ll be in touch!
                </p>

                <form className='flex mt-6 flex-col space-y-6'>
                    {inputFields.map((field, i) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={`${i + 6}00`}
                            data-aos-duration="600"
                            key={i} className='flex w-full border rounded-md overflow-hidden focus-within:border-themeYellow  border-slate-300 shadow-sm'>
                            {field.type === 'options' ? <>
                                <select className=' w-full p-2 outline-none '>
                                    {field.options.map((option, i) => (
                                        <option value={option} key={i}>{option}</option>
                                    ))}
                                </select>
                            </> : field.type === 'textarea' ?
                                <>
                                    <textarea placeholder={field.label} className='w-full p-3 h-[8rem]  outline-none'>

                                    </textarea>
                                </>
                                :
                                <>
                                    <input type={field.type} placeholder={field.label} className='w-full text-[#333] p-2 outline-none' />
                                </>
                            }
                        </div>

                    ))}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="900"
                        data-aos-duration="600"
                        className='w-full'
                    >

                        <button className={`cursor-pointer group overflow-hidden hover:shadow-lg hover:bg-darkYellow py-2 px-8 md:py-3 md:px-12 hover:tracking-widest relative transition-all duration-500 delay-100 text-base text-white bg-themeYellow `}>
                            Submit
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Contact