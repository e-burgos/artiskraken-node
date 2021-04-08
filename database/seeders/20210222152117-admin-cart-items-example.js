'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('CartItems', [
      {
        id:1,
        subtotal: 500,
        quantity: 2,
        price: 250,
        discount: 0,
        expireTime: '2021-03-23',
        productId: 1,
        orderId: 1,
        createdAt: '2021-01-23 20:52:27',
        updatedAt: '2021-01-23 20:52:27'
      },
      {
        id:2,
        subtotal: 400,
        quantity: 1,
        price: 450,
        discount: 50,
        expireTime: '2021-03-23',
        productId: 2,
        orderId: 1,
        createdAt: '2021-01-23 20:52:27',
        updatedAt: '2021-01-23 20:52:27'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('CartItems', null, {});
  }
};