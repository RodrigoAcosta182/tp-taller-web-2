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
  getProductoById: (req, res) => {
    console.log("byId");
  },
  agregarProducto: (req, res) => {
    const data = req.body;
    const producto = new model(data);
  
    producto.save((err, doc) => {
      if (!err) {
        console.log("success", "User added successfully!");
      } else {
        console.log("Error during record insertion : " + err);
      }
    });
  },
};

module.exports = controller;

// exports.getData = (req, res) => {
//   res.send({ data: "esto viene desde productos " });
// };

// exports.getData = (req, res) => {
//   model.find({}, (err, docs) => {
//     res.send({
//       docs,
//     });
//   });
// };
// //5.38
