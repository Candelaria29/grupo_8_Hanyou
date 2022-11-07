const { Router } = require("express");
const route = Router();
const { list, detail } = require("../../controllers/api/productsAPIController");

//Listado y recuento de productos
// route.get("/api/users", list);

//Detalle de producto
// route.get("/api/users/:id", detail);

module.exports = route;
