const controller = {
  // Este index hace referencia al productCart y no al index/home de la web
  index: (req, res) => res.render("products/productCart"),
  show: (req, res) => res.render("products/productDetail"),
};

module.exports = controller;
