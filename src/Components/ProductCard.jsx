import { Link, Navigate, useNavigate } from "react-router-dom";
import {FaPlus} from "react-icons/fa";
const ProductCard = ({_id,images, name, price,subcategory}) => {
    return (
        <Link to={`/product/${_id}`} className='min-w-[250px] px-[10px] py-[12px]'>
        {images && (
                <img src={images[0].url} alt={name}  className='w-[350px] h-[350px]'/>
            )}
          <div className='py-2 relative'>
            <span className='poppins-medium text-[18px] text-gray-500'>{subcategory}</span>
            <h2 className='poppins-bold text-[xl] w-48 py-2'>{name}</h2>
            <h4 className='poppins-regular text-[14px]'>Rs.{price}.00</h4>
          <button className='px-2 py-2 bg-black text-white rounded-full hover:bg-black[0.4] cursor-pointer absolute right-2 top-4'><FaPlus /></button>
          </div>
        </Link>
    )
}
export default ProductCard;