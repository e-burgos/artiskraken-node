'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Type extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Type.hasMany(models.Category, {
        as: "categories",
        foreignKey: "typeId"
      });
      Type.hasMany(models.Product, {
        as: "products",
        foreignKey: "typeId"
      });
    }
  };
  Type.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Type',
    tableName: 'Types',
  });
  return Type;
};