'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
   static associate(models) {
      Category.belongsTo(models.Type, {
        as: "types",
        foreignKey: "typeId"
      });
      Category.hasMany(models.Product, {
        as: "products",
        foreignKey: "categoryId"
      });
    }

  };
  Category.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    count: DataTypes.INTEGER,
    typeId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'Categories',
  });
  return Category;
};