import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import "../Components/Banner/Banner.css";
import ProductCard from '../Components/ProductCard';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('New');

  useEffect(() => {
    fetchProducts(searchTerm, sortOption);
  }, [searchTerm, sortOption]);

  const fetchProducts = async (search = '', sort = 'New') => {
    try {
      const response = await fetch(`https://ec-backend-server.vercel.app/products?search=${search}&sort=${sort}`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className='h-auto py-6 bg-[#e4e4e4]'>
      <div className='py-10 px-10 flex items-center justify-between'>
        <div className='flex items-center bg-white px-4 py-4 gap-4 rounded-full w-[250px]'>
          <input 
            type="text" 
            placeholder='Search' 
            className='outline-none poppins-regular' 
            value={searchTerm} 
            onChange={handleSearchChange} 
          />
          <BiSearchAlt />
        </div>
        <div>
          <label htmlFor="" className='mr-2 poppins-regular text-xl'>Sort By: </label>
          <select 
            name="" 
            id="" 
            className='outline-none px-4 py-2' 
            value={sortOption} 
            onChange={handleSortChange}
          >
            <option value="New" className='poppins-regular text-xl p-2'>New</option>
            <option value="Low" className='poppins-regular text-xl p-2'>Low</option>
            <option value="Top" className='poppins-regular text-xl p-2'>Top</option>
            <option value="High" className='poppins-regular text-xl p-2'>High</option>
            <option value="Price: Low-High" className='poppins-regular text-xl p-2'>Price: Low-High</option>
            <option value="Price: High-Low" className='poppins-regular text-xl p-2'>Price: High-Low</option>
          </select>
        </div>
      </div>
      <div className='px-10 py-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-5'>
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
    </div>
  );
};

export default AllProduct;
