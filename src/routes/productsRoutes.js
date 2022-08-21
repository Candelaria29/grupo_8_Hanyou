const { Router } = require("express");
const route = Router();
const { index, show } = require("../controllers/productsController");

// Este index hace referencia al productCart y no al index/home de la web
route.get("/productos/productCart", index);
route.get("/productos/detalle/:sku", show);
route.get("/createNewProduct", (req, res) =>
  res.render("products/createNewProduct")
);
route.get("/editProduct", (req, res) => res.render("products/editProduct"));

module.exports = route;
