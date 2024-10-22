// src/components/ItemList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './ItemList.css'; // Asegúrate de tener estilos para este componente

const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {items.map(item => (
        <div key={item.id} className="item-card">
          <Link to={`/item/${item.id}`}> {/* Enlaza al detalle del ítem */}
            <h3>{item.name}</h3>
            <img src={item.imageUrl} alt={item.name} />
          </Link>
          <p>Precio: ${item.price}</p>
          <p>{item.description}</p>
          <button className="btn btn-primary">Agregar al Carrito</button> {/* Implementa la lógica para agregar al carrito */}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
