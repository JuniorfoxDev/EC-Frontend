import React from 'react'
import './Banner.css'
import { NavLink } from 'react-router-dom'
const Banner = () => {
  return (
      <div className=' bg-[#F6F6F6] mx-10 my-4 py-3 md:mx-28 md:my-6 md:h-[650px] rounded-lg'>
          <div className='flex items-center justify-center flex-col'>
          <img src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/114cda05-4ca8-4d26-ab8a-0d171ec9b691/ZOOMX+VAPORFLY+NEXT%25+3+OLY.png" alt="" className=' h-[200px] w:[200px] md:w-auto md:h-[400px]  animate-bounce-slow rotate-[17]'  />
          <h4 className='sr text-2xl md:text-4xl pb-6 pt-6'>Light as a cloud</h4>
          <p className='text-sm md:text-base text-gray-800 font-medium pb-6'>All day comfort. All summer long.</p>
          <NavLink className='bg-black text-white rounded-3xl px-5 py-2 text-sm md:text-lg'>
            Shop Now
          </NavLink>
        </div>
    </div>
  )
}

export default Banner