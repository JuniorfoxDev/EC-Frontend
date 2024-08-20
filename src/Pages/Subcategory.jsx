import { NavLink, useParams } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import { useEffect, useState } from "react";

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
            <div className="mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Products in {subcategory}</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {loading ? (
                    <div className='flex flex-col justify-center items-center gap-5 bg-gray-100 py-4'>
                    <img src="https://nike-shoe-store.vercel.app/logo.svg" alt="" className='w-[60px] md:w-[80px]' />
                    <p className='text-black/[0.9] font-semibold text-xl'>Loading...</p>
                  </div>
                ) : (products.map((product) => (
                        <div key={product._id} className="border p-4 rounded-md">
                            <img src={product.images[0]?.url} alt={product.name} width={400} height={400} className="object-cover mb-2" />
                            <h3 className="font-bold">{product.name}</h3>
                            <p>&#8377;{product.price}</p>
                        </div>
                    ))
                )}
                </div>
            </div>
    )
}
export default Subcategory