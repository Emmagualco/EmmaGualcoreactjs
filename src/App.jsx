// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a E-Spark Scooters!" category="vehiculos" />} />
          <Route path="/category/vehiculos" element={<ItemListContainer greeting="¡Explora nuestros vehículos!" category="vehiculos" />} />
          <Route path="/category/accesorios" element={<ItemListContainer greeting="¡Descubre nuestros accesorios!" category="accesorios" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/about" element={<div>Sobre Nosotros</div>} />
          <Route path="/contact" element={<div>Contacto</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;






