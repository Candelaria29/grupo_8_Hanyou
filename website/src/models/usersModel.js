const { writeFileSync, readFileSync } = require("fs");
const { resolve } = require("path");
const { hashSync } = require("bcrypt");

let model = {
  index: function () {
    let file = resolve(__dirname, "../data", "users.json");
    let data = readFileSync(file);
    return JSON.parse(data);
  },
  one: function (data) {
    model.index().find((e) => e.data == data);
  },
  generate: function (data) {
    let all = model.index();
    const idGenerator = function () {
      let lastId = all.pop().id;
      return lastId + 1;
    };
    let user = {};
    user.firstName = data.nombre;
    user.lastName = data.apellido;
    user.email = data.email;
    user.password = hashSync(data.password, 10);
    user.avatar = data.imagenUsuario;
    let mailOwners = data.email.split("@");
    let adminMails = ["nicolasagustincilio", "candelariabarrios"];
    user.adminType = adminMails.indexOf(mailOwners[0]) != -1 ? true : false;
    user.id = idGenerator();
    return user;
  },
  write: function (data) {
    let file = resolve(__dirname, "../data", "users.json");
    let json = JSON.stringify(data, null, 2);
    return writeFileSync(file, json);
  },
};

module.exports = model;