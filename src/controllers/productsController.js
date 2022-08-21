const { all, one } = require("../models/productsModel");

const controller = {
  index: (req, res) => {
    let products = all();
    return res.render("index", { products });
  },
  show: (req, res) => {
    let product = one(req.params.sku);
    if (product) {
      // return res.send(product);
      return res.render("products/productDetail", { product });
    }
    return res.render("products/productDetail", { product: null });
  },
};

module.exports = controller;
