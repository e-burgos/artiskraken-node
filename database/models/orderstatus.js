'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      OrderStatus.hasMany(models.Order, {
         as: "status",
         foreignKey:"statusId"
        });
    }
  };
  OrderStatus.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrderStatus',
    tableName: 'OrderStatuses',
  });
  return OrderStatus;
};