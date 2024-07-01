import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import DropdownMenu from './DropDown'
// import { motion } from 'framer-motion'

const Header = () => {
  const [open, setOpen] = useState(false)
  return (
    <>

      <div style={{ background: 'linear-gradient(to right, #2b3a31, #3F452C, #665921, #8D6E17, #AD7F0F)' }} className='flex items-center justify-center h-[42px] '>
        <span className="bg-black leading-7 bg-opacity-50 px-4 inline-block align-middle text-xs text-white rounded-md font-bold mr-4 leading-6 uppercase">Success stories</span>
        <div className='uppercase text-xs font-medium align-middle text-white '>Fight for right cause for save the world. </div>
        <Link href='/stories' className='uppercase text-xs font-medium align-middle text-white underline underline-offset-4 hover:opacity-50'>Read Stories</Link>
      </div>
      <header className='w-fullfixed z-50 px-11 py-4 md:py-[30px] bg-primary-light border-b-2'>
        <div className='container mx-auto flex justify-between items-center h-full '>
          <div className='flex items-center'>
            <Link href='/' className='flex relative items-center'>
              <img src='/logo.jpg' alt='Logo' className='w-10 h-10' />
              <h1 className='text-xl font-bold ml-2'>Charity</h1>
              <div className='w-0.5 h-8 bg-gray-200 absolute right-0 translate-x-5' />
            </Link>
            <div className='hidden md:flex items-center ml-10'>
              <Link href='/' className='text-lg font-medium mr-8 text-dark-grey opacity-50'>Home</Link>
              <Link href='/contact' className='text-lg font-medium text-dark-grey mr-8 hover:opacity-50'>Contact Us</Link>
              <Link href='/team' className='text-lg font-medium text-dark-grey hover:opacity-50 mr-8'>Our Team</Link>
              {/* <Link href='/our-work' className='text-base font-medium text-dark-grey hover:opacity-50 mr-8'>Our Work</Link> */}
              <DropdownMenu text='Our Work' links={[
                { href: '/work1', text: 'Work 1' },
                { href: '/work2', text: 'Work 2' },
                { href: '/work3', text: 'Work 3' },
              ]} />
            </div>
          </div>
          <div className='flex items-center'>
            <div className='hidden md:flex items-center mr-8'>
              <p className='text-base font-medium mr-4'>+1 234 567 890</p>
              <button className='bg-dark-grey text-white px-4 py-2 rounded-md hover:bg-medium-grey'>Let's Talk</button>
            </div>
            <div className='md:hidden'>
              <button onClick={() => setOpen(!open)} className='text-gray-600 hover:text-gray-800'>
                <div className={`icon ${open ? 'change' : 'open'}`}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </div>
              </button>
            </div>
          </div>
        </div>

      </header>
      <div className={`md:hidden fixed inset-0 bg-white z-20 transform transition-transform duration-200 ease-in-out translate-y-20 ${open ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='p-8'>
          <Link href='/' className='block text-lg font-medium mb-4 text-dark-grey opacity-50'>Home</Link>
          <Link href='/contact' className='block text-lg font-medium mb-4 text-dark-grey hover:opacity-50'>Contact Us</Link>
          <Link href='/team' className='block text-lg font-medium mb-4 text-dark-grey hover:opacity-50'>Our Team</Link>
          <DropdownMenu text='Our Work' links={[
            { href: '/work1', text: 'Work 1' },
            { href: '/work2', text: 'Work 2' },
            { href: '/work3', text: 'Work 3' },
          ]} />
        </div>
      </div>
    </>

  )
}

export default Header
