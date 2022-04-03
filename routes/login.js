const express = require("express");
const { login } = require("../controller/login");
//const { verificarAuth } = require("../middleware/verificacionToken");
const { validacionesLogin } = require("../validator/login");
const router = express.Router();
router.post("/", validacionesLogin, login);
module.exports = router;
