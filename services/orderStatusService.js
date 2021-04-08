const { OrderStatus } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await OrderStatus.findByPk(id, {
            include: [
                { association: "status" }
            ],
        });
    },
    findAll: async () => {
        return await OrderStatus.findAll({
            include: [
                { association: "status" },
            ],
        });
    },
    create: async (attributes) => {
        return await OrderStatus.create(attributes);
    },
    destroy: async (id) => {
        return await OrderStatus.destroy({
            where: { id: id },
        });
    },
    update: async (id, attributes) => {
        return await OrderStatus.update(attributes, { 
            where: { id: id }, 
        });
    }
};