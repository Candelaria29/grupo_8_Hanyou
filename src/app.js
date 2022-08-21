const express = require("express");
const app = express();
const { resolve } = require("path");
const { port, start } = require("./modules/server.js");
const { static } = require("./modules/static.js");

// Inicio de servidor
app.listen(port, start());

// Configuracion de archivos estaticos
app.use(static(resolve(__dirname, "../public")));

// Configuracion de EJS
app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

// Rutas
// app.get("/", (req, res) => {
//   res.render("index");
// });
app.use(require("./routes/productsRoutes"));
app.use(require("./routes/usersRoutes"));
