/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../Components/Banner/Banner'
import Fit from '../Components/Fit/Fit'
import ProductCard from '../Components/ProductCard'
const Home = () => {
  
  return (
    <>
        <Banner/>
        <Fit/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0'>
        <ProductCard/>
        </div>
    </>
  )
}

export default Home