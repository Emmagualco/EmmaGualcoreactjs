// src/components/CartWidget.jsx
import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src="/image/cart.jpg" // Ruta desde la carpeta public
        alt="Cart"
        className="cart-icon"
      />
      <span className="badge">3</span> {/* Número hardcodeado */}
    </div>
  );
};

export default CartWidget;



