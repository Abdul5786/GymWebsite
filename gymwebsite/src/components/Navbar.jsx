import React from 'react'
import { Link } from 'react-scroll'
import { FaHome } from "react-icons/fa";

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop:blur-md shadow-lg z-50'>
          <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-3'>
            <div className='cursor-pointer text-2xl text-white font-bold font-[Caveat]'>
              {/* logo*/}
             Gym point
            </div>
            <div className='hidden md:flex gap-8 items-center text-white font-semibold'>
            <Link 
            to='home' 
            smooth={true} 
            duration={500} 
            className='flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer'
          >
            <FaHome /> Home
          </Link>
          <Link 
            to='home' 
            smooth={true} 
            duration={500} 
            className='flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer'
          >
            <FaHome /> Home
          </Link>
          <Link 
            to='home' 
            smooth={true} 
            duration={500} 
            className='flex items-center gap-2 hover:text-blue-500 transition-colors duration-300 cursor-pointer'
          >
            <FaHome /> Home
          </Link>
            </div>
          </div>
    </nav>
  )
}

export default Navbar
