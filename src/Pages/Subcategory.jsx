import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";

const Subcategory = () => {
    const {subcategory} = useParams();
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        fetchProducts();
    },[subcategory]);
    const fetchProducts = async () => {
        try {
          const response = await fetch(`https://ec-backend-server.vercel.app/categories/${subcategory}`);
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching products:', error);
          setLoading(false);
        }
      };
    return (
      <div className="mx-auto px-28 py-14">
        <h1 className="text-2xl font-bold mb-4">Products in {subcategory}</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {loading ? (
            <div className='flex flex-col justify-center items-center gap-5 py-4 opacity-20'>
              <img src="https://nike-shoe-store.vercel.app/logo.svg" alt="" className='w-[60px] md:w-[80px]' />
              <p className='text-black/[0.9] font-semibold text-xl'>Loading...</p>
            </div>
          ) : (products.map((product) => (
            <ProductCard key={product._id} {...product} />
          ))
          )}
        </div>
      </div>
    )
}
export default Subcategory