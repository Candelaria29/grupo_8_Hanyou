const express = require("express");
const app = express();
const { resolve } = require("path");
const { port, start } = require("./modules/server.js");
const { static } = require("./modules/static.js");

app.listen(port, start());

app.use(static(resolve(__dirname, "../public")));

app.set("view engine", "ejs");

app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/login", (req, res) => res.render("users/login"));
app.get("/productCart", (req, res) => res.render("products/productCart"));
app.get("/productDetail", (req, res) => res.render("products/productDetail"));
app.get("/register", (req, res) => res.render("users/register"));
app.get("/createNewProduct", (req, res) =>
  res.render("products/createNewProduct")
);
app.get("/editProduct", (req, res) => res.render("products/editProduct"));
