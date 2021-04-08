const { CartItem } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await CartItem.findByPk(id, {
            include: [
                { association: "orders" },
                { association: "products" },
            ],
        });
    },
    findAll: async () => {
        return await CartItem.findAll({
            include: [
                { association: "orders" },
                { association: "products" },
            ],
        });
    },
    create: async (attributes) => {
        return await CartItem.create(attributes);
    },
    destroy: async (id) => {
        return await CartItem.destroy({
            where: { id: id },
        });
    },
    update: async (id, attributes) => {
        return await CartItem.update(attributes, { 
            where: { id: id }, 
        });
    }
};