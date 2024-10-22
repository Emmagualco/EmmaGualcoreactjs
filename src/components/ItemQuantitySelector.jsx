// src/components/ItemQuantitySelector.jsx
import React, { useState } from 'react';
import './ItemQuantitySelector.css';

const ItemQuantitySelector = ({ initialQuantity = 1, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const increment = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    onQuantityChange(quantity + 1); // Llama a la función de callback con la nueva cantidad
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      onQuantityChange(quantity - 1); // Llama a la función de callback con la nueva cantidad
    }
  };

  return (
    <div className="item-quantity-selector">
      <button onClick={decrement} className="quantity-button">-</button>
      <span className="quantity-display">{quantity}</span>
      <button onClick={increment} className="quantity-button">+</button>
    </div>
  );
};

export default ItemQuantitySelector;
