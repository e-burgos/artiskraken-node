'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Shops", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        avatar: {
            type: Sequelize.STRING,
        },
        ranking: {
            type: Sequelize.FLOAT(10, 2),
        },
        status: {
            type: Sequelize.STRING,
        },
        sales: {
            type: Sequelize.INTEGER,
        },
        bio: {
            type: Sequelize.STRING,
        },
        facebook: {
            type: Sequelize.STRING,
        },
        instagram: {
            type: Sequelize.STRING,
        },
        twitter: {
            type: Sequelize.STRING,
        },
        tokenKey: {
            type: Sequelize.STRING,
        },
        publicKey: {
            type: Sequelize.STRING,
        },
        marketplaceLink: {
            type: Sequelize.STRING,
        },
        marketplaceApp: {
            type: Sequelize.STRING,
        },
        createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
        },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Shops');
  }
};