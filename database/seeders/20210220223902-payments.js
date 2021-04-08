'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
        "Payments",
        [
            {
                id: 1,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "activo",
                shopId: 1,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 2,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
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
    await queryInterface.bulkDelete('Payments', null, {});
  }
};
