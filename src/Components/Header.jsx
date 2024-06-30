import React from 'react'
import { Link } from 'react-router-dom'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
// import { motion } from 'framer-motion'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className='w-full h-20 bg-white fixed z-50'>
      <div className='container mx-auto flex justify-between items-center h-full'>
        <div className='flex items-center'>
          <Link to='/' className='flex items-center'>
            <img src='/logo.png' alt='Logo' className='w-10 h-10' />
            <h1 className='text-xl font-bold ml-2'>Charity</h1>
          </Link>
          <div className='hidden md:flex items-center ml-10'>
            <Link to='/' className='text-base font-medium mr-8'>Home</Link>
            <Link to='/contact' className='text-base font-medium mr-8'>Contact Us</Link>
            <Link to='/team' className='text-base font-medium mr-8'>Our Team</Link>
          </div>
        </div>
        <div className='flex items-center'>
          <div className='hidden md:flex items-center mr-8'>
            <p className='text-base font-medium mr-4'>+1 234 567 890</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Let's Talk</button>
          </div>
          <div className='md:hidden'>
            <button onClick={() => setOpen(!open)} className='text-gray-600 hover:text-gray-800'>
              {open ? <XMarkIcon className='w-6 h-6' /> : <Bars3Icon className='w-6 h-6' />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        // <motion.div
        //   initial={{ opacity: 0, y: -20 }}
        //   animate={{ opacity: 1, y: 0 }}
        //   exit={{ opacity: 0, y: -20 }}
        //   className='md:hidden absolute top-0 left-0 w-full h-screen bg-white z-40'
        // >
          <div className='container mx-auto flex flex-col items-center justify-center h-full'>
            <Link to='/' className='text-base font-medium mb-8'>Home</Link>
            <Link to='/contact' className='text-base font-medium mb-8'>Contact Us</Link>
            <Link to='/team' className='text-base font-medium mb-8'>Our Team</Link>
            <div className='flex items-center'>
              <p className='text-base font-medium mr-4'>+1 234 567 890</p>
              <button className='bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600'>Let's Talk</button>
            </div>
          </div>
        // </motion.div>
      )}
    </header>
  )
}

export default Header
