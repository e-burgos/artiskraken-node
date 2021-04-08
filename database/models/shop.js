'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Shop.hasOne(models.User, {
        as: "users",
        foreignKey: "shopId"
      });
      Shop.hasMany(models.Product, {
        as: "products",
        foreignKey: "shopId"
      });
      Shop.hasMany(models.Order, {
        as: "orders",
        foreignKey: "shopId",
      });
      Shop.hasMany(models.Coupon, {
        as: "shopCoupons",
        foreignKey: "shopId",
      });
      Shop.hasMany(models.Payment, {
          as: "shopPayments",
          foreignKey: "shopId",
      });
      Shop.hasMany(models.ShippingMethod, {
          as: "shopShippingMethods",
          foreignKey: "shopId",
      });
    }
  };
  Shop.init(
      {
          name: DataTypes.STRING,
          phone: DataTypes.STRING,
          email: DataTypes.STRING,
          avatar: DataTypes.STRING,
          ranking: DataTypes.FLOAT,
          status: DataTypes.STRING,
          sales: DataTypes.INTEGER,
          bio: DataTypes.STRING,
          facebook: DataTypes.STRING,
          instagram: DataTypes.STRING,
          twitter: DataTypes.STRING,
          tokenKey: DataTypes.STRING,
          publicKey: DataTypes.STRING,
          marketplaceLink: DataTypes.STRING,
          marketplaceApp: DataTypes.STRING,
      },
      {
          sequelize,
          modelName: "Shop",
          tableName: "Shops",
      }
  );
  return Shop;
};