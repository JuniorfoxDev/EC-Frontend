
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiShoppingBag } from "react-icons/hi2";

const Navbar = () => {
  const [isDropdownOpen,setIsDrodownOpen] = useState(false)
  const [cartCount,setCartCount] = useState(0);
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartCount(cart.length);
  },[]);
  return (
    <header className='w-full h-[50px] md:h-[40px] bg-white flex justify-between px-4 pt-4 pb-4 md:px-10 items-center  z-20 sticky top-0 transition-transform duration-300'>
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
          <div className='relative' onClick={() => setIsDrodownOpen(true)} onMouseLeave={() => setIsDrodownOpen(false)} >
          <NavLink to='#' className='flex items-center'>
            Men's Shoes
          </NavLink>
          {isDropdownOpen && (
            <div className='absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded py-2'>
              <NavLink to='/categories/Low' className='block px-4 py-2 text-gray-800 hover:bg-gray-600'>Low</NavLink>
              <NavLink to='/categories/Mid' className='block px-4 py-2 text-gray-800 hover:bg-gray-600'>Mid</NavLink>
              <NavLink to='/categories/Top' className='block px-4 py-2 text-gray-800 hover:bg-gray-600'>Top</NavLink>
            </div>
          )}
          </div>
          </div>
          <div className='car flex gap-5 items-center'>
          <NavLink to='/cart' className="relative">
                  <HiShoppingBag size='2em'/>
                  {cartCount > 0 && (
                    <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                      {cartCount}
                    </span>
                  )
                  }
          </NavLink>
          </div>
    </header>
  )
}

export default Navbar