import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [newSize, setNewSize] = useState("");
    const [newCount, setNewCount] = useState(1);

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

    const handleEdit = (index) => {
        setEditingIndex(index);
        setNewSize(cart[index].size);
        setNewCount(cart[index].count || 1);
    };

    const handleSave = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].size = newSize;
        updatedCart[index].count = newCount;
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart)); // Update the localStorage
        setEditingIndex(null);
    };

    return (
        <div className="w-full md:py-20">
            <div className="w-full max-w-[1280px] px-5 md:px-10 mx-auto">
                <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
                {cart.length === 0 ? (
                    <p className="text-center text-xl py-6">Your cart is empty</p>
                ) : (
                    <div className="flex flex-col gap-6">
                        {cart.map((item, index) => (
                            <div key={index} className="flex justify-between items-center border-b pb-4">
                                <div className="flex items-center">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover mr-4"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold">{item.name}</h2>
                                        {editingIndex === index ? (
                                            <div>
                                                <div>
                                                    <label className="text-gray-600">Size: </label>
                                                    <input
                                                        type="text"
                                                        value={newSize}
                                                        onChange={(e) => setNewSize(e.target.value)}
                                                        className="border rounded px-2 py-1"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="text-gray-600">Count: </label>
                                                    <input
                                                        type="number"
                                                        value={newCount}
                                                        onChange={(e) => setNewCount(parseInt(e.target.value))}
                                                        min="1"
                                                        className="border rounded px-2 py-1"
                                                    />
                                                </div>
                                                <button
                                                    onClick={() => handleSave(index)}
                                                    className="text-green-500 hover:text-green-700 mt-2"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        ) : (
                                            <div>
                                                <p className="text-gray-600">Size: {item.size}</p>
                                                <p className="text-gray-600">Count: {item.count || 1}</p>
                                                <p className="text-gray-600">Price: &#8377; {item.price}</p>
                                                <button
                                                    onClick={() => handleEdit(index)}
                                                    className="text-blue-500 hover:text-blue-700 mt-2"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        )}
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
