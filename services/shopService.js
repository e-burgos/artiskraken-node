const { Shop, Comment, Order, Product, Coupon, sequelize } = require("../database/models");
const { queryTypes } = require("sequelize")

module.exports = {
    findOne: async (id) => {
        return await Shop.findByPk(id, {
            include: [
                "products",
                "users",
                "orders",
                "shopCoupons",
                "shopPayments",
                "shopShippingMethods",
            ],
        });
    },
    findAll: async () => {
        return await Shop.findAll({
            include: [
                "products",
                "users",
                "orders",
                "shopCoupons",
                "shopPayments",
                "shopShippingMethods",
            ],
        });
    },
    create: async (attributes) => {
        return await Shop.create(
            attributes
        );
    },
    destroy: async (id) => {
        return await Shop.destroy({
            where: {id: id}
        });
    },
    update: async (id, attributes) => {
        return await Shop.update(
            attributes,
            { where: {id: id} }
        );
    },
    getShopData: async (shop) => {

        let products = await Product.findAll({
            include:[ "shops", "categories", "types"],
            where: {
                shopId: shop.id,
            },
        });

        let comments = await Comment.findAll({
            include:[ "users", "products"],
            where: {
                "$products.shopId$": shop.id,
            },
        });

        let orders = await Order.findAll({ 
            include:["users", "shops", "payments", "cartItems", "products", 
                     "billAddresses", "shippingAddresses", "shippingMethods", "coupons", "status"],
            where: {
                shopId: shop.id,
            },
        });
        
        let coupons = await Coupon.findAll({
            include: ["coupons", "shopCoupons"],
            where: {
                shopId: shop.id,
            },
        });

        return (data = { products, comments, orders, coupons });
    },
};



