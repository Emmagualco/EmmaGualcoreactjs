// src/components/ItemListContainer.jsx
import React from 'react';
import './ItemListContainer.css';

// Datos de ejemplo
const vehicles = [
  {
    id: 1,
    name: 'Scooter Eléctrico A',
    imageUrl: '/image/scooterA.jpg', // Asegúrate de que la ruta sea correcta
    price: 1200,
    description: 'Scooter eléctrico eficiente y moderno.'
  },
  {
    id: 2,
    name: 'Scooter Eléctrico B',
    imageUrl: '/image/scooterB.jpg',
    price: 1500,
    description: 'Scooter eléctrico con mayor autonomía.'
  },
];

const accessories = [
  {
    id: 1,
    name: 'Casco de Seguridad',
    imageUrl: '/image/casco.jpg',
    price: 50,
    description: 'Casco de seguridad certificado.'
  },
  {
    id: 2,
    name: 'Guantes de Protección',
    imageUrl: '/image/guantes.jpg',
    price: 30,
    description: 'Guantes cómodos y duraderos.'
  },
];

const ItemListContainer = ({ greeting, section }) => {
  // Determinar qué datos mostrar según la sección
  const itemsToShow = section === 'vehicles' ? vehicles : accessories;

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <div className="category-info">
        {section === 'vehicles' && (
          <>
            <h3>Vehículos</h3>
            <p>Explora nuestra variedad de scooters eléctricos diseñados para un transporte eficiente y sostenible.</p>
          </>
        )}
        {section === 'accessories' && (
          <>
            <h3>Accesorios</h3>
            <p>Encuentra todos los accesorios necesarios para mejorar tu experiencia con los scooters.</p>
          </>
        )}
      </div>
      <div className="item-list">
        {itemsToShow.map(item => (
          <div className="item-card" key={item.id}>
            <h4>{item.name}</h4>
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



