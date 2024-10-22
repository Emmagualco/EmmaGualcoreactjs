// src/utils/products.js

const products = [
  { id: '1', name: 'E-Spark Cruiser', category: 'vehiculos', price: 599, description: 'Scooter eléctrico de gran autonomía' },
  { id: '2', name: 'E-Spark Sport', category: 'vehiculos', price: 699, description: 'Scooter deportivo con alta velocidad' },
  { id: '3', name: 'Kit de Accesorios', category: 'accesorios', price: 49, description: 'Accesorios para scooters' },
];

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const filteredProducts = products.filter(product => product.category === categoryId);
      if (filteredProducts.length > 0) {
        resolve(filteredProducts);
      } else {
        reject(new Error('No se encontraron productos para esta categoría'));
      }
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(product => product.id === id);
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Producto no encontrado'));
      }
    }, 1000);
  });
};

