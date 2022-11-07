const db = require("../../database/models");
const Products = db.Product;
const { Sequelize } = require("../../database/models/index");
const Op = Sequelize.Op;

module.exports = {
  list: async (req, res) => {
    const productsCount = await Products.count();
    const productsList = await Products.findAll();

    function product() {
      let arrayProduct = [];
      for (i = 0; i < productsList.length; i++) {
        singleProduct = {
          name: productsList[i].name,
          description: productsList[i].description,
          sku: productsList[i].sku,
          detail: `${req.url}/${productsList[i].sku}`,
        };
        arrayProduct.push(singleProduct);
      }
      return arrayProduct;
    }
    res.json({
      "Total de productos": productsCount,
      Usuarios: product(),
    });
  },
  detail: async (req, res) => {
    const singleProducts = await Products.findByPk(req.params.sku);
    const productDetail = {};
    productDetail.name = singleProducts.name;
    productDetail.description = singleProducts.description;
    productDetail.color = singleProducts.color;
    productDetail.size = singleProducts.size_id;
    productDetail.price = singleProducts.price;
    productDetail.image = `/img/products/${singleProducts.image}`;
    res.json(productDetail);
  },
};
