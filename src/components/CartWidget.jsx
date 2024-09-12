// src/components/CartWidget.jsx
import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img
        src="https://images.app.goo.gl/QTsX6Ap5a2Macg1z5" // URL de la imagen
        alt="Cart"
        className="cart-icon"
      />
      <span className="badge">3</span> {/* Número hardcodeado */}
    </div>
  );
};

export default CartWidget;


