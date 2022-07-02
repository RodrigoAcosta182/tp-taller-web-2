var express = require("express");

var cognitoController = require("../controllers/cognitoController");
const { validateLogin } = require("../validators/cognito");
const { validateConfirmar } = require("../validators/cognito");
const { validateRegistrar } = require("../validators/cognito");
var router = express.Router();

router.post(
    "/login-usuario", 
     validateLogin, 
    cognitoController.login);
router.post(
  "/confirmar-usuario",
   validateConfirmar,
  cognitoController.confirmarUsuario
);
router.post(
  "/registrar-usuario",
   validateRegistrar,
  cognitoController.registrarUsuario
);

module.exports = router;
