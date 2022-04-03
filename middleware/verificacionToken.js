const jwt = require("jsonwebtoken");
const modelRegistro = require("../Schema/registro");
require("dotenv").config({ path: "variables.env" });
const verificarAuth = (req, res, next) => {
  const token = req.headers["x-access-token"];
  //console.log(token);
  if (!token) {
    return res.status(401).json({ mensaje: "token no recivido" });
  }
  jwt.verify(token, process.env.JWT, async (err, decoded) => {
    if (err) {
      return res.status(400).json({
        mensaje: "Token no valido",
      });
    }
    //creamos una variable para almacenar la informacion del usuario
    req.userId = decoded.id;
    console.log(decoded.id);
    //modelo usuario
    const user = await modelRegistro.findById(req.userId, {
      password: 0,
      passrepit: 0,
    });
    if (!user) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    console.log(user);
    next();
  });
};
module.exports = { verificarAuth };
