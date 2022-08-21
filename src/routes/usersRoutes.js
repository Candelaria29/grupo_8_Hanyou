const { Router } = require("express");
const route = Router();

route.get("/register", (req, res) => res.render("users/register"));
route.get("/login", (req, res) => res.render("users/login"));

module.exports = route;
