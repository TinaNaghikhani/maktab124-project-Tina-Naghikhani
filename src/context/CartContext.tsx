'use client';
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});

    return (
        <CartContext.Provider value={{ products, setProducts, quantities, setQuantities }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
