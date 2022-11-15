const { index, one, write } = require("../models/usersModel");
const db = require("../database/models");

let middleware = (req, res, next) => {
  let user = null;
  db.User.findAll().then((responseUser) => {
    if (req.cookies && req.cookies.user) {
      let result = responseUser.find((e) => e.email == req.cookies.user);
      req.session.user = result;
    }
    if (req.session && req.session.user) {
      user = req.session.user;
    }
    res.locals.user = user;
    return next();
  });
};

module.exports = middleware;
