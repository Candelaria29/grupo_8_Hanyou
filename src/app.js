const express = require("express");
const app = express();
const path = require("path");

const rutaPublic = path.resolve(__dirname, "../public");

app.listen(8000, () => {
  console.log("Servidor funcionando en http://localhost:8000");
});

app.use(express.static(rutaPublic));

app.set("view engine", "ejs");

app.set("views", path.resolve(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("users/index");
});
app.get("/login", (req, res) => res.render("users/login"));
app.get("/productCart", (req, res) => res.render("products/productCart"));
app.get("/productDetail", (req, res) => res.render("products/productDetail"));
app.get("/register", (req, res) => res.render("users/register"));
app.get("/createNewProduct", (req, res) =>
  res.render("products/createNewProduct")
);
app.get("/editProduct", (req, res) => res.render("products/editProduct"));
