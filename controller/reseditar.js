const bcrypt = require("bcrypt");
const saltRounds = 10;
const modelRegistro = require("../Schema/registro");
const editarContrasena = async (req, res) => {
  try {
    const { email } = req.params;
    const body = req.body;
    const verificar = await modelRegistro.findOne({ email: email });
    if (!verificar) {
      return res.status(404).json({ mensaje: "Email no valido" });
    }
    if (!body.password) {
      return res.status(404).json({ mensaje: "Clave no ingresada" });
    }

    if (body.password.length <= 6) {
      return res
        .status(404)
        .json({ mensaje: "Ingrese clave minimo 7 caracteres" });
    }

    if (!body.passrepit) {
      return res.status(404).json({ mensaje: "repetir password no ingresada" });
    }
    if (body.password !== body.passrepit) {
      return res.status(404).json({ mensaje: "no coinciden las contraseñas" });
    }
    if (body.password) {
      body.password = bcrypt.hashSync(body.password, saltRounds);
    }
    if (body.passrepit) {
      body.passrepit = bcrypt.hashSync(body.passrepit, saltRounds);
    }
    const data = await modelRegistro.findOneAndUpdate(verificar, body, {
      new: true,
    });
    res
      .status(200)
      .json({ mensaje: "Contraseña editada correctamente", data: data._id });
  } catch (error) {
    res.status(502).json(error);
  }
};
module.exports = { editarContrasena };
