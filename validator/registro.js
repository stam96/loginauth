const { body } = require("express-validator");
const modelRegistro = require("../Schema/registro");
const validaciones = [
  body("username", "Ingresar campo nombre").not().trim().isEmpty().escape(),
  body("email")
    .trim()
    .exists()
    .isEmail()
    .normalizeEmail()
    .withMessage("Email debe ser valido")
    .custom(async (email) => {
      const verificar = await modelRegistro.findOne({ email });
      if (verificar) {
        throw new Error("Email existente");
      }
      return verificar;
    })
    .escape(),
  body("password", "Ingresar campo contraseña")
    .not()
    .trim()
    .isEmpty()
    .isLength({
      min: 7,
    })
    .withMessage("Ingresar contraseña minimo 7 caracteres")
    .custom((value, { req }) => {
      if (value !== req.body.passrepit) {
        throw new Error("No coinciden las contraseñas");
      }
      return value;
    })
    .escape(),
];

module.exports = { validaciones };
