const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const modelRegistro = require("../Schema/registro");
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { email, password } = req.body;
    const data = await modelRegistro.findOne({ email });
    //console.log(data);
    if (!data)
      return res.json({ mensaje: "Usuario no encontrado email no valido" });
    if (!data.cuentaConfirmada)
      return res.json({ mensaje: "Cuenta no confirmada" });
    if (data.confirmacionToken !== null)
      return res.json({ mensaje: "Cuenta no verificada" });
    if (!(await data.validarPass(password)))
      return res.json({ mensaje: "Constraseña no coinciden" });
    const token = jwt.sign({ id: data._id }, process.env.JWT, {
      expiresIn: "12h",
    });
    //console.log(token);
    res.status(200).json({ mensaje: "Accediendo", token, id: data._id });
  } catch (error) {
    res.status(502).json({ mensaje: "Usuario no valido" });
  }
};
module.exports = { login };
