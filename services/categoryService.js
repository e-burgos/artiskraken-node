const { Category } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Category.findByPk(id, {
            include: [
                { association: "types" },
                { association: "products" }
            ],
        });
    },
    findAll: async () => {
        return await Category.findAll({
            include: [
                { association: "types" },
                { association: "products" }
            ],
        });
    },
    create: async (attributes) => {
        return await Category.create(attributes);
    },
    destroy: async (id) => {
        return await Category.destroy({
            where: { id: id },
        });
    },
    update: async (id, attributes) => {
        return await Category.update(attributes, { 
            where: { id: id }, 
        });
    }
};