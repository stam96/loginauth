const { nanoid } = require("nanoid");

const emailer = require("../libs/restablecerEmail");

const modelRegistro = require("../Schema/registro");

const restablecerContrasena = async (req, res) => {
  try {
    const { email } = req.params;
    if (!email) {
      return res.status(404).json({ mensaje: "Deber ser un correo valido" });
    }
    const data = await modelRegistro.findOne({ email: email });
    if (!data) {
      return res.status(404).json({ mensaje: "No existente" });
    }
    ///generar id
    data.confirmacionToken = nanoid();
    await data.save();
    emailer.sendMail(data);
    console.log(data);
    return res.status(200).json({
      mensaje:
        "Enviado a bandeja de correo, verificar antes de reestablecer constraseña",
    });
  } catch (error) {
    res.status(502).json(error);
  }
};

const restablecerlink = async (req, res) => {
  try {
    const { token } = req.params;
    const restablecer = await modelRegistro.findOne({
      confirmacionToken: token,
    });
    console.log(restablecer);
    if (!restablecer)
      return res
        .status(404)
        .json({ mensaje: "Codigo de verificacion no coinciden" });
    restablecer.confirmacionToken = null;
    restablecer.cuentaConfirmada = true;
    console.log(restablecer);
    await restablecer.save();
    res.status(200).json({
      mensaje: "Cuenta verificada seguir los pasos para restablecer contraseña",
    });
    //return res.redirect("/api/mensaje/editar");
    //res.json({ mensaje: "Actulizar su clave" });
  } catch (error) {
    res.status(502).json(error);
  }
};

module.exports = { restablecerContrasena, restablecerlink };
