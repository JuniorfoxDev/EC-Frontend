import React, { useState, useEffect } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(storedCart);
    }, []);

    const handleDelete = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1); // Remove the item at the specified index
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update the localStorage
    };

    return (
        <div className="w-full md:py-20">
            <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <div className="flex flex-col gap-6">
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b pb-4">
                                <div className="flex items-center">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 object-cover mr-4" />
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        <p className="text-gray-600">Size: {item.size}</p>
                                        <p className="text-gray-600">Price: &#8377; {item.price}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
