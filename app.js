const express = require("express");
const app = express();
const path = require("path");

const rutaPublic = path.resolve(__dirname, "./public");

app.listen(8000, () => {
  console.log("Servidor funcionando en http://localhost:8000");
});

app.use(express.static(rutaPublic));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => res.render("login"));
app.get("/productCart", (req, res) => res.render("productCart"));
app.get("/productDetail", (req, res) => res.render("productDetail"));
app.get("/register", (req, res) => res.render("register"));
