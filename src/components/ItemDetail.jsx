// src/components/ItemDetail.jsx
import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';
import AddItemButton from './AddItemButton';
import './ItemDetail.css'; // Agrega estilos específicos si es necesario

const ItemDetail = ({ item, onAdd }) => {
  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <img src={item.imageUrl} alt={item.name} />
      <p>Precio: ${item.price}</p>
      <p>{item.description}</p>

      <ItemQuantitySelector />
      <AddItemButton onAdd={onAdd} />
    </div>
  );
};

export default ItemDetail;
