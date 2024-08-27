import React from 'react'
import "./Banner/Banner.css"

const Nw = () => {
  return (
    <div className='relative h-[400px] bg-hero-news bg-no-repeat bg-cover my-5 flex flex-col items-center justify-center text-white'>
      <div className='absolute inset-0 bg-black opacity-75'></div>
      <div className='relative z-10 px-10 text-center flex flex-col items-center justify-center'>
        <h2 className=' text-2xl md:text-4xl poppins-extrabold py-2'>Get Discount for membership</h2>
        <p className='text-xs md:text-xl poppins-regular '>Every New membership will get a 40% Discount for the first purchase </p>
        <button className='my-6 px-4 py-4 md:px-6 md:py-4 bg-white text-black rounded-2xl'>Join Now</button>
      </div>
    </div>
  )
}

export default Nw
