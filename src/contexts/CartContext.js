// src/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]); // Estado para los ítems del carrito

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      // Si el ítem ya está en el carrito, aumentar la cantidad
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...existingItem, quantity: existingItem.quantity + 1 }
          : cartItem
      ));
    } else {
      // Agregar el nuevo ítem al carrito
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calcular el total

  return (
    <CartContext.Provider value={{ cartItems, addToCart, totalAmount }}>
      {children}
    </CartContext.Provider>
  );
};
