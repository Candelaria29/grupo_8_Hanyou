const express = require("express");
const session = require("express-session");
const cookie = require("cookie-parser");
const app = express();
const method = require("method-override");
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

//Para el req.body o el req.query:
app.use(express.urlencoded({ extended: true }));

//Configuracion para que los formularios acepten put, delete, y patch
app.use(method("m"));

//Configuracion de Session. Agrega al request la propiedad session,
//req.session
app.use(
  session({
    secret: "hanyou",
    resave: false,
    saveUninitialized: false,
  })
);

//Configuracion de cookie. Agrega la propiedad cookies al request
//(req.cookies) y el metodo cookie() al response (res.cookie())
app.use(cookie());

app.use(require("./middlewares/usersMiddleware"));

//Rutas:
/* //Ruta main;
app.get("/", (req, res) => {
  res.render("index");
}); */

//app.use(require("./routes/mainRoutes"));
app.use(require("./routes/productsRoutes"));
app.use(require("./routes/usersRoutes"));
