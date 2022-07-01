const mongoose = require("mongoose");

const productosSchema = new mongoose.Schema(
  {
    nombre: String,
    imagen: String,
    detalles: String,
    precio: Number,
    cantidadSesiones: Number,
    estado: Boolean,
  },
  {
    versionKey: false,
    timeStamps: true,
  }
);

module.exports = mongoose.model("productos", productosSchema);

// {
//   nombre: {
//     type: String,
//   },
//   imagen: {
//     type: String,
//     default: "http://image.com",
//   },
//   detalles: {
//     type: String,
//   },
//   precio: {
//     type: Number,
//   },
//   cantidadSesiones: {
//     type: Number,
//   },
//   estado: {
//     type: Boolean,
//   },
// },
