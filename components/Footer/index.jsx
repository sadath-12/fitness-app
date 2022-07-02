import Link from 'next/link'
import React from 'react'
import { FooterLinks } from '../dummyData'
import Logo from '../utils/Logo'
import { BsInstagram } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'

const index = () => {
    return (

        <div className="container grid grid-cols-2 md:grid-cols-3 py-8">
            <div className="w-full flex justify-center space-x-4">
                <div
                    className="w-10 flex transition-all duration-500 items-center justify-center cursor-pointer hover:scale-110 h-10 rounded-full bg-black">
                    <Link href='/'>
                        <BsInstagram className='text-white' />
                    </Link>
                </div>
                <div
                    className="w-10 flex transition-all duration-500 items-center justify-center cursor-pointer hover:scale-110 h-10 rounded-full bg-black">
                    <Link href='/'>
                        <GoMail className='text-white' />
                    </Link>
                </div>
            </div>
            <div className="w-full hidden md:flex text-lg font-semibold text-[#333]  justify-center space-x-4">
                Copyright © 2022 Made with 💖
            </div>
            <div className="w-full flex justify-center space-x-4">
                <Logo />
            </div>
            <div className="w-full w-full col-span-2 mt-6 flex md:hidden text-lg font-semibold text-[#333]  justify-center space-x-4">
                Copyright © 2022 Made with 💖
            </div>
        </div>
    )
}

export default index