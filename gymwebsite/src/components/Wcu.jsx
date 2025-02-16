import React from 'react'

function Wcu() {
  return (
    <div className='bg-gradient-to-b from-black via-gray-800 to-black py-12'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        
        {/* heading section */}
        <div className='text-center mb-12'>
          <h2 className='text-white text-4xl  sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from  bg-pink-300 via-indigo-300 to-teal-300 text-transparent bg-clip-text'>why Choose Us</h2>
          <p className='mt-4 text-gray-300 text-sm sm:text-base lg:text-lg font-light'>Discover why we stand out with quality ,commitmnt and resuts</p>
        </div>

        {/* content section  */}
        <div className='flex flex-col lg:flex-row items-start gap-12'>
          {/* left section */}
          <div className='lg:w-1/2 w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 -ml-2 sm:ml-4 lg:-ml-6 xl:-ml-8'>
                         {  [

                            {
                                title:"Expert Trainer",
                                text:"highly qualified trainers to help  you achieve your goals"
                            },
                            {
                                title:"Expert Trainer",
                                text:"highly qualified trainers to help  you achieve your goals"
                            }
                            ,{
                                title:"Expert Trainer",
                                text:"highly qualified trainers to help  you achieve your goals"
                            }
                            ,{
                                title:"Expert Trainer",
                                text:"highly qualified trainers to help  you achieve your goals"
                            }
                           ].map((box,index)=>(
                            <div key={index} className='realtive flex flex-col justify-center items-center space-x-4 p-6
                             bg-gradient-to-r from bg-pink-100 via-purple-100 to-indigo-100 text-gray-300 rounded-xl
                             shadow-lg hover:scale-105 transition-transform duration-300'>
                                 <h4></h4>
                            </div>
                           ))
                        }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wcu
