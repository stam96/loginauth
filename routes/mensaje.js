const express = require("express");
const { msj, msjeditar } = require("../controller/mensaje");
const router = express.Router();
router.get("/", msj);
router.get("/editar", msjeditar);
module.exports = router;
