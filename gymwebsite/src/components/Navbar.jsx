import React, { useState } from 'react'
import { Link } from 'react-scroll'
import { FaCommentDots, FaEnvelope, FaHome, FaUserTie } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {

  const[menuOpen,setMenuOpen]=useState(false);
  return (
    <nav className='fixed top-0 left-0 w-full bg-gradient-to-r from-black via-gray-900 to-black backdrop:blur-md shadow-lg z-50'>
          <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-3'>
            <div className='cursor-pointer text-2xl text-white font-bold font-[Caveat]'>
              {/* logo*/}
              GymBuddy
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
            to='trainer' 
            smooth={true} 
            duration={500} 
            className='flex items-center gap-2 hover:text-green-500 transition-colors duration-300 cursor-pointer'
          >
            <FaUserTie /> Tariner
          </Link>

          <Link 
            to='opinions' 
            smooth={true} 
            duration={500} 
            className='flex items-center gap-2 hover:text-pink-500 transition-colors duration-300 cursor-pointer'
          >
            <FaCommentDots /> Opinions
          </Link>
          <Link 
            to='contact' 
            smooth={true} 
            duration={500} 
            className='flex items-center gap-2 hover:text-purple-500 transition-colors duration-300 cursor-pointer'
          >
            <FaEnvelope /> Contact
          </Link>

       
            </div>

            {/* mobile Toggle */}
            <button className='md:hidden text-white focus:outline-none'  onClick={()=>setMenuOpen(!menuOpen)} aria-label='toggle  Menu'>
           {menuOpen ? <IoMdClose/> : <GiHamburgerMenu/>}
        </button>

          </div>
          
          {/* mobile navigation  */}

          {

            menuOpen && (
              <div className='md:hidden bg-gray-800 text-white flex flex-col items-center gap-4 py-4'>

          <Link 
            to='home' 
            smooth={true} 
            duration={500} 
            className=' hover:text-blue-500 transition-colors duration-300 cursor-pointer'
            onClick={()=>setMenuOpen(false)}>
              Home
          </Link>
          <Link 
            to='tariner' 
            smooth={true} 
            duration={500} 
            className=' hover:text-blue-500 transition-colors duration-300 cursor-pointer'
            onClick={()=>setMenuOpen(false)}>
             Trainer
          </Link>
          <Link 
            to='opinions' 
            smooth={true} 
            duration={500} 
            className=' hover:text-blue-500 transition-colors duration-300 cursor-pointer'
            onClick={()=>setMenuOpen(false)}>
              Opinions
          </Link>
          <Link 
            to='contact' 
            smooth={true} 
            duration={500} 
            className=' hover:text-blue-500 transition-colors duration-300 cursor-pointer'
            onClick={()=>setMenuOpen(false)}>
             Contact
          </Link>
              </div>
            )
          }

    </nav>
  )
}

export default Navbar
