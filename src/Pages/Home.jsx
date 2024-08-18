/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../Components/Banner/Banner'
import Fit from '../Components/Fit/Fit'

import ProductList from '../Components/ProductList'
const Home = () => {
  
  return (
    <>
    <div className='w-full max-w-[1280px] px-5 md:px-10 mx-auto'>
        <Banner/>
        <Fit/>
        <ProductList/>
    </div>
    </>
  )
}

export default Home