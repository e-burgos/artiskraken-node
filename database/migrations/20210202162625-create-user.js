'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Users", {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
        },
        name: {
            type: Sequelize.STRING,
        },
        userName: {
            type: Sequelize.STRING,
        },
        phone: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
        },
        dni: {
            type: Sequelize.BIGINT(11),
        },
        password: {
            type: Sequelize.STRING,
        },
        avatar: {
            type: Sequelize.STRING,
        },
        admin: {
            type: Sequelize.BOOLEAN,
        },
        status: {
            type: Sequelize.STRING,
        },
        role: {
            type: Sequelize.STRING,
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
        shopId: {
            type: Sequelize.INTEGER,
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
    await queryInterface.dropTable('Users');
  }
};