const { Router } = require("express");
const route = Router();
const {
  index,
  show,
  create,
  save,
  edit,
  update,
} = require("../controllers/productsController");

// READ:
// List:
route.get("/", index);
//El de abajo, seria un read de algunos, ni todos ni uno sólo, si no los enviados al carrito.
//Seria muy similar al one del model, pero en lugar de usar
//un find, se podria usar un filter. Por otro lado, podriamos agregarle al json un
//campo con valor boolean para identificar a los productos agregados al carrito:
route.get("/productos/productCart", (req, res) =>
  res.render("products/productCart")
);
// Single:
route.get("/productos/detalle/:sku", show);

//CREATE:
//Envio:
route.get("/productos/crear", create);
//Creacion:
route.post("/productos/guardar", save);

//UPDATE:
//Envio:
route.get("/productos/editar/:sku", edit);
//Edicion:
route.put("/productos/actualizar", update);
//DELETE:
//Borrado:

module.exports = route;
