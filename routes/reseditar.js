const express = require("express");
const { editarContrasena } = require("../controller/reseditar");
const router = express.Router();
router.put("/:email", editarContrasena);
module.exports = router;
