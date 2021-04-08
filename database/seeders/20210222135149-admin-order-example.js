'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Orders', [{
        id:1,
        date: '2021-01-23',
        email: 'admin@artiskraken.com.ar',
        totalProducts: 900.00,
        totalShipping: 300.20,
        message: 'esto es una orden de prueba',
        tax: 50.20,
        total: 1250.60,
        userId: 1,
        shopId: 1,
        statusId: 1,
        paymentId: 1,
        couponId: 1,
        shippingMethodId: 1,
        billAddressId: 2,
        shippingAddressId: 1,
        createdAt: '2021-01-23 20:52:27',
        updatedAt: '2021-01-23 20:52:27'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Orders', null, {});
  }
};
