// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';  // Importa Link de react-router-dom
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar-brand" to="/">E-Spark Scooters</Link>
      <div className="navbar-links">
        <Link className="nav-link" to="/">Inicio</Link>
        <Link className="nav-link" to="/category/vehiculos">Vehículos</Link>
        <Link className="nav-link" to="/category/accesorios">Accesorios</Link>
        <Link className="nav-link" to="/contact">Contacto</Link>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
