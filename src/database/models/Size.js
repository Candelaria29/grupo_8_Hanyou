module.exports = (sequelize, dataTypes) => {
  let alias = "Size";
  let cols = {
    id: {
      type: dataTypes.INTEGER(10).UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    size: {
      type: dataTypes.STRING(200),
      allowNull: false,
    },
  };
  let config = {
    tableName: "Sizes",
    timestamps: false,
  };
  const Size = sequelize.define(alias, cols, config);
  return Size;
};
