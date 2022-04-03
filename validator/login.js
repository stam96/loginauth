const { body, check } = require("express-validator");
//const modelRegistro = require("../Schema/registro");
const validacionesLogin = [
  body("email")
    .trim()
    .exists()
    .isEmail()
    .normalizeEmail()
    .withMessage("Email debe ser valido")
    .escape(),
  body("password", "Ingresar contraseña")
    .not()
    .trim()
    .isEmpty()
    .isLength({
      min: 7,
    })
    .withMessage("Ingresar contraseña minimo 7 caracteres"),
];

module.exports = { validacionesLogin };
