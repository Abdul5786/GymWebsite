import React from 'react'
import { FaDumbbell, FaHeartbeat, FaPlay, FaRunning } from 'react-icons/fa'

function Banner() {
  return (
    <div>
      {/* Banner section */}
      <div id='home' className='relative h-screen bg-black overflow-hidden flex flex-col lg:flex-row items-center justify-center lg:justify-between'> 
        {/* Content section */}
        <div className='relative z-10 flex flex-col justify-center items-start px-6 sm:px-10 lg:px-20 text-white bg-gradient-to-r from-black via-transparent h-full w-full lg:w-3/4'>
          
          <h1 className='whitespace-nowrap text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl mb-6 animate-slideInLeft text-center lg:text-left'>
            Elevate your <span className='text-yellow-500'>Workout</span>
          </h1>
          
          <p className='text-sm sm:text-base md:text-lg lg:text-xl mb-8 animate-slideInLeft delay-300 text-center lg:text-left'>
            Transform your fitness journey with professional guidance and advanced techniques. 
            Push your limits every day and achieve your dream body with a customized plan.
          </p>    

          {/* Icons section */}
          <div className='flex flex-wrap sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fadeIn delay-400'>
            <div className='flex items-center gap-3 group'>
              <FaDumbbell className='text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110'/>
              <span className='text-sm sm:text-lg font-medium'>
                Strength Training
              </span>
            </div>

            <div className='flex items-center gap-3 group'>
              <FaHeartbeat className='text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110'/>
              <span className='text-sm sm:text-lg font-medium'>
                Cardio Fitness
              </span>
            </div>

            <div className='flex items-center gap-3 group'>
              <FaRunning className='text-yellow-500 text-2xl sm:text-3xl transition-transform transform group-hover:rotate-12 group-hover:scale-110'/>
              <span className='text-sm sm:text-lg font-medium'>
                Endurance
              </span>
            </div>
          </div>

          {/* Buttons Section */}
          <div className='flex flex-wrap gap-4 justify-center lg:justify-start mb-6'>
            <button className='px-4 sm:px-6 py-2 sm:py-3 bg-yellow-400 text-black font-semibold
                rounded-full shadow-md hover:bg-yellow-500 transition-transform transform hover:scale-105 duration-300'>  
              Get Started
            </button> 
            <button className='px-4 sm:px-6 py-2 sm:py-3 bg-white text-black font-semibold
                rounded-full shadow-md hover:bg-gray-100  transition-transform transform hover:scale-105 delay-700 flex items-center gap-2'>  
              <FaPlay className='text-black text-xl'/>Watch Demo
            </button> 
          </div>

        </div>
      </div>
    </div>
  )
}

export default Banner
