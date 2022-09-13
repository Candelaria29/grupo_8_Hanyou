const { Router } = require("express");
const route = Router();
const {
  home,
  index,
  show,
  create,
  save,
  edit,
  update,
  destroy,
} = require("../controllers/productsController");
const { resolve, extname } = require("path");
const { existsSync, mkdirSync } = require("fs");
const path = require("path");
const isLogged = require("../middlewares/isLogged");
const isAdmin = require("../middlewares/isAdmin");

const destination = function (req, file, cb) {
  let folder = resolve(__dirname, "..", "..", "public", "img", "products");
  if (!existsSync(folder)) {
    mkdirSync(folder);
  }
  return cb(null, folder);
};

const filename = function (req, file, cb) {
  let unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
  let name = file.fieldname + "-" + unique + extname(file.originalname);
  return cb(null, name);
};

const multer = require("multer");
const { diskStorage } = require("multer");

const upload = multer({
  storage: multer.diskStorage({ destination, filename }),
});

route.get("/", home);
// READ:
// List de productos:
route.get("/productos", index);

//El de abajo, seria un read de algunos, ni todos ni uno sólo, si no los enviados al carrito.
//Seria muy similar al one del model, pero en lugar de usar un find, se podria usar un filter.
// Por otro lado, podriamos agregarle al json un campo con valor boolean
// para identificar a los productos agregados al carrito:

//vista carrito
route.get("/productos/productCart", [isAdmin], (req, res) =>
  res.render("products/productCart")
);

// Single - mostrar detalle de producto:
route.get("/productos/detalle/:sku", show);

//CREATE:
//Envio:
route.get("/productos/crear", [isLogged], create);
//Creacion:
route.post("/productos/guardar", upload.any(), save);

//UPDATE:
//Envio:
route.get("/productos/editar/:sku", [isLogged], edit);
//Edicion:
route.put("/productos/actualizar", upload.any(), update);

//DELETE:
//Borrado:
route.delete("/productos/eliminar", [isLogged], destroy);
module.exports = route;
