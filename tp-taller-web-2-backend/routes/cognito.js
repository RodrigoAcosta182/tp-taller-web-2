var express = require("express");

var cognitoController = require("../controllers/cognitoController");

var router = express.Router();

router.post(
  "/login-usuario",
  cognitoController.login
);
router.post(
  "/confirmar-usuario",
  cognitoController.confirmarUsuario
);
router.post(
  "/registrar-usuario",
  cognitoController.registrarUsuario
);

module.exports = router;
