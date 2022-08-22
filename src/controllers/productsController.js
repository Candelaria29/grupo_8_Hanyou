const { all, one, generate, write } = require("../models/productsModel");

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
  create: (req, res) => {
    return res.render("products/createNewProduct");
  },
  save: (req, res) => {
    let nuevo = generate(req.body);
    let todos = all();
    todos.push(nuevo);
    write(todos);
    return res.redirect("/");
  },
};

module.exports = controller;
