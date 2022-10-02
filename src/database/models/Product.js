module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let cols = {
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(280),
      allowNull: false,
    },
    color: {
      type: dataTypes.STRING(200),
      allowNull: false,
    },
    size_id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(6, 2).UNSIGNED,
      allowNull: false,
    },
    sku: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    image: {
      type: dataTypes.STRING(300),
      allowNull: false,
    },
    index: {
      type: dataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
  };
  let config = {
    tableName: "Products",
    timestamps: false,
  };
  const Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsTo(models.Size, {
      as: "sizes",
      foreignKey: "size_id",
    });
  };

  return Product;
};
