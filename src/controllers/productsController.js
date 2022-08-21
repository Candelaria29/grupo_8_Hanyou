const { all, one } = require("../models/productsModel");

const controller = {
  index: (req, res) => {
    let products = all();
    return res.render("index", { products });
  },
  show: (req, res) => {
    let product = one(req.params.sku);
    if (product) {
      return res.send(product);
      return res.render("products/productDetail");
    }
    return res.send("No se encontro ningun producto con ese sku");
  },
};

module.exports = controller;
