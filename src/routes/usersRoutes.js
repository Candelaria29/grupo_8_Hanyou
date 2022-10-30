const { Router } = require("express");
const route = Router();
//metodos del controlador
const {
  login,
  register,
  profile,
  save,
  access,
  logout,
  destroy,
} = require("../controllers/usersController");
const { resolve, extname } = require("path");
const { existsSync, mkdirSync } = require("fs");
const isLogged = require("../middlewares/isLogged");
const notLogged = require("../middlewares/notLogged");
const validatorRegister = require("../validations/users/register");

//config multer
const destination = function (req, file, cb) {
  let folder = resolve(__dirname, "..", "..", "public", "img", "users");
  if (!existsSync(folder)) {
    mkdirSync(folder);
  }
  return cb(null, folder);
};

const filename = function (req, file, cb) {
  let unique = Date.now() + "-" + Math.round(Math.random() * 1e9);
  let name = file.fieldname + "-" + unique + extname(file.originalname);
  return cb(null, name);
};

const multer = require("multer");
const { diskStorage } = require("multer");

const upload = multer({
  storage: diskStorage({ destination, filename }),
});

route.get("/register", [notLogged], register);
route.get("/login", [notLogged], login);
route.get("/profile", [isLogged], profile);
route.get("/logout", logout);

route.post("/save", upload.any(), validatorRegister, save);
route.post("/access", access);
route.delete("/destroy", [isLogged], destroy);

module.exports = route;
