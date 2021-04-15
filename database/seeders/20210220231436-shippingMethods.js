'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        "ShippingMethods",
        [
            {
                id: 1,
                name: "Envío a domicilio",
                amount: 300.5,
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
            {
                id: 3,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 2,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 4,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 3,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 5,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 4,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 6,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 5,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 7,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 6,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 8,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 7,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 9,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 8,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 10,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 9,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 11,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 10,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 12,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 11,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 13,
                name: "Arreglo con el vendedor",
                amount: 0,
                description:
                    "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                location: "Domicilio del vendedor",
                status: "active",
                shopId: 12,
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
