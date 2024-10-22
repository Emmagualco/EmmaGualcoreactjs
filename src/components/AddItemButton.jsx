// src/components/AddItemButton.jsx
import React from 'react';

const AddItemButton = ({ onAdd }) => {
  const handleClick = () => {
    onAdd(); // Llamar a la función pasada como prop para añadir el ítem
  };

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Añadir al Carrito
    </button>
  );
};

export default AddItemButton;
