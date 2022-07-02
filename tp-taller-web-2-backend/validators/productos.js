const { check } = require("express-validator");
const { validateResult } = require('../helpers/validateHelper')

const validateCreate = [
  check("nombre").exists().not().isEmpty(),
  check("imagen").exists().not().isEmpty(),
  check("detalles").exists().not().isEmpty(),
  check("precio").exists().isNumeric(),
  check("cantidadSesiones").default(1),
  check("imagen").exists().not().isEmpty(),
  check("estado").default(false),
  (req, res, next) => {
    validateResult(req, res, next)
  }
]

module.exports = { validateCreate }
