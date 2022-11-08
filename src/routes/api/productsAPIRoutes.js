const { Router } = require("express");
const route = Router();
const { list, detail } = require("../../controllers/api/productsAPIController");

//Listado y recuento de productos
route.get("/api/products", list);

//Detalle de producto
route.get("/api/products/:sku", detail);

module.exports = route;
