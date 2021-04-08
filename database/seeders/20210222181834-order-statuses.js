'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('OrderStatuses', [
      {
        id:1,
        name: 'Pendiente de Pago',
        description: 'Pendiente de Pago',
        createdAt: '2021-01-01 20:52:27',
        updatedAt: '2021-01-01 20:52:27'
      },
      {
        id:2,
        name: 'Procesando',
        description: 'Procesando',
        createdAt: '2021-01-01 20:52:27',
        updatedAt: '2021-01-01 20:52:27'
      },
      {
        id:3,
        name: 'En Espera',
        description: 'En Espera',
        createdAt: '2021-01-01 20:52:27',
        updatedAt: '2021-01-01 20:52:27'
      },
      {
        id:4,
        name: 'Completado',
        description: 'Completado',
        createdAt: '2021-01-01 20:52:27',
        updatedAt: '2021-01-01 20:52:27'
      },
      {
        id:5,
        name: 'Cancelado',
        description: 'Cancelado',
        createdAt: '2021-01-01 20:52:27',
        updatedAt: '2021-01-01 20:52:27'
      },
      {
        id:6,
        name: 'Reembolsado',
        description: 'Reembolsado',
        createdAt: '2021-01-01 20:52:27',
        updatedAt: '2021-01-01 20:52:27'
      },
      {
        id:7,
        name: 'Fallido',
        description: 'Fallido',
        createdAt: '2021-01-01 20:52:27',
        updatedAt: '2021-01-01 20:52:27'
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('OrderStatuses', null, {});
  }
};
