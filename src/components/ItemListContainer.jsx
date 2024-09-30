// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting, category }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        if (category === 'vehiculos') {
          setItems(data.vehiculos);
        } else if (category === 'accesorios') {
          setItems(data.accesorios);
        }
      });
  }, [category]);

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <p>
        Bienvenido a E-Spark Scooters, tu tienda de confianza para scooters eléctricos y accesorios de alta calidad. Explora nuestras categorías a continuación:
      </p>
      <div className="category-info">
        <h3>Categorías Disponibles:</h3>
        <ul>
          <li>
            <strong>Vehículos:</strong> Descubre nuestra amplia gama de scooters eléctricos, diseñados para ofrecerte movilidad, estilo y sostenibilidad.
          </li>
          <li>
            <strong>Accesorios:</strong> Mejora tu experiencia de conducción con nuestros accesorios esenciales, desde cascos de seguridad hasta kits de batería.
          </li>
        </ul>
      </div>

      <div className="item-list">
        {items.map(item => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <img src={item.imageUrl} alt={item.name} />
            <p>Precio: ${item.price}</p>
            <p>{item.description}</p>
            <button className="btn btn-primary">Agregar al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;



