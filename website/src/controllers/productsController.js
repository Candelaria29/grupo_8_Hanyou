const { all, one, generate, write } = require("../models/productsModel");
const { unlinkSync } = require("fs");
const { resolve } = require("path");

const db = require("../database/models/index");
const Op = db.Sequelize.Op;
const { request } = require("http");
const { validationResult } = require("express-validator");

const controller = {
  //esta funcion filtra los productos destacados para mostrarlos en el index
  home: (req, res) => {
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
    let products = db.Product.findAll();
    const success = (data) =>
      res.render("products/productList", { products: data });
    const error = (error) => res.send(error);
    return products.then(success).catch();
  },

  show: (req, res) => {
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
    const result = validationResult(req);
    if (!result.isEmpty()) {
      let errors = result.mapped();
      return res.render("products/createNewProduct", {
        errors,
        data: req.body,
      });
    }

    if (req.files && req.files.length > 0) {
      req.body.image = req.files[0].filename;
    } else {
      req.body.image = "logo4.png";
    }
    
    let save = db.Product.create({
      name: req.body.name,
      description: req.body.description,
      color: req.body.color,
      size_id: req.body.size,
      price: parseFloat(req.body.price),
      image: req.body.image,
      index: req.body.index ? req.body.index : "0",
    });

    const success = (data) => res.redirect("/productos");
    const error = (error) => res.send(error);

    return save.then(success).then(error);
  },

  edit: (req, res) => {
    db.Product.findByPk(req.params.sku).then((product) => {
      return res.render("products/editProduct", {
        product,
      });
    });
  },

  update: (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      let errors = result.mapped();
      return res.render("products/editProduct", {
        errors,
        product: req.body,
      });
    }

    const update = db.Product.update(
      {
        name: req.body.name,
        description: req.body.description,
        color: req.body.color,
        size_id: req.body.size,
        price: parseFloat(req.body.price),
        image: req.body.image,
        index: req.body.index ? 1 : "0", 
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
    db.Product.findOne({
      where: {
        sku: req.body.sku,
      },
    })
      .then((product) => {
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
        db.Product.destroy({
          where: {
            sku: product.sku,
          },
        });
      })
      .then(() => {
        return res.redirect("/productos");
      });
  },

  search: (req, res) => {
    let q = req.query.q;
    if (q === "pequeño") {
      q = "small";
    }
    if (q === "grande") {
      q = "big";
    }
    let products = db.Product.findAll({
      where: {
        [Op.or]: [
          { name: { [Op.like]: "%" + q + "%" } },
          { "$Sizes.size$": q },
        ],
      },
      include: [{ association: "sizes" }],
    });

    const success = (products) =>
      res.render("products/productList", { products });
    const error = (error) => res.send(error);
    return products.then(success).catch(error);
  },
};

module.exports = controller;
