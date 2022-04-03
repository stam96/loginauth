const { body } = require("express-validator");

const validacionRestablecer = [
  body("email", "Debe ser un email valido")
    .trim()
    .exists()
    .isEmail()
    .normalizeEmail()
    .escape(),
];

module.exports = { validacionRestablecer };
