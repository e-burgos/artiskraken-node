'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [{
        id:1,
        comment: 'Esto es un comentario de ejemplo',
        date: '2021-01-23',
        userId: 1,
        productId: 1,
        createdAt: '2021-01-23 20:52:27',
        updatedAt: '2021-01-23 20:52:27'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
