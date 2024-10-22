// src/components/NavBar.jsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { CartContext } from '../CartContext'; // Asegúrate de importar tu contexto
import './NavBar.css';

const NavBar = () => {
  const { itemCount } = useContext(CartContext); // Obtener el número de ítems del carrito

  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">E-Spark Scooters</Link>
      <div className="navbar-links">
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/category/vehiculos">Vehículos</Link>
        <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
        <Link className="nav-link" to="/about">Sobre Nosotros</Link>
        <Link className="nav-link" to="/contact">Contacto</Link>
      </div>
      <CartWidget itemCount={itemCount} /> {/* Pasar la cantidad de ítems al widget del carrito */}
    </nav>
  );
};

export default NavBar;




