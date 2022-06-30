import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='min-w-screen'>
    <Navbar/>
    {children}
    <Footer/>
    </div>
  )
}

export default Layout