const { v4: uuidv4 } = require('uuid');

let productos = [];

  const getAll = () => {
    return this.productos;
  };

  const save = (data) => {
    const nuevoProducto = {
      id: uuidv4(),
      nombre: data.nombre,
      precio: data.precio,
    };
    this.productos.push(nuevoProducto);
  }

module.exports = {
  getAll,
  save,
}