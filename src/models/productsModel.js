const { resolve } = require("path");
const { readFileSync, writeFileSync } = require("fs");

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
  generate: function (data) {
    let all = model.all();
    const skuGenerator = function () {
      let lastSku = all.pop();
      return lastSku.sku + 1;
    };
    let product = {};
    product.name = data.name;
    product.description = data.description;
    product.color = data.color;
    product.size = data.size;
    product.price = parseInt(data.price);
    product.sku = skuGenerator();
    product.image = data.image;
    return product;
  },
  write: function (data) {
    let file = resolve(__dirname, "../data", "products.json");
    let json = JSON.stringify(data, null, 2);
    return writeFileSync(file, json);
  },
};

module.exports = model;
