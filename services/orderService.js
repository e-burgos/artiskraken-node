const { Order } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await Order.findByPk(id, {
            include: [
                { association: "payments" },
                { association: "users" },
                { association: "cartItems" },
                { association: "shippingMethods" },
                { association: "shops" },
                { association: "products" },
                { association: "billAddresses" },
                { association: "shippingAddresses" },
                { association: "coupons" },
                { association: "status" },
            ],
        });
    },
    findAll: async () => {
        return await Order.findAll({
            include: [
                { association: "payments" },
                { association: "users" },
                { association: "cartItems" },
                { association: "shippingMethods" },
                { association: "shops" },
                { association: "products" },
                { association: "billAddresses" },
                { association: "shippingAddresses" },
                { association: "coupons" },
                { association: "status" },
            ],
        });
    },
    create: async (attributes) => {
        return await Order.create(attributes);
    },
    destroy: async (id) => {
        return await Order.destroy({
            where: { id: id },
        });
    },
    update: async (id, attributes) => {
        return await Order.update(attributes, { 
            where: { id: id }, 
        });
    }
};
