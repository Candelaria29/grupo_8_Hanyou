const { body } = require("express-validator");

let name = body("name")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ min: 5 })
  .withMessage("El campo debe contener al menos cinco caracteres");

let description = body("description")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ min: 20 })
  .withMessage("El campo debe contener al menos veinte caracteres");

let price = body("price")
  .notEmpty()
  .withMessage("El campo no puede estar vacío")
  .bail()
  .isLength({ max: 7 })
  .withMessage(
    "El campo no debe contener mas de cuatro enteros y dos decimales"
  )
  .bail()
  .isNumeric()
  .withMessage("El campo debe contener un número");

//ver como funcionan las imagenes en express-validator
let image = 0;

let validator = [name, description, price];

module.exports = validator;
