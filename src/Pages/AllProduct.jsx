import React, { useEffect, useState } from 'react';
import { BiSearchAlt } from "react-icons/bi";
import "../Components/Banner/Banner.css";
import ProductCard from '../Components/ProductCard';

const AllProduct = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('New');

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    filterAndSortProducts();
  }, [searchTerm, sortOption, products]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`https://ec-backend-server.vercel.app/products`, {
        method: 'GET',
        credentials: 'include',
      });
      const data = await response.json();
      if (data) {
        setProducts(data);
        setFilteredProducts(data);
      } else {
        setProducts([]);
        setFilteredProducts([]);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const filterAndSortProducts = () => {
    let updatedProducts = [...products];

    // Filter by search term
    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort by selected option
    switch (sortOption) {
      case 'Price: Low-High':
        updatedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High-Low':
        updatedProducts.sort((a, b) => b.price - a.price);
        break;
      case 'New':
        updatedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'Top':
        updatedProducts.sort((a, b) => {
          if(a.subcategory === 'Top' && b.subcategory !== 'Top') return -1;
          if(a.subcategory !== 'Top' && b.subcategory === 'Top') return 1;
          return 0;
        });
        break;
      case 'Mid':
        updatedProducts.sort((a, b) => {
          if(a.subcategory === 'Mid' && b.subcategory !== 'Mid') return -1;
          if(a.subcategory !== 'Mid' && b.subcategory === 'Mid') return 1;
          return 0;
        });
        break;
      case 'Low':
        updatedProducts.sort((a, b) => {
          if(a.subcategory === 'Low' && b.subcategory !== 'Low') return -1;
          if(a.subcategory !== 'Low' && b.subcategory === 'Low') return 1;
          return 0;
        });
        break;
      default:
        break;
    }

    setFilteredProducts(updatedProducts);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className='h-auto py-6 bg-[#e4e4e4]'>
      <div className='py-10 px-10 flex flex-col md:flex-row gap-4 md:gap-0 items-center md:justify-between'>
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
            <option value="Top" className='poppins-regular text-xl p-2'>Top</option>
            <option value="Mid" className='poppins-regular text-xl p-2'>Mid</option>
            <option value="Low" className='poppins-regular text-xl p-2'>Low</option>
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
            filteredProducts.map((product) => (
              <ProductCard key={product._id} {...product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
