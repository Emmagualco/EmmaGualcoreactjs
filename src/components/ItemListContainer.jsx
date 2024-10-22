/// src/components/ItemListContainer.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Importa Link para navegación
import './ItemListContainer.css';

const ItemListContainer = ({ greeting, category }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    const fetchItems = async () => {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Error al cargar los productos');
        }
        const data = await response.json();
        
        // Filtrar los productos según la categoría seleccionada
        if (category === 'vehiculos') {
          setItems(data.vehiculos || []); // Manejar caso donde no haya 'vehiculos'
        } else if (category === 'accesorios') {
          setItems(data.accesorios || []); // Manejar caso donde no haya 'accesorios'
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, [category]);

  if (loading) {
    return <div>Cargando productos...</div>; // Aquí podrías agregar un spinner o algo más estilizado
  }

  if (error) {
    return <div>{error}</div>; // Mostrar error si hay un problema
  }

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
        {items.length > 0 ? (
          items.map(item => (
            <div key={item.id} className="item-card">
              <Link to={`/item/${item.id}`}> {/* Link a la página de detalle del ítem */}
                <h3>{item.name}</h3>
                <img src={item.imageUrl} alt={item.name} />
              </Link>
              <p>Precio: ${item.price}</p>
              <p>{item.description}</p>
              <button className="btn btn-primary">Agregar al Carrito</button> {/* Implementar lógica para el carrito aquí */}
            </div>
          ))
        ) : (
          <div>No hay productos disponibles en esta categoría.</div> // Mensaje si no hay productos
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
