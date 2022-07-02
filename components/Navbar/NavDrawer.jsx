import { Drawer, IconButton, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import React, { useState } from 'react'
import { navData } from '../dummyData'
import { motion } from 'framer-motion'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'


const NavDrawer = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }
    const [showSubMenu, setShowSubMenu] = useState('')
    return (
        <div className='flex overflow-hidden lg:hidden'>
            <Drawer
                open={open}
                anchor='left'
                onClose={handleClose}
            >
                <div
                    style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6))` }}
                    className="h-full overflow-hidden max-h-screen ">
                    <div
                        className="min-w-[20rem] backdrop-blur-md  flex flex-col h-screen items-stretch">
                        <div
                            onClick={() => setOpen(false)} className={`w-fit ml-auto cursor-pointer flex lg:hidden hover:rotate-180 font-medium bg-themeYellow  text-white text-lg  p-3 transition-all duration-300 `}>
                            <RiCloseLine />
                        </div>
                        <ul className='flex-col px-6 pt-6 md:hidden flex'>
                            {navData.map(({ label, link, submenu }, i) => (
                                <>
                                    <motion.li
                                        key={i}
                                        initial={{ x: -200, y: 0 }}
                                        animate={{ x: 0, y: 0 }}
                                        transition={{
                                            duration: "0.8",
                                            delay: `0.${i + 1}`,
                                            type: 'tween'
                                        }}
                                        className='flex py-3 z-20 justify-between'>
                                        <Link href={link}>

                                            <a className='relative link-effect w-fit '>
                                                {label}
                                            </a>

                                        </Link>
                                        {submenu &&
                                            <div onClick={() => setShowSubMenu(showSubMenu === label ? '' : label)} className="ml-auto transition-all duration-500 hover:text-themeYellow cursor-pointer">
                                                <HiOutlineChevronDoubleRight className={`${showSubMenu === label ? 'rotate-90' : ''}`} />
                                            </div>
                                        }
                                    </motion.li>
                                    {submenu &&
                                        <div className={`pb-2 h-fit mt-2 ${showSubMenu === label ? ' opacity-100 flex flex-col' : 'opacity-0 hidden'} transition-all duration-500 px-4 z-10  space-y-4 `}>
                                            {submenu.map(({ link, label }, i) => (
                                                <motion.li
                                                    key={i}
                                                    initial={{ x: 200, y: -200 }}
                                                    animate={{ x: 0, y: 0 }}
                                                    transition={{
                                                        duration: "0.8",
                                                        delay: `0.${i + 1}`,
                                                        type: 'tween'
                                                    }}
                                                    className='flex justify-between'>
                                                    <Link href={link}>
                                                        <a className='text-sm relative link-effect w-fit '>
                                                            {label}
                                                        </a>
                                                    </Link>

                                                </motion.li>
                                            ))}
                                        </div>
                                    }
                                </>
                            ))}
                        </ul>
                    </div >
                </div >
            </Drawer >
        </div >
    )
}

export default NavDrawer