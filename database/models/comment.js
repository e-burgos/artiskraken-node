'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comment.belongsTo(models.User, {
          as: "users",
          foreignKey: "userId"
      });
      Comment.belongsTo(models.Product, {
          as: "products",
          foreignKey: "productId"
      });
    }
  };
  Comment.init({
    comment: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
    tableName: 'Comments'
  });
  return Comment;
};