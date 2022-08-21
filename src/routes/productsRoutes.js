const { Router } = require("express");
const route = Router();
const { index, show } = require("../controllers/productsController");

route.get("/", index);
route.get("/productos/productCart", (req, res) =>
  res.render("products/productCart")
);
route.get("/productos/detalle/:sku", show);
route.get("/createNewProduct", (req, res) =>
  res.render("products/createNewProduct")
);
route.get("/editProduct", (req, res) => res.render("products/editProduct"));

module.exports = route;
