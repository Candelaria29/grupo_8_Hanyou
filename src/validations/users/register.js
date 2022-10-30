const { body } = require("express-validator");
const db = require("../../database/models");

const Users = db.User;

let name = body("nombre")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ min: 2 })
  .withMessage("El campo debe contener al menos dos caracteres");

let surname = body("apellido")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ min: 2 })
  .withMessage("El campo debe contener al menos dos caracteres");

let email = body("email")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isEmail()
  .withMessage("Formato no válido")
  .bail()
  .custom((value, { req }) => {
    return Users.findOne({
      where: {
        email: value,
      },
    })
      .then((user) => {
        if (!user) {
          return true;
        } else {
          return Promise.reject("Ese email corresponde a una cuenta en uso");
        }
      })
      .catch((e) => {
        throw new Error(e);
      });
  })
  .withMessage("Ese email corresponde a una cuenta en uso");

let password = body("password")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ min: 8 })
  .withMessage("El campo debe contener al menos ocho caracteres")
  .bail()
  .isStrongPassword()
  .withMessage(
    "La contraseña debe contener al menos, una mayúscula, una minúscula, un dígito y un caracter especial"
  );

let passwordConf = body("passwordConf").custom((value, { req }) => {
  if (value !== req.body.password) {
    throw new Error("La contraseña no coincide con la antes ingresada");
  }
  return true;
});

let avatar = 0;

let validations = [name, surname, email, password, passwordConf];

module.exports = validations;
