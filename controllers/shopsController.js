// Require
const { check, validationResult, body } = require("express-validator");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

// Services
const shopService = require("../services/shopService");
const userService = require("../services/userService");
const paymentService = require("../services/paymentService");
const shippingMethodService = require("../services/shippingMethodService");
const categoryService = require("../services/categoryService");
const typeService = require("../services/typeService");
const { Shop, Product } = require("../database/models")

// Controller
const shopsController = {
    //GET shop profile
    getShop: async (req, res, next) => {
        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;
        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        let loggedUserId = req.session.loggedUserId;
        try {
            let currentUser = await userService.findOne(loggedUserId);
            let shop = await shopService.findOne(req.params.id);
            let shopData = await shopService.getShopData(shop);
            res.render("shops/shop-profile", {
                notification: notification,
                message: message,
                errors: validateErrors,
                currentUser: currentUser,
                products: shopData.products,
                comments: shopData.comments,
                orders: shopData.orders,
                coupons: shopData.coupons,
                shop,
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //GET shops page
    getShops: async (req, res, next) => {
        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;
        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            let url = req.route.path;
            console.log(url);
            let page = req.query.page ? req.query.page : 0;
            let shops = await Shop.findAll({
                include: ["products", "users", "orders", "shopCoupons"],
                where: { status: "active" },
                order: [["id", "ASC"]],
                offset: page * 20,
                limit: 20,
            });

            let activeShops = await Shop.findAll({
                where: { status: "active" },
            });
            let totalPages =
                (activeShops.length - (activeShops.length % 20)) / 20;

            res.render("shops/shopping", {
                notification: notification,
                message: message,
                errors: validateErrors,
                shops,
                totalPages,
                page,
                url,
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //GET shops search page
    getQuerySearch: async (req, res, next) => {
        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;
        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            let url = req.route.path;
            let search = req.query.search;
            let page = req.query.page ? req.query.page : 0;

            let shops = await Shop.findAll({
                include: ["products", "users", "orders", "shopCoupons"],
                where: {
                    status: "active",
                    name: {
                        [Op.like]: `%${search}%`,
                    },
                },
                order: [["name", "ASC"]],
                offset: page * 20,
                limit: 20,
            });

            let activeShops = await Shop.findAll({
                where: {
                    status: "active",
                    name: {
                        [Op.like]: `%${search}%`,
                    },
                },
            });
            let totalPages =
                (activeShops.length - (activeShops.length % 20)) / 20;

            res.render("shops/shopping", {
                notification: notification,
                message: message,
                errors: validateErrors,
                shops,
                totalPages,
                page,
                url,
                search,
                shopsSearched: activeShops.length,
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //POST shops search page
    postQuerySearch: async function (req, res) {
        if (req.body.search == "") {
            return res.redirect("/shops/shopping");
        }
        let searched = req.body.search;
        try {
            let shops = await Shop.findAll({
                where: {
                    status: "active",
                    name: {
                        [Op.like]: `%${searched}%`,
                    },
                },
            });

            if (shops.length == 0) {
                req.flash("validateErrors", [
                    {
                        msg: `No se encontraron tiendas que contengan "${searched}", por favor intenta con otra búsqueda`,
                    },
                ]);
                return res.redirect("/shops/shopping/search");
            }

            req.flash("message", "Perfecto, tenemos algunos resultados!");
            return res.redirect(`/shops/shopping/search?search=${searched}`);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },

    //GET shop details page
    getShopDetails: async function (req, res) {
        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;

        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            let shopId = req.params.id;
            let shop = await shopService.findOne(shopId);
            let url = req.route.path;
            let page = req.query.page ? req.query.page : 0;
            let products = await Product.findAll({
                include: ["shops", "categories", "types"],
                where: { status: "active", shopId: shopId },
                order: [["id", "ASC"]],
                offset: page * 8,
                limit: 8,
            });

            let activeProducts = await Product.findAll({
                where: { status: "active", shopId: shopId },
            });

            let totalPages =
                (activeProducts.length - (activeProducts.length % 8)) / 8;

            let categories = await categoryService.findAll();
            let types = await typeService.findAll();

            res.render("shops/shop-details", {
                notification: notification,
                message: message,
                errors: validateErrors,
                shop,
                products,
                categories,
                types,
                totalPages,
                page,
                url,
                selectedType: null,
                selectedCategory: null,
            });
        } catch (error) {
            res.status(404).send(error.message);
        }
    },

    //GET shop details categories filter page
    getQueryShopDetailsCategory: async function (req, res) {
        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;

        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            let shopId = req.params.id;
            let shop = await shopService.findOne(shopId);
            let page = req.query.page ? req.query.page : 0;
            let url = req.route.path;
            let categoryQuery = req.query.category ? req.query.category : "all";

            let products;
            let activeProducts;
            let selectedCategory;
            if (categoryQuery == "all") {
                products = await Product.findAll({
                    include: ["shops", "categories", "types"],
                    where: { status: "active", shopId: shopId },
                    order: [["id", "ASC"]],
                    offset: page * 8,
                    limit: 8,
                });
                activeProducts = await Product.findAll({
                    where: { status: "active", shopId: shopId },
                });
                selectedCategory = null;
            } else {
                products = await Product.findAll({
                    include: ["shops", "categories", "types"],
                    where: {
                        status: "active",
                        categoryId: categoryQuery,
                        shopId: shopId,
                    },
                    order: [["id", "ASC"]],
                    offset: page * 8,
                    limit: 8,
                });
                activeProducts = await Product.findAll({
                    where: {
                        status: "active",
                        categoryId: categoryQuery,
                        shopId: shopId,
                    },
                });
                let findCategory = await categoryService.findOne(categoryQuery);
                selectedCategory = {
                    name: findCategory.name,
                    id: findCategory.id,
                };
            }

            let totalPages =
                (activeProducts.length - (activeProducts.length % 8)) / 8;

            let categories = await categoryService.findAll();
            let types = await typeService.findAll();
            let selectedType = null;

            res.render("shops/shop-details", {
                notification: notification,
                message: message,
                errors: validateErrors,
                shop,
                products,
                categories,
                types,
                totalPages,
                page,
                url,
                selectedType,
                selectedCategory,
            });
        } catch (error) {
            res.status(404).send(error.message);
        }
    },

    //GET shop details types filter page
    getQueryShopDetailsTypes: async function (req, res) {
        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;

        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            let shopId = req.params.id;
            let shop = await shopService.findOne(shopId);
            let page = req.query.page ? req.query.page : 0;
            let url = req.route.path;
            let typeQuery = req.query.type ? req.query.type : "all";

            let products;
            let activeProducts;
            let selectedType;
            if (typeQuery == "all") {
                products = await Product.findAll({
                    include: ["shops", "categories", "types"],
                    where: { status: "active", shopId: shopId },
                    order: [["id", "ASC"]],
                    offset: page * 8,
                    limit: 8,
                });
                activeProducts = await Product.findAll({
                    where: { status: "active", shopId: shopId },
                });
                selectedType = null;
            } else {
                products = await Product.findAll({
                    include: ["shops", "categories", "types"],
                    where: {
                        status: "active",
                        typeId: typeQuery,
                        shopId: shopId,
                    },
                    order: [["id", "ASC"]],
                    offset: page * 8,
                    limit: 8,
                });
                activeProducts = await Product.findAll({
                    where: {
                        status: "active",
                        typeId: typeQuery,
                        shopId: shopId,
                    },
                });
                let findType = await typeService.findOne(typeQuery);
                selectedType = { name: findType.name, id: findType.id };
            }

            let totalPages =
                (activeProducts.length - (activeProducts.length % 8)) / 8;

            let categories = await categoryService.findAll();
            let types = await typeService.findAll();

            res.render("shops/shop-details", {
                notification: notification,
                message: message,
                errors: validateErrors,
                shop,
                products,
                categories,
                types,
                totalPages,
                page,
                url,
                selectedCategory: null,
                selectedType,
            });
        } catch (error) {
            res.status(404).send(error.message);
        }
    },

    //GET shop details search page
    getQueryShopDetailsSearch: async function (req, res) {
        // Notifications
        const validateErrors = req.flash("validateErrors");
        const message = req.flash("message");
        let notification = null;

        if (validateErrors.length != 0) {
            notification = "error";
        } else if (message.length != 0) {
            notification = "message";
        }

        try {
            let shopId = req.params.id;
            let shop = await shopService.findOne(shopId);
            let url = req.route.path;
            let search = req.query.search;
            let page = req.query.page ? req.query.page : 0;

            let products = await Product.findAll({
                include: ["shops", "categories", "types"],
                where: {
                    status: "active",
                    shopId: shopId,
                    name: {
                        [Op.like]: `%${search}%`,
                    },
                },
                order: [["name", "ASC"]],
                offset: page * 8,
                limit: 8,
            });

            let activeProducts = await Product.findAll({
                where: {
                    status: "active",
                    shopId: shopId,
                    name: {
                        [Op.like]: `%${search}%`,
                    },
                },
            });
            let totalPages =
                (activeProducts.length - (activeProducts.length % 8)) / 8;

            let categories = await categoryService.findAll();
            let types = await typeService.findAll();

            res.render("shops/shop-details", {
                notification: notification,
                message: message,
                errors: validateErrors,
                shop,
                products,
                categories,
                types,
                totalPages,
                page,
                url,
                productsSearched: activeProducts.length,
                search,
                selectedType: null,
                selectedCategory: null,
            });
        } catch (error) {
            res.status(404).send(error.message);
        }
    },

    //POST shop details search page
    postQueryShopDetailsSearch: async function (req, res) {
        let shopId = req.params.id;
        if (req.body.search == "") {
            return res.redirect(`/shops/shop-details/${shopId}`);
        }
        let searched = req.body.search;
        try {
            let products = await Product.findAll({
                where: {
                    status: "active",
                    shopId: shopId,
                    name: {
                        [Op.like]: `%${searched}%`,
                    },
                },
            });

            if (products.length == 0) {
                req.flash("validateErrors", [
                    {
                        msg: `No se encontraron productos que contengan "${searched}" en esta tienda, por favor intenta con otra búsqueda`,
                    },
                ]);
                return res.redirect(`/shops/shop-details/${shopId}/search`);
            }

            req.flash("message", "Perfecto, tenemos algunos resultados!");
            return res.redirect(`/shops/shop-details/${shopId}/search?search=${searched}`);
        } catch (error) {
            res.status(404).send(error.message);
        }
    },

    // PUT shop profile data form
    putShopData: async (req, res, next) => {
        let errors = validationResult(req);
        try {
            let shop = await shopService.findOne(req.params.id);
            if (errors.isEmpty()) {
                let filename = req.file ? req.file.filename : shop.avatar;

                await shopService.update(shop.id, {
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email,
                    avatar: filename,
                    bio: req.body.bio,
                    facebook: req.body.facebook,
                    instagram: req.body.instagram,
                    twitter: req.body.twitter,
                });

                req.flash(
                    "message",
                    "La tienda fue actualizada correctamente."
                );
                res.redirect(`/shops/${shop.id}/profile#tab-info`);
            } else {
                req.flash("validateErrors", errors.errors);
                return res.redirect(`/shops/${shop.id}/profile#tab-data`);
            }
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    //POST create shop
    postShopCreate: async (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const loggedUserId = req.session.loggedUserId;
            try {
                let avatar = req.file ? req.file.filename : "default-shop.jpg";

                // Crear tienda
                let shop = await shopService.create({
                    name: req.body.name,
                    phone: req.body.phone,
                    email: req.body.email,
                    avatar: avatar,
                    ranking: 0,
                    status: "active",
                    sales: 0,
                    bio: req.body.bio,
                    facebook: req.body.facebook,
                    instagram: req.body.instagram,
                    twitter: req.body.twitter,
                    tokenKey: null,
                    publicKey: null,
                    marketplaceLink: null,
                    marketplaceApp: null,
                });

                // creamos metodo de pago base
                await paymentService.create({
                    name: "Mercado Pago",
                    description:
                        "A través de Mercado Pago, tus clientes pueden pagar con tarjetas de crédito, con transferencia bancaria e incluso en efectivo.",
                    type: "mercadopago",
                    status: "blocked",
                    shopId: shop.id,
                });

                await paymentService.create({
                    name: "Efectivo",
                    description:
                        "Consiste en pagar un bien o servicio con dinero físico, con un cheque bancario al portador o con algún otro medio físico similar.",
                    type: "cash",
                    status: "active",
                    shopId: shop.id,
                });

                // Creamos metodo de envio base
                await shippingMethodService.create({
                    name: "Arreglo con el vendedor",
                    amount: 0,
                    description:
                        "Consiste entre en un arreglo privado entre la tienda y el consumidor final.",
                    location: "Domicilio del vendedor",
                    status: "active",
                    shopId: shop.id,
                });

                // Actualizar propietario
                await userService.update(loggedUserId, {
                    shopId: shop.id,
                    role: "seller",
                });

                req.flash(
                    "message",
                    "Tu tienda fue creada correctamente, ya puedes empezar a vender tu productos."
                );
                res.redirect(`/shops/${shop.id}/profile#tab-info`);
            } catch (error) {
                res.status(400).send(error.message);
            }
        } else {
            req.flash("validateErrors", errors.errors);
            res.redirect(`/users/${req.params.id}/profile`);
        }
    },
};

module.exports = shopsController;