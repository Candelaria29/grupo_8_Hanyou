const { body } = require("express-validator");

let email = body("userName")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isEmail()
  .withMessage("Formato no válido");

let password = body("password")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ min: 8 })
  .withMessage("El campo debe contener al menos ocho caracteres");

let validations = [email, password];

module.exports = validations;
