const express = require('express');
const productosController = require('../controller/productos');

const router = express.Router();

router.post('/guardar', (req, res) => {
  const body = req.body;

  const nuevoProducto = {
    nombre: body.nombre,
    precio: body.precio,
  };

  productosController.save(nuevoProducto);

  res.redirect('/')
});

module.exports = router