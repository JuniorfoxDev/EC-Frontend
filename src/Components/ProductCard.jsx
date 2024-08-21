import { Link, Navigate, useNavigate } from "react-router-dom";

const ProductCard = ({_id,images, name, price}) => {
    return (
        <Link to={`/product/${_id}`} className="transform overflow-hidden bg-white duration-300 hover:scale-95 cursor-pointer">
            {product.images && Array.isArray(product.images) && product.images.length > 0 &&
                product.images.map((img, index) => (
                    img && img[0].url && (
                        <img key={index} src={img[0].url} alt={product.name} />
                    )
                ))
            }
             <div className="p-2 text-black/[0.9]">
             <h2 className="text-lg font-semibold">{name}</h2>
             <p className="mr-2 text-lg font-bold"> &#8377;{price}</p>
             </div>
        </Link>
    )
}
export default ProductCard;