'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      id:1,
      name: 'Stout',
      description: 'Cerveza negra, espesa, con un gusto fuerte',
      count: 0,
      typeId:1,
      createdAt: '2021-01-01 20:52:27',
      updatedAt: '2021-01-01 20:52:27'
    },
    {
      id:2,
      name: "Pilsen",
      description: "Cerveza rubia, ligera",
      count: 0,
      typeId:1,
      createdAt: '2021-01-01 20:52:27',
      updatedAt: '2021-01-01 20:52:27'
    },
    {
      id:3,
      name: "Porter",
      description: "Cerveza negra, con un sabor moderado, complejo y equilibrado ",
      count: 0,
      typeId:1,
      createdAt: '2021-01-01 20:52:27',
      updatedAt: '2021-01-01 20:52:27'
    },
    {
      id:4,
      name: "Pale Ale",
      description: "Cerveza rubia, amarga, caracterizada por tener un alto porcentaje de alcohol",
      count: 0,
      typeId:2,
      createdAt: '2021-01-01 20:52:27',
      updatedAt: '2021-01-01 20:52:27'
    },{
      id:5,
      name: "German Bock",
      description: "Cerveza fuerte, de color oscuro",
      count: 0,
      typeId:1,
      createdAt: '2021-01-01 20:52:27',
      updatedAt: '2021-01-01 20:52:27'
    },{
      id:6,
      name: "Apa",
      description: "Cerveza de cuerpo ligero, refrescante, muy equilibrada",
      count: 0,
      typeId:2,
      createdAt: '2021-01-01 20:52:27',
      updatedAt: '2021-01-01 20:52:27'
    },{
      id:7,
      name: "Ipa",
      description: "Cerveza rubia, con amargor y aroma intenso",
      count: 0,
      typeId:2,
      createdAt: '2021-01-01 20:52:27',
      updatedAt: '2021-01-01 20:52:27'
    },{
      id:8,
      name: "Dunkel",
      description: "Ceveza oscura",
      count: 0,
      typeId:1,
      createdAt: '2021-01-01 20:52:27',
      updatedAt: '2021-01-01 20:52:27'
    },], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
