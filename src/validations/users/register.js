const { body } = require("express-validator");

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
  .withMessage("Formato no válido");

let password = body("password")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ min: 8 })
  .withMessage("El campo debe contener al menos ocho caracteres");
let avatar = 0;

let validations = [name, surname, email, password];

module.exports = validations;
