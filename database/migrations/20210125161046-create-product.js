'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      details: {
        type: Sequelize.STRING
      },
      brewery: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT(10,2)
      },
      discount: {
        type: Sequelize.FLOAT(10,2)
      },
      stock: {
        type: Sequelize.INTEGER
      },
      ibu: {
        type: Sequelize.FLOAT(10,2)
      },
      og: {
        type: Sequelize.FLOAT(10,2)
      },
      abv: {
        type: Sequelize.FLOAT(10,2)
      },
      avatar: {
        type: Sequelize.STRING
      },
      gallery01: {
        type: Sequelize.STRING
      },
      gallery02: {
        type: Sequelize.STRING
      },
      gallery03: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      shopId: {
        type: Sequelize.INTEGER
      },
      typeId: {
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};