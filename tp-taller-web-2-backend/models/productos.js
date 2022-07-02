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
