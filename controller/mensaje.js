const res = require("express/lib/response");

const msj = (req, res) => {
  res.render("notificacion");
};

const msjeditar = (req, res) => {
  res.render("recuperarnotif");
};
module.exports = { msj, msjeditar };
