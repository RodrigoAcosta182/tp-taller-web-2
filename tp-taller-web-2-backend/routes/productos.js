var express = require('express');

var productoController = require('../controllers/productoController');

var router = express.Router();

router.get('/obtener-productos', productoController.getAllProductos);
router.post('/agregar-producto' , productoController.agregarProducto);
module.exports= router;