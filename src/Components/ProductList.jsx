import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { FaAngleRight, FaAngleLeft ,FaPlus} from "react-icons/fa";
import "./Banner/Banner.css"
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  useEffect(() => {
    fetchProducts();
  }, [currentPage]);

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
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const handlePageChange = (page) => {
    setCurrentPage(page);
};
  return (
    <div className='h-auto px-8 pb-10 md:px-28 '>
      <div className=' pt-10 md:pt-20 pb-10 flex justify-between items-center'>
        <h2 className='poppins-bold text-2xl md:text-4xl'>New Arrivals</h2>
        <div className='buttons flex justify-center space-x-4'>
          <button className='px-4 py-4 bg-black text-white rounded-full hover:bg-black[0.4] cursor-pointer' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}><FaAngleLeft /></button>
          <button className='px-4 py-4 bg-black text-white rounded-full hover:bg-black[0.4] cursor-pointer'  onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}> <FaAngleRight /></button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5'>
        {loading ? (
          <div className='flex flex-col justify-center items-center gap-5 py-4 opacity-20'>
            <img src="https://nike-shoe-store.vercel.app/logo.svg" alt="" className='w-[60px] md:w-[80px]' />
            <p className='text-black/[0.9] font-semibold text-xl'>Loading...</p>
          </div>
          ) : (
              currentItems.map((product) => (
                  <ProductCard key={product._id} {...product} />
              ))
          )}
      </div>
    </div>
  );
};

export default ProductList;
