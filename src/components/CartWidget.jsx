// src/components/CartWidget.jsx
import React from 'react';
import './CartWidget.css';

const CartWidget = ({ itemCount = 0 }) => {  // Usamos props para manejar la cantidad de ítems
  return (
    <div className="cart-widget">
      <img
        src="/image/cart.jpg" // Ruta desde la carpeta public
        alt="Cart"
        className="cart-icon"
      />
      <span className="badge">{itemCount}</span> {/* Número dinámico mediante props */}
    </div>
  );
};

export default CartWidget;




