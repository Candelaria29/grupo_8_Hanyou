const express = require("express");
const app = express();
const path = require("path");

const rutaPublic = path.resolve(__dirname, "./public");

app.listen(8000, () => {
  console.log("Servidor funcionando en http://localhost:8000");
});

app.use(express.static(rutaPublic));

app.set("view engine", "ejs");

app.get("/", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/index.ejs"))
);
app.get("/login", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/login.ejs"))
);
app.get("/productCart", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/productCart.ejs"))
);
app.get("/productDetail", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/productDetail.ejs"))
);
app.get("/register", (req, res) =>
  res.sendFile(path.resolve(__dirname, "./views/register.ejs"))
);
