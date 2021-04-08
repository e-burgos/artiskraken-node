'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Coupons', [
      {
        id:1,
        name: 'Artis Kraken Coupon',
        description: 'Cupón de ejemplo',
        discount: 50,
        couponCode: 'ArtisCoupon',
        status: 'active',
        shopId: 1,
        createdAt: '2021-01-23 20:52:27',
        updatedAt: '2021-01-23 20:52:27'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Coupons', null, {});
  }
};