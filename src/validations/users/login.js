const { body } = require("express-validator");
const db = require("../../database/models");
const { compareSync } = require("bcrypt");

const Users = db.User;

let email = body("userName")
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
        if (user) {
          return true;
        } else {
          return Promise.reject("Usuario no encontrado");
        }
      })
      .catch((e) => {
        throw new Error(e);
      });
  })
  .withMessage("Usuario no encontrado");

let password = body("password")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ min: 8 })
  .withMessage("El campo debe contener al menos ocho caracteres")
  .bail()
  .custom((value, { req }) => {
    return Users.findOne({
      where: {
        email: req.body.userName,
      },
    })
      .then((user) => {
        if (user) {
          if (compareSync(value, user.password)) {
            return true;
          } else {
            return Promise.reject("Credenciales incorrectas");
          }
        }
      })
      .catch((e) => {
        throw new Error(e);
      });
  })
  .withMessage("Credenciales incorrectas");

let validations = [email, password];

module.exports = validations;
