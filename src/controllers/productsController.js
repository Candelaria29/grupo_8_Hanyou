const { all, one, generate, write } = require("../models/productsModel");
const { unlinkSync } = require("fs");
const { resolve } = require("path");

const db = require("../database/models/index");
const Op = db.Sequelize.Op;
const { request } = require("http");

const controller = {
  //esta funcion filtra los productos destacados para mostrarlos en el index
  home: (req, res) => {
    // let products = all(); 
    // let indexProducts = products.filter((product) => product.index == "1");
    // res.render("index", { indexProducts });
    db.Product.findAll({
      where: {
        index: 1,
      },
    })
      .then((indexProducts) => res.render("index", { indexProducts }))
      .catch(() => {
        res.render("index");
      });
  },

  index: (req, res) => {
    /* let products = all();
    return res.render("products/productList", { products }); */
    let products = db.Product.findAll();
    const success = (data) =>
      res.render("products/productList", { products: data });
    const error = (error) => res.send(error);
    return products.then(success).catch();
  },

  show: (req, res) => {
    /* let product = one(req.params.sku); 
    if (product) {
      // return res.send(product);
      return res.render("products/productDetail", {product});
    }
    return res.render("products/productDetail", {product: null});*/

    let product = db.Product.findByPk(req.params.sku);
    const success = (data) =>
      res.render("products/productDetail", { product: data });
    const error = (error) => res.send(error);
    return product.then(success).catch();
  },

  create: (req, res) => {
    return res.render("products/createNewProduct");
  },

  save: (req, res) => {
    if (req.files && req.files.length > 0) {
      req.body.image = req.files[0].filename;
    } else {
      req.body.image = "logo4.png";
    }
    /* let nuevo = generate(req.body);
    let todos = all();
    todos.push(nuevo);
    write(todos);
    return res.redirect("/"); */

    let save = db.Product.create({
      name: req.body.name,
      description: req.body.description,
      color: req.body.color,
      size_id: req.body.size,
      price: parseInt(req.body.price),
      image: req.body.image,
      index: req.body.index ? req.body.index : "0",
    });

    const success = (data) => res.redirect("/productos");
    const error = (error) => res.send(error);

    return save.then(success).then(error);
  },

  edit: (req, res) => {
    // let product = one(req.params.sku);
    // return res.render("products/editProduct", {
    //   product,
    // });
    db.Product.findByPk(req.params.sku).then((product) => {
      return res.render("products/editProduct", {
        product,
      });
    });
  },

  update: (req, res) => {
    /* let todos = all();
    let actualizados = todos.map((e) => {
      if (e.sku == req.body.sku) {
        e.name = req.body.nombre;
        e.description = req.body.descripcion;
        e.color = req.body.color;
        e.size = req.body.medida;
        e.price = parseInt(req.body.precio);
        e.image =
          req.files && req.files.length > 0 ? req.files[0].filename : e.image;
        e.index = req.body.index ? "true" : "false";
      }
      return e;
    });
    write(actualizados);
    return res.redirect("/"); */

    const update = db.Product.update(
      {
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        size_id: req.body.size,
        price: parseInt(req.body.price),
        image: req.body.image,
        index: req.body.index ? 1 : "0", //(si sacas el tick funciona, si lo queres poner NO)
      },
      {
        where: {
          sku: req.body.sku,
        },
      }
    );
    const success = (data) => res.redirect("/productos");
    const error = (error) => res.send(error);

    return update.then(success).then(error);
  },

  destroy: (req, res) => {
    db.Product.destroy({
      where: {
        sku: req.body.sku,
      },
    });
    return res.redirect("/productos");
    /* let product = one(req.body.sku);
    if (product.image != "logo4.png") {
      let file = resolve(
        __dirname,
        "..",
        "..",
        "public",
        "img",
        "products",
        product.image
      );
      unlinkSync(file);
    }
    let todos = all();
    let noEliminados = todos.filter((e) => e.sku != req.body.sku);
    write(noEliminados);
    return res.redirect("/"); */
  },

  search: (req, res) => {
    let q = req.query.q;
    let products = db.Product.findAll({
      where: {
        name: {[Op.like]: '%'+q+'%'}
      }}
    )

    const success = (products) => res.render("products/productList", {products});
    const error = (error) => res.send(error);
    return products.then(success).catch(error);
  }
};

module.exports = controller;
