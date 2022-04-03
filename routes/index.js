const express = require("express");
const fs = require("fs");
const router = express.Router();
const PATH_ROUTES = __dirname; //Direccion

const removerExtension = (fileName) => {
  //separa por punto y shitf para el obtener solo el nombre del archivo
  return fileName.split(".").shift();
};
//devuelve array de archivos dentro de ruta
fs.readdirSync(PATH_ROUTES).filter((file) => {
  const nombre = removerExtension(file);
  //console.log(nombre);
  if (nombre !== "index") {
    //console.log(nombre);
    router.use(`/${nombre}`, require(`./${file}`));
  }
});

//Export router
module.exports = router;
