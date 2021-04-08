'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Types', [{
        id:1,
        name: 'Lager',
        description: 'Super fermentada',
        count: 0,
        createdAt: '2021-01-01 20:52:27',
        updatedAt: '2021-01-01 20:52:27'
      },
      {
        id:2,
        name: 'Ale',
        description: 'Menor fermentación',
        count: 0,
        createdAt: '2021-01-01 20:52:27',
        updatedAt: '2021-01-01 20:52:27'
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Types', null, {});
  }
};
