import { useState, useEffect } from 'react';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(cart);
    }, []);

    if (cartItems.length === 0) {
        return <div>Your cart is empty</div>;
    }

    return (
        <div className="w-full md:py-20">
            <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
                <h2 className="text-3xl font-bold mb-8">Your Cart</h2>
                {cartItems.map((item, index) => (
                    <div key={index} className="flex gap-4 mb-4">
                        <img src={item.image} alt={item.name} className="w-[100px] h-[100px] object-cover" />
                        <div>
                            <div className="text-lg font-semibold">{item.name}</div>
                            <div className="text-sm text-gray-500">Size: {item.size}</div>
                            <div className="text-lg font-semibold">&#8377; {item.price}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
