'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.Shop, {
        as: "shops",
        foreignKey: "shopId"
      });
      Product.belongsTo(models.Category, {
        as: "categories",
        foreignKey: "categoryId"
      });
      Product.belongsTo(models.Type, {
        as: "types",
        foreignKey: "typeId"
      });
      Product.belongsToMany(models.Order, {
        as: "orders",
        foreignKey:"productId",
        through: "CartItem"
      });
      Product.hasMany(models.CartItem, {
        as: "cartItems",
        foreignKey:"productId"
      });
      Product.hasMany(models.Comment, {
        as: "comments",
        foreignKey:"productId"
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    details: DataTypes.STRING,
    brewery: DataTypes.STRING,
    price: DataTypes.FLOAT(10,2),
    discount: DataTypes.FLOAT(10,2),
    stock: DataTypes.INTEGER,
    ibu: DataTypes.FLOAT(10,2),
    og: DataTypes.FLOAT(10,2),
    abv: DataTypes.FLOAT(10,2),
    avatar: DataTypes.STRING,
    gallery01: DataTypes.STRING,
    gallery02: DataTypes.STRING,
    gallery03: DataTypes.STRING,
    status: DataTypes.STRING,
    shopId: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
    tableName: 'Products'
  });
  return Product;
};