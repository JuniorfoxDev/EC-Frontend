import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { FaAngleRight, FaAngleLeft ,FaPlus} from "react-icons/fa";
import "./Banner/Banner.css"
const ProductList = () => {
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
    // <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-5 md:px-0'>
    //   {loading ? (
    //     <div className='flex flex-col justify-center items-center gap-5 py-4 opacity-20'>
    //       <img src="https://nike-shoe-store.vercel.app/logo.svg" alt="" className='w-[60px] md:w-[80px]' />
    //       <p className='text-black/[0.9] font-semibold text-xl'>Loading...</p>
    //     </div>
    //     ) : (
    //         products.map((product) => (
    //             <ProductCard key={product._id} {...product} />
    //         ))
    //     )}
    // </div>
    <div className='h-[500px] md:px-32'>
      <div className='pt-20 pb-10 flex justify-between items-center'>
        <h2 className='poppins-bold text-4xl'>New Arrivals</h2>
        <div className='buttons flex justify-center space-x-4'>
          <button className='px-4 py-4 bg-black text-white rounded-full hover:bg-black[0.4] cursor-pointer'><FaAngleLeft /></button>
          <button className='px-4 py-4 bg-black text-white rounded-full hover:bg-black[0.4] cursor-pointer'> <FaAngleRight /></button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
  );
};

export default ProductList;
