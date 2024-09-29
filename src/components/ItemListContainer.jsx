// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Cargar datos de los vehículos y accesorios
    fetch('/data.json') // Asegúrate de que este archivo esté en la carpeta public
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error al cargar los datos:', error));
  }, []);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="item-list">
        {items.length > 0 ? (
          items.map(item => (
            <div key={item.id} className="item-card">
              <h3>{item.name}</h3>
              <img src={item.imageUrl} alt={item.name} />
              <p>Precio: ${item.price}</p>
              <p>{item.description}</p>
              <button className="btn btn-primary">Agregar al Carrito</button>
            </div>
          ))
        ) : (
          <p>Cargando productos...</p> // Mensaje mientras se cargan los productos
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;


