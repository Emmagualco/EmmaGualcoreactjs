// src/components/CartWidget.jsx
import React from 'react';
import './CartWidget.css';

const CartWidget = ({ itemCount = 0 }) => { // Usamos props para manejar la cantidad de ítems
  return (
    <div className="cart-widget">
      <img
        src="/image/cart.jpg" // Ruta desde la carpeta public
        alt="Cart"
        className="cart-icon"
      />
      <span className="badge">{itemCount > 0 ? itemCount : 0}</span> {/* Muestra 0 si no hay ítems */}
    </div>
  );
};

export default CartWidget; // Exportar el componente para usarlo en otras partes de la aplicación





