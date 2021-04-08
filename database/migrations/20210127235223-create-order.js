'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.DATEONLY
      },
      email: {
        type: Sequelize.STRING
      },
      totalProducts: {
        type: Sequelize.FLOAT(10,2)
      },
      totalShipping: {
        type: Sequelize.FLOAT(10,2)
      },
      message:{
        type: Sequelize.STRING
      },
      tax: {
        type: Sequelize.FLOAT(10,2)
      },
      total: {
        type: Sequelize.FLOAT(10,2)
      },
      userId: {
        type: Sequelize.INTEGER
      },
      shopId: {
        type: Sequelize.INTEGER
      },
      statusId: {
        type: Sequelize.INTEGER
      },
      paymentId: {
        type: Sequelize.INTEGER
      },
      couponId: {
        type: Sequelize.INTEGER
      },
      shippingMethodId: {
        type: Sequelize.INTEGER
      },
      billAddressId: {
        type: Sequelize.INTEGER
      },
      shippingAddressId: {
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
    await queryInterface.dropTable('Orders');
  }
};