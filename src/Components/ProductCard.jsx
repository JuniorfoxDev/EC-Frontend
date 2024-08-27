import { Link, Navigate, useNavigate } from "react-router-dom";
import {FaPlus} from "react-icons/fa";
const ProductCard = ({_id,images, name, price,subcategory}) => {
    return (
        <Link to={`/product/${_id}`} className=' min-w-[250px] px-[10px] py-[12px] border border-[#cce7d0] rounded-[25px] shadow-[20px_20px_30px_rgba(0,0,0,0.02)] mx-[15px] my-0 transition ease delay-150 hover:shadow-[20px_20px_30px_rgba(0,0,0,0.06)]'>
        {images && (
                <img src={images[0].url} alt={name}  className='w-full rounded-xl'/>
            )}
          <div className='px-4 py-2 relative'>
            <span className='poppins-bold text-xl text-gray-500'>{subcategory}</span>
            <h2 className='poppins-medium text-2xl w-48 py-2'>{name}</h2>
            <h4 className='poppins-extrabold text-xl'>Rs.{price}.00</h4>
          <button className='px-4 py-4 bg-black text-white rounded-full hover:bg-black[0.4] cursor-pointer absolute right-8 top-4'><FaPlus /></button>
          </div>
        </Link>
    )
}
export default ProductCard;