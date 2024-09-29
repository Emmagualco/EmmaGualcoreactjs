// src/components/ItemListContainer.jsx
import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {/* lista de productos en el futuro */}
    </div>
  );
};

export default ItemListContainer;

