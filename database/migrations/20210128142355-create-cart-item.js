'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CartItems", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        subtotal: {
            type: Sequelize.FLOAT(10, 2),
        },
        quantity: {
            type: Sequelize.INTEGER,
        },
        price: {
            type: Sequelize.FLOAT(10, 2),
        },
        discount: {
            type: Sequelize.FLOAT(10, 2),
        },
        expireTime: {
            type: Sequelize.DATEONLY,
        },
        productId: {
            type: Sequelize.INTEGER,
        },
        orderId: {
            type: Sequelize.INTEGER,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CartItems');
  }
};