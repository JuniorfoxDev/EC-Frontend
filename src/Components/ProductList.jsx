import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://ec-backend-server.vercel.app/products`,{
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
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  px-5 md:px-0'>
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
  );
};

export default ProductList;
