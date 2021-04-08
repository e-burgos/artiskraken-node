'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Addresses', [
      {
        id:1,
        fullName: 'Casa',
        address: 'Av Gaona 1234',
        city: 'Caballito',
        province: 'CABA',
        postalCode: '1405',
        country: 'Argentina',
        message: 'Tocar el timbre 1111 del 1A',
        userId: 1,
        createdAt: '2021-01-23 20:52:27',
        updatedAt: '2021-01-23 20:52:27'
      },
      {
        id:2,
        fullName: 'Oficina',
        address: 'Av Belgrano 2345',
        city: 'Belgrano',
        province: 'CABA',
        postalCode: '1405',
        country: 'Argentina',
        message: 'Piso 1A',
        userId: 1,
        createdAt: '2021-01-23 20:52:27',
        updatedAt: '2021-01-23 20:52:27'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Addresses', null, {});
  }
};
