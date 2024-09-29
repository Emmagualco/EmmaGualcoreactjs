const products = [
  { id: '1', name: 'E-Spark Cruiser', category: 'vehiculos', price: 599, description: 'Scooter eléctrico de gran autonomía' },
  { id: '2', name: 'E-Spark Sport', category: 'vehiculos', price: 699, description: 'Scooter deportivo con alta velocidad' },
  { id: '3', name: 'Accesorios', category: 'accesorios', price: 49, description: 'Accesorios para scooters' },
];

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter(product => product.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(product => product.id === id));
    }, 1000);
  });
};
