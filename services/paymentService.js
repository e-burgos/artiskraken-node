const { Payment } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Payment.findByPk(id, {
            include: ["orders", "shopPayments"],
        });
    },
    findAll: async () => {
        return await Payment.findAll({
            include: ["orders", "shopPayments"],
        });
    },
    create: async (attributes) => {
        return await Payment.create(attributes);
    },
    destroy: async (id) => {
        return await Payment.destroy({
            where: { id: id },
        });
    },
    update: async (id, attributes) => {
        return await Payment.update(attributes, { 
            where: { id: id }, 
        });
    }
};