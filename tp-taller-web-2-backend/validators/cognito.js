const { check } = require("express-validator");
const { validateResult } = require("../helpers/validateHelper");

const validateLogin = [
  check("email").exists().isEmail,
  check("password").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateRegistrar = [
  check("nombre").exists().not().isEmpty(),
  check("direccion").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

const validateConfirmar = [
  check("ConfirmationCode").exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateLogin ,validateConfirmar ,validateRegistrar}

