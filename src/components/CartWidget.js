import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Utilizamos una librería de iconos como react-icons

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={24} />
      <span className="badge bg-secondary ms-2">3</span> {/* Número hardcodeado */}
    </div>
  );
};

export default CartWidget;
