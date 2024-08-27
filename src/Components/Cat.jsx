import React from 'react'
import "./Banner/Banner.css"
import { Link } from 'react-router-dom'
const Cat = () => {
  return (
    <div className='h-[900px] md:h-[600px] px-8 md:px-32'>
        <div className='pt-6 md:pt-14 pb-5 md:pb-10 '>
            <h2 className='poppins-bold text-2xl md:text-4xl'>Categories</h2>
        </div>
        <div className='flex flex-col md:flex-row gap-4 md:gap-10 justify-center items-center'>
            <Link to='/categories/Low' className='relative'>
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2c5fca2b-8444-4de1-8b26-befa5cdca6fb/JORDAN+LUKA+3+PF.png" alt="" className=' w-[250px] h-[250px] md:w-[350px] md:h-[350px]' />
                <span className='absolute bottom-0 bg-black/[0.8] w-full text-center py-2 text-white poppins-medium'>LOW TOP</span>
            </Link>
            <Link to='/categories/Mid' className='relative'>
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/df5929be-5478-46e6-9e36-15e1ed9e401a/AIR+JORDAN+4+RM.png" alt="" className='w-[250px] h-[250px] md:w-[350px] md:h-[350px]'/>
                <span className='absolute bottom-0 bg-black/[0.8] w-full text-center py-2 text-white poppins-medium'>MID TOP</span>
            </Link>
            <Link to='/categories/Top' className='relative'>
                <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/47f1be7a-8cc2-4fbb-acfc-28212e7a8056/AIR+JORDAN+1+HIGH+G.png" alt="" className='w-[250px] h-[250px] md:w-[350px] md:h-[350px]'/>
                <span className='absolute bottom-0 bg-black/[0.8] w-full text-center py-2 text-white poppins-medium'>HIGH TOP</span>
            </Link>
        </div>
    </div>
  )
}

export default Cat