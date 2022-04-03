const mongoose = require("mongoose");
const schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const roles = {
  values: ["ADMIN", "USER"],
  message: "{VALUE} no es un rol válido",
};
const registroSchema = new schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    passrepit: {
      type: String,
    },
    confirmacionToken: {
      type: String,
      default: null,
    },
    cuentaConfirmada: {
      type: Boolean,
      default: false,
    },
    rol: {
      type: String,
      enum: roles,
      default: "USER",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Cifrar contraseñas
registroSchema.pre("save", async function (next) {
  const registro = this;
  if (!registro.isModified("password", "passrepit")) return next();
  try {
    const salt = await bcrypt.genSalt(10);
    const hash1 = await bcrypt.hash(registro.password, salt);
    const hash2 = await bcrypt.hash(registro.passrepit, salt);
    registro.password = hash1;
    registro.passrepit = hash2;
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

//Comparar contraseñas
registroSchema.methods.validarPass = async function (compararContraseña) {
  return await bcrypt.compare(compararContraseña, this.password);
};

//Ocultar contraseña
registroSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  delete obj.passrepit;
  return obj;
};

const modelRegistro = mongoose.model("Registros", registroSchema);
module.exports = modelRegistro;
