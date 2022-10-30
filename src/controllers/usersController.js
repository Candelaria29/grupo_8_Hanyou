const { index, one, generate, write } = require("../models/usersModel");

const db = require("../database/models");
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const { hashSync } = require("bcrypt");
const { resolve } = require("path");
const { unlinkSync } = require("fs");
const { validationResult } = require("express-validator");

const Users = db.User;

module.exports = {
  login: (req, res) => res.render("users/login"),
  register: (req, res) => res.render("users/register"),
  profile: (req, res) => {
    let activeUser = req.session.user;
    return res.render("users/profile", { activeUser });
  },
  save: (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      let errors = result.mapped();
      return res.render("users/register", { errors, data: req.body });
    }

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
  },
  access: (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      let errors = result.mapped();
      console.log(errors);
      return res.render("users/login", { errors, data: req.body });
    }

    Users.findOne({
      where: {
        email: req.body.userName,
      },
    }).then((responseUser) => {
      //La cookieDuration esta en milesimas (ahora dura una hora):
      cookieDuration = 3.6e6;
      if (req.body.remember) {
        res.cookie("user", req.body.userName, { maxAge: cookieDuration });
      }
      req.session.user = responseUser;
      return res.redirect("/profile");
    });
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
