const { User, Comment, Order, Shop } = require("../database/models");

module.exports = {
    findOne: async (id) => {
        return await User.findByPk(id, {
            include: ["shops", "comments", "orders", "addresses"],
        });
    },
    findAll: async () => {
        return await User.findAll({
            include: ["shops", "comments", "orders", "addresses"],
        });
    },
    create: async (attributes) => {
        return await User.create(
            attributes
        );
    },
    destroy: async (id) => {
        return await User.destroy({
            where: {id: id}
        });
    },
    update: async (id, attributes) => {
        return await User.update(
            attributes,
            { where: {id: id} }
        );
    },

    checkUserEmail: async (checkEmail) => {
        let user = await User.findAll({
            where: {
                email: checkEmail,
            },
        });
        if(user.length != 0){
            return 'used';
        } else {
            return null;
        };
    },

    checkUserName: async (userName) => {
        let user = await User.findAll({
            where: {
                userName: userName,
            },
        });
        if(user.length != 0){
            return 'used';
        } else {
            return null;
        };
    },

    getUserData: async (currentUser) => {
       
        //user comments
        let comments = await Comment.findAll({
            include:[ "users", "products"],
            where: {
                userId: currentUser.id,
            },
        });

        //user order
        let orders = await Order.findAll({ 
            include:["users", "shops", "payments", "cartItems", "products", 
                     "billAddresses", "shippingAddresses", "shippingMethods", "coupons", "status"],
            where: {
                userId: currentUser.id,
            },
        });

        // user Shop
        let shop = await Shop.findByPk(currentUser.id, {
            include: [
                "products",
                "users",
                "orders",
                "shopCoupons",
                "shopPayments",
                "shopShippingMethods",
            ],
        });

        //user data
        return (data = { comments, orders, shop });
    },
};



