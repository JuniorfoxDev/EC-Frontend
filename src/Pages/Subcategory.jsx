import { NavLink, useParams } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"
import { useEffect, useState } from "react";

const Subcategory = () => {
    const {subcategory} = useParams();
    const [products,setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    },[subcategory]);
    const fetchProducts = async () => {
        try {
          const response = await fetch(`https://ec-backend-server.vercel.app/categories/${subcategory}`);
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };
    return (
        <div className="flex gap-4">
            <Navbar />
            <div className="mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Products in {subcategory}</h1>
                <div className="grid grid-cols-3 gap-4">
                    {products.map((product) => (
                        <div key={product._id} className="border p-4 rounded-md">
                            <img src={product.images[0]?.url} alt={product.name} className="w-full h-32 object-cover mb-2" />
                            <h3 className="font-bold">{product.name}</h3>
                            <p>&#8377;{product.price}</p>
                            <NavLink to={`/products/${product._id}/edit`} className="text-blue-500 hover:underline">Edit</NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Subcategory