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
          <Route path="/category/vehiculos" element={<ItemListContainer greeting="Vehículos" category="vehiculos" />} />
          <Route path="/category/accesorios" element={<ItemListContainer greeting="Accesorios" category="accesorios" />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;




