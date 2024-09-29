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
      <NavBar />
      <Routes>
        {/* Ruta para el catálogo */}
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a E-Spark Scooters!" />} />

        {/* Ruta para filtrar por categorías */}
        <Route path="/category/:id" element={<ItemListContainer />} />

        {/* Ruta para los detalles de un producto */}
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
};

export default App;



