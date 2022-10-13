const { index, one, generate, write } = require("../models/usersModel");
const { compareSync } = require("bcrypt");
const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { hashSync } = require("bcrypt");
const { resolve } = require("path");
const { unlinkSync } = require("fs");

const Users = db.User;

module.exports = {
  login: (req, res) => res.render("users/login"),
  register: (req, res) => res.render("users/register"),
  profile: (req, res) => {
    let activeUser = req.session.user;
    return res.render("users/profile", { activeUser });
  },
  save: (req, res) => {
    let adminCheck = (data) => (data.includes("@hanyou.com") ? 1 : 0);

    if (req.files && req.files.length > 0) {
      req.body.imagenUsuario = req.files[0].filename;
    } else {
      req.body.imagenUsuario = "default.png";
    }

    Users.create({
      firstName: req.body.nombre,
      lastName: req.body.apellido,
      email: req.body.email,
      password: hashSync(req.body.password, 10),
      avatar: req.body.imagenUsuario,
      adminType: adminCheck(req.body.email),
    }).then(() => {
      return res.redirect("/login");
    });

    // JSON controller:
    // if (req.files && req.files.length > 0) {
    //   req.body.imagenUsuario = req.files[0].filename;
    // } else {
    //   req.body.imagenUsuario = "default.png";
    // }
    // let nuevoUsuario = generate(req.body);
    // let todos = index();
    // todos.push(nuevoUsuario);
    // write(todos);
    // return res.redirect("/login");
  },
  access: (req, res) => {
    Users.findOne({
      where: {
        email: req.body.userName,
      },
    })
      .then((responseUser) => {
        if (!compareSync(req.body.password, responseUser.password)) {
          return res.redirect("/login");
        }
        //La cookieDuration esta en milesimas (ahora dura una hora):
        cookieDuration = 3.6e6;
        if (req.body.remember) {
          res.cookie("user", req.body.userName, { maxAge: cookieDuration });
        }
        req.session.user = responseUser;
        return res.redirect("/profile");
      })
      .catch(() => res.redirect("/login"));

    // JSON controller:
    // let allUsers = index();
    // let listOfEmails = allUsers.map((e) => e.email);
    // let result = allUsers.find((e) => e.email == req.body.userName);
    // if (listOfEmails.indexOf(req.body.userName) == -1) {
    //   errorMessage = "Usuario no encontrado";
    //   return res.redirect("/login");
    // } else if (!compareSync(req.body.password, result.password)) {
    //   newErrorMessage = "Contraseña incorrecta";
    //   return res.redirect("/login");
    // }
    // //La cookieDuration esta en milesimas (ahora dura una hora):
    // cookieDuration = 3.6e6;
    // if (req.body.remember) {
    //   res.cookie("user", req.body.userName, { maxAge: cookieDuration });
    // }
    // req.session.user = allUsers.find((e) => e.email == req.body.userName);
    // return res.redirect("/profile");
  },
  logout: (req, res) => {
    delete req.session.user;
    res.cookie("user", null, { maxAge: -1 });
    return res.redirect("/");
  },
  destroy: (req, res) => {
    Users.findOne({
      where: {
        id: req.body.id,
      },
    })
      .then((user) => {
        if (user.avatar != "default.png") {
          let file = resolve(
            __dirname,
            "..",
            "..",
            "public",
            "img",
            "users",
            user.avatar
          );
          unlinkSync(file);
        }
        Users.destroy({
          where: {
            id: user.id,
          },
          force: true,
        });
      })
      .then(() => {
        delete req.session.user;
        res.cookie("user", null, { maxAge: -1 });
        return res.redirect("/");
      });
  },
};
