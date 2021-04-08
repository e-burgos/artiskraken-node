'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        "ShippingMethods",
        [
            {
                id: 1,
                name: "Envío a domicilio",
                amount: 300.50,
                description: "Envio al domicilio del cliente.",
                location: "Dirección del cliente",
                status: "active",
                shopId: 1,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 2,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 1,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
        ],
        {}
    );
    },
    
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('ShippingMethods', null, {});
  }
};
