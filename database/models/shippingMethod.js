'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ShippingMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      ShippingMethod.hasMany(models.Order,{
        as:'orders',
        foreignKey:"shippingMethodId"
      });
      ShippingMethod.belongsTo(models.Shop, {
          as: "shopShippingMethods",
          foreignKey: "shopId",
      });
    }
  };
  ShippingMethod.init(
      {
          name: DataTypes.STRING,
          amount: DataTypes.FLOAT(10, 2),
          description: DataTypes.STRING,
          location: DataTypes.STRING,
          status: DataTypes.STRING,
          shopId: DataTypes.INTEGER,
      },
      {
          sequelize,
          modelName: "ShippingMethod",
          tableName: "ShippingMethods",
      }
  );
  return ShippingMethod;
};