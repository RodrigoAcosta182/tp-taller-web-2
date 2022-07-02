const model = require("../models/productos");
var controller = {
  getAllProductos: (req, res) => {
    model.find({}, (err, productos) => {
      if (err) {
        return res.json({
          status: 400,
          mensaje: "error al obtener datos",
          err,
        });
      } else {
        res.send({
          productos,
        });
      }
    });
  },
  agregarProducto: (req, res) => {
    const data = req.body;
    const producto = new model(data);
    producto.save((err, doc) => {
      if (!err) {
        res.status(200).jsonp("Producto agregado correctamente");
      } else {
        res.json({
          status: 400,
          mensaje: "error guardando producto",
          err,
        });
      }
    });
  },
  confirmarCompra: (req, res) => {
    console.log("la compra se realizo con exito:" + JSON.stringify(req.body));
    res.status(200).jsonp("Compra realizada correctamente");
  },
};

module.exports = controller;
