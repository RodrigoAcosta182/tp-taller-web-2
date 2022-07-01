//llamamos a la libreria que permite publicar y acceder a servicios
const express = require("express");
var bodyParser = require("body-parser");
const cors = require("cors");
const initDB = require('./config/db')


//se crea una nueva instancia de express q será nuestra aplicación
const app = express();

//este es el puerto en el q la api está disponible
const puerto = 3000;

app.use(cors());
app.use(express.json());
//llamamos al archivo productosRoutes


//Le pasa express al archivo de Routes


//express se queda escuchando en el puerto declarado
app.listen(puerto, () => {
  console.log("La aplicacion esta en linea!");
});

// Cargar ficheros rutas

var cognito = require("./routes/cognito");
var producto = require("./routes/productos")

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));

// convierte cualquier petición en un objeto json que sea mas simple de leer

app.use(bodyParser.json());

// Añadir prefijos a las rutas / Cargar rutas
app.use("/api", cognito);
app.use("/api", producto);

// Exportar modulo (fichero actual)
module.exports = app;

initDB()





