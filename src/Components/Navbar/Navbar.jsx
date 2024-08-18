
import React from 'react'
import { NavLink } from 'react-router-dom'
import { HiShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  return (
    <header className='w-full h-[50px] md:h-[80px] bg-[#F8FAFC] flex justify-between px-4 md:px-10 items-center  z-20 sticky top-0 transition-transform duration-300'>
          <div className='logo'>
          <NavLink to='/'>
              <img src="https://nike-shoe-store.vercel.app/logo.svg" alt="" className='w-[60px] md:w-[80px]' />
          </NavLink>
          </div>
          <div className='ab gap-2 md:gap-10 flex text-base md:text-lg font-normal'>
          <NavLink to='/About' >
              About
          </NavLink>
          <NavLink to='/Contact'>
              Contact
          </NavLink>
          </div>
          <div className='car flex gap-5 items-center'>
          <NavLink>
                  <HiShoppingBag size='2em'/>
          </NavLink>
          <NavLink>
              <h2 className='border-2 px-2 py-1 md:px-6 md:py-2 rounded-md border-gray-950 text-gray-800 text-base'>Login</h2>
          </NavLink>
          </div>
    </header>
  )
}

export default Navbar