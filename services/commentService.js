const { Comment } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Comment.findByPk(id, {
            include: [
                { association: "users" },
                { association: "products" },
            ],
        });
    },
    findAll: async () => {
        return await Comment.findAll({
            include: [
                { association: "users" },
                { association: "products" },
            ],
        });
    },
    productComments: async (id) => {
        return await Comment.findAll({
            include:[ "users", "products"],
            where: {
                productId: id,
            },
        });
    },
    create: async (attributes) => {
        return await Comment.create(attributes);
    },
    destroy: async (id) => {
        return await Comment.destroy({
            where: { id: id },
        });
    },
    update: async (id, attributes) => {
        return await Comment.update(attributes, { 
            where: { id: id }, 
        });
    },
};