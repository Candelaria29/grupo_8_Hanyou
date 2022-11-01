const { body } = require("express-validator");
const path = require("path");

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
  .isLength({ max: 6 })
  .withMessage(
    "El campo no debe contener mas de cuatro enteros y dos decimales"
  )
  .bail()
  .isNumeric()
  .withMessage("El campo debe contener un número");

  let image = body("image")
  .custom((value, {req }) => {
  let acceptedExtensions = ['.jpg','.jpeg','.gif','.png'];
  let invalidFiles = [];
  if (!req.files) {
    return true;
  }
  req.files.forEach(file => {
    let fileExtension = path.extname(file.originalname).toLowerCase();
    if(!acceptedExtensions.includes(fileExtension)) {
      invalidFiles.push(file.originalname)
    }
  })
  if (invalidFiles.length > 0) {
    throw new Error('La imagen no es de un formato válido. Debe ser .jpg, .jpeg, .png, o .gif.');
  }
  return true;
  });

let validator = [name, description, price, image];

module.exports = validator;
