const { path } = require("express/lib/application");
const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
const uri = process.env.DB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  keepAlive: true,
};
const conectDb = () => {
  mongoose
    .connect(uri, options)
    .then((res) => console.log("Conexion exitosa a " + res.connection.name))
    .catch((error) => console.log("Error de conexion" + error));
};
module.exports = conectDb;
