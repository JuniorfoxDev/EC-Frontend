/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../Components/Banner/Banner'
import Fit from '../Components/Fit/Fit'
import ProductList from '../Components/ProductList'
import Ab from '../Components/Ab'
import Cat from '../Components/Cat'
const Home = () => {
  
  return (
    <>
    <div className='w-full'>
        <Banner/>
        <Ab/>
        <Cat/>
        <Fit/>
        <ProductList/>
    </div>
    </>
  )
}

export default Home