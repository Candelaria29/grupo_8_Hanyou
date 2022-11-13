const db = require("../../database/models");
const Products = db.Product;
const { Sequelize } = require("../../database/models/index");
const Op = Sequelize.Op;

module.exports = {
  list: async (req, res) => {
    const productsCount = await Products.count();
    const productsList = await Products.findAll();
    function countByCategory() {
      let arrayBig = [];
      let arraySmall = [];
      for (i = 0; i < productsList.length; i++) {
        if (productsList[i].size_id === 2) {
          arrayBig.push(productsList[i].sku);
        } else {
          arraySmall.push(productsList[i].sku);
        }
      }
      let bigProductAmount = arrayBig.length;
      let smallProductAmount = arraySmall.length;
      return {
        ProductosPequenos: smallProductAmount,
        ProductosGrandes: bigProductAmount,
      };
    }
    function product() {
      let arrayProduct = [];
      for (i = 0; i < productsList.length; i++) {
        singleProduct = {
          name: productsList[i].name,
          description: productsList[i].description,
          sku: productsList[i].sku,
          detail: `${req.url}/${productsList[i].sku}`,
          size: productsList[i].size_id,
          image: `/img/products/${productsList[i].image}`,
          price: productsList[i].price,
        };
        arrayProduct.push(singleProduct);
      }
      return arrayProduct;
    }
    res.json({
      TotalDeProductos: productsCount,
      ProductosPorCategoria: countByCategory(),
      Productos: product(),
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
