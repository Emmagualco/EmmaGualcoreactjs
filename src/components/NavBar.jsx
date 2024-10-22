// src/components/NavBar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { CartContext } from './contexts/CartContext';
import './NavBar.css';

const NavBar = () => {
  const { itemCount } = useContext(CartContext); // Obtener el número de ítems del carrito

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">E-Spark Scooters</Link>
      <div className="navbar-links">
        <ul>
          <li><Link className="nav-link" to="/">Inicio</Link></li>
          <li><Link className="nav-link" to="/category/vehiculos">Vehículos</Link></li>
          <li><Link className="nav-link" to="/category/accesorios">Accesorios</Link></li>
          <li><Link className="nav-link" to="/about">Sobre Nosotros</Link></li>
          <li><Link className="nav-link" to="/contact">Contacto</Link></li>
        </ul>
      </div>
      <CartWidget itemCount={itemCount} /> {/* Pasar la cantidad de ítems al widget del carrito */}
    </nav>
  );
};

export default NavBar;





