const { all, one } = require("../models/productsModel");

const controller = {
  // Este index hace referencia al productCart y no al index/home de la web
  index: (req, res) => {
    let products = all();
    // return res.send(products);
    return res.render("products/productCart");
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
