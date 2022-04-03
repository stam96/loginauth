const { validationResult } = require("express-validator");
const modelRegistro = require("../Schema/registro");
const { nanoid } = require("nanoid");
const emailer = require("../libs/registroemail");
const jwt = require("jsonwebtoken");
//Variables de entorno
require("dotenv").config({ path: ".env" });
//Registrar
const registrarse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { username, email, password, passrepit, rol = "USER" } = req.body;
    const data = new modelRegistro({
      username,
      email,
      password,
      passrepit,
      //generas clave de acceso
      confirmacionToken: nanoid(),
      rol,
    });
    await data.save();
    //email
    emailer.sendMail(data);
    //Token
    //const token = jwt.sign({ data: data }, process.env.JWT, {
    const token = jwt.sign({ id: data._id }, process.env.JWT, {
      expiresIn: "10min",
    });
    //console.log(token);
    //mostramos token
    res.status(200).json({
      token,
      mensaje:
        "Usuario creado correctamente revisar bandeja de correo para verificar cuenta",
    });
  } catch (error) {
    res.status(502).json(error);
  }
};

const verificarCuenta = async (req, res) => {
  const { token } = req.params;
  try {
    //verificar token en el modelo si existe o no
    const data = await modelRegistro.findOne({ confirmacionToken: token });
    //console.log(data);
    if (!data) return res.json({ mensaje: "Cuenta no existente o verificada" });
    data.confirmacionToken = null;
    data.cuentaConfirmada = true;
    await data.save();
    //res.render("notificacion");
    //return res.redirect("/api/mensaje");
    //res.json({ mensaje: "cuenta verificada correctamente" });
    res.status(200).json({ mensaje: "Cuenta verificada correctamente" });
  } catch (error) {
    res.status(502).json({ error: error.message });
  }
};

module.exports = { registrarse, verificarCuenta };
