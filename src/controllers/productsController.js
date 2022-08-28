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
    if (req.files && req.files.length > 0) {
      req.body.image = req.files[0].filename;
    } else {
      req.body.image = "/img/products/logo4.png";
    }
    let nuevo = generate(req.body);
    let todos = all();
    todos.push(nuevo);
    write(todos);
    return res.redirect("/");
  },
  edit: (req, res) => {
    let product = one(req.params.sku);
    return res.render("products/editProduct", {
      product,
    });
  },
  update: (req, res) => {
    if (req.files && req.files.length > 0) {
      return res.send({ archivos: req.files });
    }
    let todos = all();
    let actualizados = todos.map((e) => {
      if (e.sku == req.body.sku) {
        e.name = req.body.nombre;
        e.description = req.body.descripcion;
        e.color = req.body.color;
        e.size = req.body.medida;
        e.price = parseInt(req.body.precio);
        e.image = req.body.imageOfCreatedProduct;
      }
      return e;
    });
    write(actualizados);
    return res.redirect("/");
  },
};

module.exports = controller;
