// Services
const productService = require("../../services/productService");
const { Product } = require("../../database/models")

// Controller
const productsController = {
    findAll: async (req, res) => {
        let page = req.query.page ? req.query.page : 0;
        let count = await Product.count();
        let products = await Product.findAll({
            include:["shops", "categories", "types", "orders", "cartItems", "comments"],
            order: [["id", "ASC"]],
            offset: page * 10,
            limit: 10,
        });

        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
                totalCount: count,
            },
            data: products,
        });
    },

    productCount: async (req, res) => {
        let count = await Product.count();
        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
            },
            data: count,
        });
    },

    findOne: async (req, res) => {
        try {
            let product = await productService.findOne(req.params.id);
            res.json({
                meta: {
                    status: 200,
                    url: req.originalUrl,
                },
                data: product,
            });
        } catch (error) {
            res.status(400).send(error.message);
        }
    },

    findLast: async (req, res) => {
        let lastId = await Product.count();
        let lastProduct = await productService.findOne(lastId);
        console.log(lastProduct);

        res.json({
            meta: {
                status: 200,
                url: req.originalUrl,
            },
            data: lastProduct,
        });
    },
};

module.exports = productsController;