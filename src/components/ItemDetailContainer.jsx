// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'; // Si tienes estilos específicos

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtener el id del producto de la URL
  const [item, setItem] = useState(null); // Estado para almacenar el detalle del producto
  const [loading, setLoading] = useState(true); // Estado de carga

  useEffect(() => {
    // Simular la obtención de datos de un producto por ID
    const fetchItem = async () => {
      // Aquí puedes reemplazarlo con tu lógica para obtener datos
      const response = await fetch(`path/to/your/api/items/${id}`); // Cambia esta URL según tu API
      const data = await response.json();
      setItem(data);
      setLoading(false);
    };

    fetchItem();
  }, [id]);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si no se encuentra el producto, puedes mostrar un mensaje
  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="item-detail-container">
    <h1>{item.name}</h1>
    <img src="/image/Espark.jpg" alt={item.name} /> {/* Ruta corregida a la imagen */}
    <p>Precio: ${item.price}</p>
    <p>{item.description}</p>
    <button className="btn btn-primary">Agregar al Carrito</button>
  </div>
  
  );
};

export default ItemDetailContainer;

