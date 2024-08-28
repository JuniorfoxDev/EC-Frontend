import { Link, Navigate, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import Product from "../Pages/Product";
const ProductCard = ({ _id, images, name, price, subcategory }) => {
  const [currentImage, setCurrentImage] = useState(images[0].url);
  const navigate = useNavigate();
  const handleMouseEnter = () => {
    if (images.length > 1) {
      setCurrentImage(images[1].url)
    }
  }
  const handleMouseLeave = () => {
    setCurrentImage(images[0].url)
  }
  const handleCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItem = {
      id: _id,
      name: name,
      price: price,
      image: images[0].url
    };
    cart.push(cartItem);
    localStorage.setItem('cart',JSON.stringify(cart));
    navigate('/cart');
  }
  return (
    <Link to={`/product/${_id}`} className=' px-[10px] py-[12px]'>
      {images && (
        <img src={currentImage} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} alt={name} className='w-[350px] h-[350px]  transition-all duration-300 ease-in-out' />
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