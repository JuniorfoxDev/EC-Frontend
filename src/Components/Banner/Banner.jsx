import React from 'react'
import './Banner.css'
import { NavLink } from 'react-router-dom'
const Banner = () => {
  return (
      <div className=' h-[470px] p-4 bg-hero-bag bg-no-repeat  flex items-center justify-center md:bg-cover '>
        <div className='w-[300px] h-[350px] text-center rounded-xl bg-white flex flex-col items-center justify-center px-2 visible md:invisible'>
          <h2 className='sa text-5xl font-extrabold'>BUILT FOR THE CHASE </h2>
          <p className='py-4 text-xl'>Run 'em down in the new Giannis Freak 6.</p>
          <button className='bg-black text-white px-6 p-2 rounded-full'>Shop</button>
        </div>
    </div>
  )
}

export default Banner