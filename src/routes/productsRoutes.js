const { Router } = require("express");
const route = Router();

route.get("/productCart", (req, res) => res.render("products/productCart"));
route.get("/productDetail", (req, res) => res.render("products/productDetail"));
route.get("/createNewProduct", (req, res) =>
  res.render("products/createNewProduct")
);
route.get("/editProduct", (req, res) => res.render("products/editProduct"));

module.exports = route;
