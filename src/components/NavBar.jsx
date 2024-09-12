// src/components/NavBar.jsx
import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="#">E-Spark Scooters</a>
      <div className="navbar-links">
        <a className="nav-link" href="#">Inicio</a>
        <a className="nav-link" href="#">Servicios</a>
        <a className="nav-link" href="#">Sobre Nosotros</a>
        <a className="nav-link" href="#">Contacto</a>
      </div>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
