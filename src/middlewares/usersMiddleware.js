const { index, one, write } = require("../models/usersModel");

let middleware = (req, res, next) => {
  //Se inicia al usuario en null, porque puede ser que no se encuentre logueado
  let user = null;
  //Se corrobora si en las cookies, esta la propiedad guardada, que en
  //general es el mail, y si esta, se busca todos los campos del usuario,
  //mediante ese mail, y se cargan al session.
  if (req.cookies && req.cookies.user) {
    let users = index();
    let result = users.find((e) => e.email == req.cookies.user);
    req.session.user = result;
  }
  //Se corrobora si en el session ya esta el usuario, y se asignan sus
  //campos a la propiedad user definida como null mas arriba
  if (req.session && req.session.user) {
    user = req.session.user;
  }
  res.locals.user = user;
  return next();
};

module.exports = middleware;
