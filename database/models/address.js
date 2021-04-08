'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    static associate(models) {
      Address.hasMany(models.Order, {
        as: "billAddresses",
        foreignKey: "billAddressId"
      });
      Address.hasMany(models.Order, {
        as: "shippingAddresses",
        foreignKey: "shippingAddressId"
      });
      Address.belongsTo(models.User,{
        as:'users',
        foreignKey:"userId"
      });
    }
  };
  Address.init({
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING,
    message: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
    tableName: 'Addresses',
  });
  return Address;
};