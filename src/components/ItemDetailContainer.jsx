// src/components/ItemDetailContainer.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css'; // Si tienes estilos específicos

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtener el id del producto de la URL
  const [item, setItem] = useState(null); // Estado para almacenar el detalle del producto
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Simular la obtención de datos de un producto por ID
    const fetchItem = async () => {
      try {
        const response = await fetch(`path/to/your/api/items/${id}`); // Cambia esta URL según tu API
        if (!response.ok) {
          throw new Error('Error al obtener el producto');
        }
        const data = await response.json();
        setItem(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  // Mostrar un mensaje de carga mientras se obtienen los datos
  if (loading) {
    return <div>Cargando...</div>; // Aquí podrías agregar un spinner o algo más estilizado
  }

  // Si hay un error, mostrarlo
  if (error) {
    return <div>{error}</div>;
  }

  // Si no se encuentra el producto, puedes mostrar un mensaje
  if (!item) {
    return <div>Producto no encontrado</div>;
  }

  // Función para manejar la acción de agregar al carrito
  const handleAddToCart = () => {
    // Lógica para agregar el producto al carrito
    console.log(`Agregando ${item.name} al carrito`);
    // Aquí puedes agregar la lógica para actualizar el estado del carrito en tu contexto
  };

  return (
    <div className="item-detail-container">
      <h1>{item.name}</h1>
      <img src={`/image/${item.image}`} alt={item.name} /> {/* Ruta dinámica a la imagen */}
      <p>Precio: ${item.price}</p>
      <p>{item.description}</p>
      <button className="btn btn-primary" onClick={handleAddToCart}>Agregar al Carrito</button>
    </div>
  );
};

export default ItemDetailContainer;


