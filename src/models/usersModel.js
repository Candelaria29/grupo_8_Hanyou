const { writeFileSync, readFileSync } = require("fs");
const { resolve } = require("path");

let model = {
  index: function () {
    let file = resolve(__dirname, "../data", "users.json");
    let data = readFileSync(file);
    return JSON.parse(data);
  },
  one: function (id) {
    model.index().find((e) => e.id == id);
  },
  write: function (data) {
    let file = resolve(__dirname, "../data", "users.json");
    let json = JSON.stringify(data, null, 2);
    return writeFileSync(file, json);
  },
};

module.exports = model;
