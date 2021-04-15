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
                status: "active",
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
            {
                id: 3,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 2,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 4,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 2,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 5,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 3,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 6,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 3,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 7,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 4,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 8,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 4,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 9,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 5,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 10,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 5,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 11,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 6,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 12,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 6,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 13,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 7,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 14,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 7,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 15,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 8,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 16,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 8,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 17,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 9,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 18,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 9,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 19,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 10,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 20,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 10,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 21,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 11,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 22,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
                status: "active",
                shopId: 11,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 23,
                name: "Mercado Pago",
                description:
                    "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                type: "mercadopago",
                status: "blocked",
                shopId: 12,
                createdAt: "2021-01-23 20:52:27",
                updatedAt: "2021-01-23 20:52:27",
            },
            {
                id: 24,
                name: "Efectivo",
                description:
                    "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                type: "cash",
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
    await queryInterface.bulkDelete('Payments', null, {});
  }
};
