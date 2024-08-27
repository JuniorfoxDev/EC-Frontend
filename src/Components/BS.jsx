import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Banner/Banner.css"
import ProductCard from './ProductCard';
const BS = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://ec-backend-server.vercel.app/products`,{
        method: 'GET',
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data);
      if (data) {
        setProducts(data);
      } else {
        setProducts([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
      <div className='h-auto px-8 md:px-28 py-20'>
          <div className=' pt-10 md:pt-20 pb-10 flex justify-between items-center'>
              <h2 className='poppins-bold text-2xl md:text-4xl'>All Products</h2>
              <div className='buttons flex justify-center space-x-4'>
                <Link className='underline text-xl poppins-bold'>
                 See All
                </Link>
              </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5'>
        {loading ? (
          <div className='flex flex-col justify-center items-center gap-5 py-4 opacity-20'>
            <img src="https://nike-shoe-store.vercel.app/logo.svg" alt="" className='w-[60px] md:w-[80px]' />
            <p className='text-black/[0.9] font-semibold text-xl'>Loading...</p>
          </div>
          ) : (
              products.map((product) => (
                  <ProductCard key={product._id} {...product} />
              ))
          )}
      </div>
      </div>
  )
}

export default BS