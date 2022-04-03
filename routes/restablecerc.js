const express = require("express");

const { validacionRestablecer } = require("../validator/restablecer");
const {
  restablecerContrasena,
  restablecerlink,
} = require("../controller/restablecerc");

const router = express.Router();
router.get("/", restablecerContrasena);
router.get("/:email", validacionRestablecer, restablecerContrasena);
router.get("/verificar/:token", restablecerlink);
module.exports = router;
