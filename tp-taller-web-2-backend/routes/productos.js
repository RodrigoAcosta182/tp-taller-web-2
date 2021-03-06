var express = require('express');

var productoController = require('../controllers/productoController');
const {validateCreate} = require('../validators/productos')
var router = express.Router();

router.get('/obtener-productos', productoController.getAllProductos);
router.post('/agregar-producto', validateCreate , productoController.agregarProducto);
router.post('/finalizar-compra-producto', productoController.confirmarCompra);
module.exports= router;