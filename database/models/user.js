'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsTo(models.Shop, {
          as: "shops",
          foreignKey: "shopId"
      });
      User.hasMany(models.Order, {
          as: "orders",
          foreignKey: "userId"
      });
      User.hasMany(models.Comment, {
          as: "comments",
          foreignKey: "userId"
      });
      User.hasMany(models.Address,{
          as:"addresses",
          foreignKey:"userId"
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    dni: DataTypes.INTEGER,
    password: DataTypes.STRING,
    avatar: DataTypes.STRING,
    admin: DataTypes.BOOLEAN,
    status: DataTypes.STRING,
    role: DataTypes.STRING,
    bio: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING,
    shopId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'Users',
  });
  return User;
};