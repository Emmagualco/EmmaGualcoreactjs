// src/components/Checkout.jsx
import React, { useContext } from 'react';
import { CartContext } from "./contexts/CartContext";


const Checkout = () => {
  const { cartItems, totalAmount } = useContext(CartContext); // Obtener datos del contexto

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar la compra
    alert('Compra procesada con éxito.');
  };

  return (
    <div className="checkout-container">
      <h2>Resumen de Compra</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price} x {item.quantity}
              </li>
            ))}
          </ul>
          <h3>Total: ${totalAmount}</h3>
          <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-success">Confirmar Compra</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
