const { index, one, generate, write } = require("../models/usersModel");
const { compareSync } = require("bcrypt");

module.exports = {
  login: (req, res) => res.render("users/login"),
  register: (req, res) => res.render("users/register"),
  profile: (req, res) => res.render("users/profile"),
  save: (req, res) => {
    if (req.files && req.files.length > 0) {
      req.body.image = req.files[0].filename;
    } else {
      req.body.image = "/img/users/logo4.png";
    }
    let nuevoUsuario = generate(req.body);
    let todos = index();
    todos.push(nuevoUsuario);
    write(todos);
    return res.redirect("/");
  },
  access: (req, res) => {
    let allUsers = index();
    let listOfEmails = allUsers.map((e) => e.email);
    let result = allUsers.find((e) => e.email == req.body.userName);
    if (listOfEmails.indexOf(req.body.userName) == -1) {
      errorMessage = "Usuario no encontrado";
      return res.redirect("/login");
    } else if (!compareSync(req.body.password, result.password)) {
      newErrorMessage = "Contraseña incorrecta";
      return res.redirect("/login");
    }
    //La cookieDuration esta en milesimas:
    cookieDuration = 1e4;
    //Ver como agregar el opcional de sprint 5, para que solo se guarde una cookie
    //si el usuario clickea la opcion de recordarlo
    res.cookie("user", req.body.userName, { maxAge: cookieDuration });
    req.session.user = allUsers.find((e) => e.email == req.body.userName);
    return res.redirect("/");
  },
  logout: (req, res) => {
    delete req.session.user;
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/");
  },
};
