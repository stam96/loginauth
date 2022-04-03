const express = require("express");
const {
  registrarse,
  verificarCuenta,
  revisar,
  //editar,
} = require("../controller/registro");
const { validaciones } = require("../validator/registro");
const router = express.Router();
router.post("/", validaciones, registrarse);
router.get("/verificar/:token", verificarCuenta);
module.exports = router;
