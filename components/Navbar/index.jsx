import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../utils/Logo'
import NavDrawer from './NavDrawer'
import { navData } from '../dummyData'
import { motion } from "framer-motion"
import { VscMenu } from 'react-icons/vsc'


const index = () => {
    const [navOpen, setNavOpen] = useState(false)


    return (
        <motion.header
            animate={{ x: 0, y: 0 }}
            initial={{ x: 0, y: -100 }}
            style={{
                background: `linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))`
            }}
            className='shadow-sm px-4 w-full z-50 py-4 md:py-0 h-[4rem] md:h-[6rem] backdrop-blur-md fixed inset-0'>
            <div className="w-0">
                <NavDrawer open={navOpen} setOpen={setNavOpen} />
            </div>
            <div className="px-2 md:px-0 container relative flex items-center h-full justify-between">
                <motion.div
                    initial={{ x: 0, y: -200 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="hidden md:flex relative pt-6 pb-5 px-5  items-center justify-center ">
                    <Logo />
                </motion.div>
                <div className="flex md:hidden">
                    <motion.div
                        initial={{ x: 0, y: -200 }}
                        animate={{ x: 0, y: 0 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="flex md:hidden relative items-center justify-center ">
                        <Logo />
                    </motion.div>
                </div>
                <ul className=' hidden md:flex items-center space-x-10'>
                    {navData.map(({ label, link }, i) => (
                        <motion.li
                            key={i}
                            initial={{ x: 200, y: -200 }}
                            animate={{ x: 0, y: 0 }}
                            transition={{ type: "spring", stiffness: 100, delay: `0.${i + 1}` }}
                            className='relative link-effect'>
                            <Link href={link}>
                                <a>
                                    {label}
                                </a>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
                <div onClick={() => setNavOpen(!navOpen)} className="flex md:hidden">
                    <VscMenu className='text-2xl cursor-pointer hover:rotate-180 transition-all duration-500' />
                </div>
            </div>

        </motion.header>
    )
}

export default index