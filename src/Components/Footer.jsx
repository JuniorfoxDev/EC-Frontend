/* eslint-disable no-unused-vars */
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <div className=' h-auto md:h-[500px] text-white bg-black flex justify-between px-8 md:px-28 py-12 gap-2 '>
      <div className='lf'>
        <div>
        <h2 className='text-3xl py-2 font-bold'>The Aurous</h2>
        <h5 className='py-2 md:w-96 font-normal md:text-xl'>Stay in the know on product releases, founder news, and all things Atoms.</h5>
        <h4 className='py-1'><span className='font-bold text-sm md:text-xl '>Email :</span> Support@TheAurous.com</h4>
        <h4 className='py-1'><span className='font-bold text-sm md:text-xl'>Contact No. : </span>932 946 4968 (Mon to Sat - 11:00 AM to 7:00 PM)</h4>
        </div>
        <div>
            <h4 className='text-3xl text-gray-500 font-bold'>Stay Connected</h4>
            <div className='py-4 flex gap-4'>
            <NavLink><FaInstagram size={'2em'}/></NavLink>
            <NavLink><FaXTwitter size={'2em'}/></NavLink>
            <NavLink><FaFacebook size={'2em'}/></NavLink>
            </div>
        </div>
      </div>
      <div className='rh'>
        <h2 className='text-3xl font-semibold py-4'>Quick Links</h2>
        <div className='flex flex-col gap-2'>
            <NavLink className='text-lg font-normal hover:text-gray-600'>Help Center</NavLink>
            <NavLink className='text-lg font-normal hover:text-gray-600'>FAQs</NavLink>
            <NavLink className='text-lg font-normal hover:text-gray-600'>Subscription</NavLink>
            <NavLink className='text-lg font-normal hover:text-gray-600'>Order Status</NavLink>
            <NavLink className='text-lg font-normal hover:text-gray-600'>Returns & Exchanges</NavLink>
            <NavLink className='text-lg font-normal hover:text-gray-600'>Contact us</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Footer