const { resolve } = require("path");
const { readFileSync } = require("fs");

let model = {
  all: function () {
    let file = resolve(__dirname, "../data", "products.json");
    let data = readFileSync(file);
    return JSON.parse(data);
  },
  one: function (sku) {
    let all = model.all();
    return all.find((e) => e.sku == sku);
  },
};

module.exports = model;
