import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
    const [product,setProduct] = useState([]);
    const [loading,setLoading] = useState(true);
    useEffect(()=> {
        fetchProducts()
    },[])
    const fetchProducts = async () => {
        try {
            const response = await fetch(`https://ec-backend-server.vercel.app/products`);
            const data = await response.json();
            console.log(data)
            if(data){
                setProduct(data)
            } else{
                setProduct([])
            }
            setLoading(false);
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
        {loading ? (
                <p >Loading </p> 
                ) : (
                    <div>                
                    {product.map(p => (
                    <div key={p._id}>
                        <Link className="transform overflow-hidden bg-white duration-300 hover:scale-95 cursor-pointer">
                        <img src="" width={500} height={500} alt="" className="rounded-lg" />
                        <div className="p-4 text-black/[0.9]">
                        <h2 className="text-lg font-semibold">{}</h2>
                        <p className="mr-2 text-lg font-bold">&#877;{}</p>
                        </div>
                     </Link>
                    </div>
                     ))}
                     </div>
            )}
        </div>
    )
}
export default ProductCard;