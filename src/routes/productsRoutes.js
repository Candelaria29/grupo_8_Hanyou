const { Router } = require("express");
const route = Router();
const { index, show } = require("../controllers/productsController");

// READ:
// List:
route.get("/", index);
// Seria un read de algunos, ni todos ni uno sólo, si no los enviados al carrito, pero hay que armarlo:
route.get("/productos/productCart", (req, res) =>
  res.render("products/productCart")
);
// Single:
route.get("/productos/detalle/:sku", show);

//CREATE:
//Envio:
route.get("/createNewProduct", (req, res) =>
  res.render("products/createNewProduct")
);
//Creacion:

//UPDATE:
//Envio:
route.get("/editProduct", (req, res) => res.render("products/editProduct"));
//Edicion:

//DELETE:
//Borrado:

module.exports = route;
