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
//ver si se puede agregar validacion para que el mail no este repetido, ya que de momento la unica validacion esta hecha en SQL, lo que genera que se rompa la app en caso de no pasarla

let password = body("password")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ min: 8 })
  .withMessage("El campo debe contener al menos ocho caracteres");
//agregar validacion de una mayuscula, una minuscula, un caracter especial y un numero. Ver Regex

//agregar validacion de contraseña de confirmacion

let avatar = 0;

let validations = [name, surname, email, password];

module.exports = validations;
