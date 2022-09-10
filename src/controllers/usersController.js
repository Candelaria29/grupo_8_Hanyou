const { index, one, generate, write } = require("../models/usersModel");

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
    if (
      (req.body.userName = req.session.user) &&
      (req.body.password = req.session.user)
    ) {
      return res.redirect("/");
    }
    message = "Credenciales incorrectas";
    return res.send(message);
  },
};
