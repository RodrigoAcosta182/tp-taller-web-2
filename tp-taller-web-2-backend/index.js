const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const initDB = require("./config/db");
var cognito = require("./routes/cognito");
var producto = require("./routes/productos");

const app = express();
const puerto = 3000;

app.use(cors());
app.use(express.json());

app.listen(puerto, () => {
  console.log("La aplicacion esta en linea!");
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use("/api", cognito);
app.use("/api", producto);

module.exports = app;

initDB();
