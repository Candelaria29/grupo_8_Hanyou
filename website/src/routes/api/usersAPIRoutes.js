const { Router } = require("express");
const route = Router();
const { list, detail } = require("../../controllers/api/usersAPIController");

//Listado y recuento de usuarios
route.get("/api/users", list);

//Detalle de usuario
route.get("/api/users/:id", detail);

module.exports = route;
