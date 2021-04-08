'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ShippingMethods", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
        amount: {
            type: Sequelize.FLOAT(10, 2),
        },
        description: {
            type: Sequelize.STRING,
        },
        location: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.STRING,
        },
        shopId: {
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
    await queryInterface.dropTable('ShippingMethods');
  }
};