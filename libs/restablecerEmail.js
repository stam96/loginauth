const nodemailerSendgrid = require("nodemailer-sendgrid");
require("dotenv").config({ path: ".env" });
const nodemailer = require("nodemailer");
//const htmlIndex = require("../email/view");
/*const createTransport = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.APIUSERMAIL,
      pass: process.env.APIUSERPASS,
    },
  });
  return transport;
};*/

//SendGrid
const createTransport = () => {
  const transport = nodemailer.createTransport(
    nodemailerSendgrid({
      apiKey: process.env.APISEND,
    })
  );
  return transport;
};

//Send Mail
const sendMail = async (user) => {
  const transporter = createTransport();
  const info = await transporter.sendMail({
    from: "svalarezo62@gmail.com", // sender address
    to: [`${user.email}`, "svalarezo62@gmail.com"], // list of receivers
    subject: `${user.username}`, // Subject line
    text: "Restablecer contraseña", // plain text body
    html: `
    <h2>Ingreso de codigo para verificar cuenta y restablecer contraseña </h2>
    <h2>${user.confirmacionToken}</h2>`,
  });
  console.log("Mensaje enviado");
  return;
};

exports.sendMail = (user) => sendMail(user);
