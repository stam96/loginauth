const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const database = require("./config/databaseMongo");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const noEncontrado = require("./middleware/error");
//const router = require("./routes/registro");
const app = express();
//Inicializar Db
database();

//Variables de entorno
require("dotenv").config({ path: ".env" });

//habilitar middlewares
app.use(cors());
app.use(morgan("tiny"));

//habilitar json para visualizar JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para Vue.js router modo history
const history = require("connect-history-api-fallback");
app.use(history());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//rutas
app.use("/api", require("./routes"));
app.use(noEncontrado);

//Conexion
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 5000;

//Escuchar puerto
app.listen(port, host, () => {
  console.log(`escuchando desde el puerto ${port}`);
});
