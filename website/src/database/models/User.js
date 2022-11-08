module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let cols = {
    firstName: {
      type: dataTypes.STRING(20),
      allowNull: false,
    },
    lastName: {
      type: dataTypes.STRING(20),
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    password: {
      type: dataTypes.STRING(200),
      allowNull: false,
    },
    avatar: {
      type: dataTypes.STRING(300),
      allowNull: false,
    },
    adminType: {
      type: dataTypes.TINYINT.UNSIGNED,
      allowNull: false,
    },
    id: {
      type: dataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
  };
  let config = {
    tablename: "Users",
    timestamps: false,
  };
  const User = sequelize.define(alias, cols, config);
  return User;
};
